from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np
import os

# -------------------- INITIALIZE APP --------------------
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# -------------------- LOAD MODEL BUNDLE --------------------
bundle = joblib.load("ensemble_model.pkl")

model = bundle["model"]                 # Stacking model
scaler = bundle["scaler"]               # MinMaxScaler
feature_selector = bundle["selector"]   # SelectFromModel wrapper
selected_features = bundle["selected_features"]  # feature names

print("✅ Model loaded successfully!")


# -------------------- HOME ROUTE --------------------
@app.route("/")
def home():
    return "Liver Disease Prediction API is running ✅"


# -------------------- PREDICTION ROUTE --------------------
@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        # 1. Check for missing fields
        for feature in selected_features:
            if feature not in data or data[feature] == "":
                return jsonify({"error": f"Missing value for: {feature}"}), 400

        # 2. Convert gender to numeric if present
        if "Gender" in data:
            gender = str(data["Gender"]).strip().lower()
            data["Gender"] = 1 if gender in ["male", "m", "1"] else 0

        # 3. Create DataFrame and ensure numeric values
        df = pd.DataFrame([data])
        
        # Convert all values to numeric, coercing errors to NaN
        for col in df.columns:
            df[col] = pd.to_numeric(df[col], errors='coerce')

        # 4. Check for NaN values after conversion
        if df.isnull().any().any():
            nan_cols = df.columns[df.isnull().any()].tolist()
            return jsonify({
                "error": f"Invalid numeric values in: {', '.join(nan_cols)}",
                "details": "Please ensure all fields contain valid numbers"
            }), 400

        # 5. Ensure column order matches training
        df = df[selected_features]

        # 6. Scale features
        try:
            scaled = scaler.transform(df)
            selected = feature_selector.transform(scaled)
        except Exception as e:
            return jsonify({
                "error": "Error in feature processing",
                "details": str(e)
            }), 400

        # 7. Make prediction
        try:
            pred = model.predict(selected)[0]
            prob = model.predict_proba(selected)[0].tolist()
            
            return jsonify({
                "prediction": int(pred),
                "probability": prob,
                "status": "success"
            })
            
        except Exception as e:
            return jsonify({
                "error": "Prediction failed",
                "details": str(e)
            }), 500

    except Exception as e:
        print("❌ API error:", str(e))
        return jsonify({
            "error": "Internal server error",
            "details": str(e)
        }), 500


# -------------------- RUN APP --------------------
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
