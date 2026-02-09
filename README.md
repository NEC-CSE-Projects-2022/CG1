<img width="2256" height="326" alt="image" src="https://github.com/user-attachments/assets/6524082a-0054-46b5-a60d-7b9d50c4bbeb" />
# Team Number CG1– Project Title(ExplaiLiver+: A Multi-Stage Stacking Framework with SHAP-Based Interpretability for Clinical Liver Disease Prediction)

## Team Info
- 22471A05H5 — **Pulagorla Mounica** ( www.linkedin.com/in/mounica-pulagorla )
_Work Done: Paper title finalization, Coordinated overall project execution,Model implementation and code execution (Machine Learning algorithms), Training, testing, and performance evaluation,Paper documentation, formatting, and final paper preparation,paper presentation design,Frontend integration and deployment support

- 22471A05G9 — **Mahamkali Ramadevi** ( https://www.linkedin.com/in/ramadevi-mahamkali-625801277 )
_Work Done: Model implementation and code execution (Machine Learning algorithms),Result analysis and generating graphs/tables for the paper,Assisted in conference submission preparation,paper presentation design,Backend code implementation

- 22471A05K4 — **Valivarthi Abhinayasri** ( https://www.linkedin.com/in/abhinayasri-valivarthi-b585b1282 )
_Work Done: Base paper research and literature survey, Dataset identification and preprocessing support,Dataset collection and feature understanding,PPT creation and paper presentation design, Frontend design



## Abstract
—Improving patient outcomes and facilitating early
medical intervention depend on timely and accurate liver disease
prediction. In this work, we present ExplaiLiver+, a new multi
stage stacking ensemble framework that uses SHAP to combine
interpretability of the model with high predictive performance.
Robust preprocessing methods such as skewness correction,
class balancing with SMOTEENN, feature selection using an
ExtraTrees-based approach, and missing value imputation are all
integrated into the framework. Four heterogeneous base classi
fiers—XGBoost, ExtraTrees, LightGBM, and CatBoost—stacked
via a logistic regression meta-learner are used in the core
ensemble architecture to improve generalization. ExplaiLiver+
outperforms individual baseline models with an AUC of 98.39%
and a test accuracy of 94.05%, This study utilizes the ILPD
for analysis. SHAP values are employed to illustrate feature
importance and provide an explanation of individual predictions
in order to guarantee decision-making transparency. The sug
gested system shows how clinical decision support systems for
liver disease detection can be made much more reliable and
trustworthy by fusing feature-level explainability with model
level ensemble learning.
Index Terms—Liver disease prediction, stacking ensemble,
SHAP, explainable AI (XAI), feature selection, SMOTEENN,
clinical decision support system, XGBoost, CatBoost, LightGBM

---

## Paper Reference (Inspiration)
👉 **[Paper Title Toward an Accurate Liver Disease Prediction Based on Two-Level Ensemble Stacking Mode
  – Author Names Nora Mahmoud El-Rashidy 
 ](https://ieeexplore.ieee.org/document/10680897)**
Original conference/IEEE paper used as inspiration for the model.

---

## Our Improvement Over Existing Paper
The proposed ExplaiLiver+ framework significantly improves over existing liver disease prediction studies in several aspects. Unlike earlier works that relied on single models or simple ensembles, our system introduces a two-level stacking ensemble combining XGBoost, LightGBM, CatBoost, and ExtraTrees with a Logistic Regression meta-learner, enabling better pattern learning from complex clinical parameters.

---

## About the Project
--Liver disease is a major global health concern, causing around 2 million deaths annually.
--Traditional diagnostic methods such as liver function tests and biopsies are invasive, costly, and time-consuming.
--This study aims to develop an explainable, machine learning–based model (ExplaiLiver+) for early and reliable liver disease prediction.
--The Indian Liver Patient Dataset (ILPD), containing 583 records and 10 clinical parameters, is used.
--Preprocessing includes handling missing values, scaling, feature selection, and class balancing.
--Four models are combined — XGBoost, LightGBM, CatBoost, and ExtraTrees — with Logistic Regression as meta-learner.
--Achieved 94.05% accuracy and 98.39% AUC, better than single models.
--Provides reliable, interpretable, and data-driven support for clinical liver disease prediction.



## Dataset Used
👉 **[India Patient Liver Data]((https://www.kaggle.com/datasets/irfancanan/indianliverpatientdatasetilpd-csv))**

**Dataset Details:**
This project uses the ILPD Augmented Liver Patient Dataset, which contains clinical details of patients to predict whether a person has liver disease or not.

The dataset has 5000 records and 11 features, including blood test parameters and patient information.

📊 Features in the Dataset
Column Name          	Description
age	                  Age of the patient
gender              	Gender (Male/Female)
tot_bilirubin        	Total Bilirubin level in blood
direct_bilirubin    	Direct Bilirubin level
tot_proteins	        Total proteins in blood
albumin                	Albumin level in blood
ag_ratio            	Albumin and Globulin ratio
sgpt	                SGPT enzyme level (Alanine Aminotransferase)
sgot	                SGOT enzyme level (Aspartate Aminotransferase)
alkphos	              Alkaline Phosphatase level
is_patient	           Target column (1 = Liver Patient, 0 = Healthy)
🎯 Target Variable

is_patient = 1 → Patient has liver disease

is_patient = 0 → Patient is healthy

✅ Purpose of Dataset

This dataset is used for machine learning classification to predict liver disease based on medical test values.

---

## Dependencies Used
The system is implemented using a combination of machine learning, data processing, and visualization libraries. Pandas and NumPy are used for data handling and numerical operations. Scikit-learn provides preprocessing tools, feature selection, model evaluation metrics, and the StackingClassifier framework. Advanced ensemble models are implemented using XGBoost, LightGBM, and CatBoost. Imbalanced-learn (SMOTEENN) is used for class imbalance handling. SHAP is used to provide model interpretability, and Matplotlib is used for visualizations such as ROC curves and feature importance plots.

---

## EDA & Preprocessing
Exploratory Data Analysis (EDA) was performed to understand feature distributions, correlations, and class imbalance. A correlation heatmap helped identify relationships among liver function parameters. Missing values in the A/G Ratio attribute were handled using median imputation. The categorical feature Gender was converted using label encoding. All numerical features were normalized using Min–Max scaling to ensure uniform contribution to model training. Since the dataset was imbalanced, SMOTE-ENN was applied to oversample the minority class and remove noisy samples, resulting in a more balanced and cleaner dataset for learning.

---

## Model Training Info
Environment & Tools: 3.10 (Google Colab) with Scikit-learn, XGBoost, LightGBM, CatBoost, Pandas, NumPy, and Matplotlib for implementation and visualization.
Data Split & Validation: 80:20 train-test split with 15-fold Stratified Cross-Validation.
Preprocessing: Median imputation for A/G Ratio, label encoding for Gender, Min–Max scaling, and SMOTE-ENN for balancing.
Feature Pipeline: ExtraTrees-based feature selection, log transform for skewed features, and correlation heatmap analysis.
Model Tuning & Training: ExplaiLiver+ stacking of XGBoost, LightGBM, ExtraTrees, and CatBoost with Logistic Regression meta-learner.Hyperparameters optimized through Grid Search for each model within the stacking pipeline.
Evaluation & Validation: Accuracy = 94.05%, AUC = 0.9839 using Precision, Recall, F1, and ROC metrics.
Hardware & Reproducibility: Executed on Google Colab (CPU/GPU runtime) with fixed random seeds for reproducibility.



---

## Model Testing / Evaluation
After training, the model was evaluated using a separate test set to measure its real-world predictive ability. Performance was assessed using multiple metrics to ensure reliability. Accuracy measures overall correctness, while Precision and Recall evaluate the model’s ability to correctly identify liver disease cases without excessive false alarms. The F1-score provides a balance between Precision and Recall. ROC-AUC evaluates the model’s discrimination capability across different thresholds. A confusion matrix was generated to visualize true positives, true negatives, false positives, and false negatives. These evaluation techniques confirm that the ExplaiLiver+ stacking model achieves strong predictive performance with high reliability and robustness.

---

## Results
 1.   Model Comparison:
Six classifiers were evaluated — Random Forest, ExtraTrees, LightGBM, XGBoost, CatBoost, and the proposed ExplaiLiver+ stacking ensemble 
The ExplaiLiver+ model (Logistic Regression meta-learner over four base models) achieved the best overall performance. 
2.  Performance Metrics:
Accuracy: 94.05% 
Precision: 94.33% 
Recall: 93.84% 
F1-Score: 94.02% 
AUC-ROC: 0.9839
3.  Key Insights:
The ensemble approach significantly outperformed all single models. 
Bilirubin, Albumin, and Enzyme levels (SGPT, SGOT, ALP) were identified as top predictors. 
SMOTE-ENN effectively improved minority class recognition, reducing false negatives. 
The model showed strong consistency across cross-validation folds, confirming reliability.
4.  Interpretation:
The ExplaiLiver+ stacking framework successfully combined multiple gradient-based and tree-based models to enhance robustness and interpretability. 
Its high AUC and balanced metrics demonstrate reliable liver disease detection, offering a clinically explainable and deployable solution for healthcare diagnosis.



---

## Limitations & Future Work
ExplaiLiver+ achieved 94% accuracy with strong generalization using a multi-stage stacking ensemble.
Effective preprocessing (SMOTE-ENN, scaling, feature selection) and SHAP explainability improved reliability, transparency, and clinical trust.
The approach reduces noise propagation and enhances semantic alignment in multi-view graph learning.
Integrate with real-time clinical systems or IoT-based health monitoring.
Expand to multi-center datasets and multi-class liver disease prediction for broader applicability.



---

## Deployment Info

Backend
---------
Platform: Render (Python Web Service)
Live URL: https://liver1.onrender.com
Health Check: GET /
Example: https://liver1.onrender.com/
Prediction Endpoint: POST /predict
Example: https://liver1.onrender.com/predict
Build Command: pip install -r requirements.txt, gunicorn app:app

Frontend
-----------
Platform: Vercel (Create React App)
Root Directory: frontend
install command: npm install
build command:npm run build
Output Directory: build
Environment Variables (Vercel)
Set this in Vercel → Project Settings → Environment Variables:

Key: REACT_APP_API_BASE_URL
Value: https://liver1.onrender.com
After changing env vars, redeploy on Vercel (CRA reads env vars at build time).
url: https://liver1-aaon.vercel.app/

Connection Summary
-----------------

The frontend sends requests to:
${REACT_APP_API_BASE_URL}/predict
Backend CORS is enabled, so Vercel (frontend domain) can call Render (backend domain).


-----
