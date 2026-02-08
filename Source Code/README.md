**Project**: Liver Disease Prediction
**Frontend**: React , Bootstrap, Axios, React Router
**Backend**: Python Flask API, scikit-learn + (xgboost/lightgbm/catboost), joblib model (ensemble_model.pkl)

**Run Commands**-Frontend: npm install, npm start,Backend: pip install -r requirements.txt, python app.py

**Deployment:**
Frontend: Vercel(https://liver1-aaon.vercel.app/)
Backend: Render(https://liver1.onrender.com)

**Main user flow (Predict)**-**Frontend**
-User enters values in the Predict form.
-Frontend converts inputs to numbers and sends them to backend using an HTTP request.

**Backend (Flask) **
Provides an API that runs the ML model and returns prediction results.
**Tech used-Flask** (+ flask-cors),pandas / numpy,scikit-learn + xgboost/lightgbm/catboost (inside the trained model), joblib to load the saved model file ensemble_model.pkl

**Key API endpoints**
GET /    --   Health check (“API running”)
POST /predict   -- Takes JSON input values, Applies scaler/feature selection, Calls the model and returns:prediction (0/1),probability (class probabilities

**How frontend and backend are connected**
They communicate using a REST API call over HTTP:
Frontend sends request--   From Predict.jsx, it calls:URL: POST {API_BASE_URL}/predict
                           Body: JSON like
                           Age, Gender, TB, DB, Alkphos, SGPT, SGOT, TP, ALB, A/G Ratio

Backend receives and responds--   Backend reads JSON
                                  Validates missing/invalid fields
                                  Runs the model
                                  Responds with JSON result

Frontend displays result--     Frontend reads response JSON and shows: prediction text (disease / no disease)
                               confidence/probability
                                basic “analysis” messages

