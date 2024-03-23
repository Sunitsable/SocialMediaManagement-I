# import pandas as pd
# from sklearn.model_selection import train_test_split
# from sklearn.ensemble import RandomForestRegressor
# from sklearn.metrics import mean_squared_error

# # Load the dataset
# data = pd.read_csv('Marketing campaign dataset.csv')

# # Calculate click-through rate (CTR)
# data['CTR'] = data['clicks'] / data['impressions']

# # Select required columns for features and target variable
# selected_features = ['no_of_days', 'max_bid_cpm', 'impressions', 'clicks', 'media_cost_usd']
# target_variable = 'CTR'

# # Drop rows with missing values
# data = data[selected_features + [target_variable]].dropna()

# def predicted_performance(x,y,z,w,v):
#     # Split data into features and target variable
#     X = data[selected_features]
#     y = data[target_variable]

#     # Split data into train and test sets
#     X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

#     # Initialize and train the model
#     model = RandomForestRegressor(n_estimators=100, random_state=42)
#     model.fit(X_train, y_train)

#     # Use the trained model to predict CTR
#     input_values = [[x, y, z, w, v]]  # Example input values for selected features
#     predicted_ctr = model.predict(input_values)

#     # Return result as a dictionary
#     return {'predicted_performance': predicted_ctr[0]}



import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import pickle

# Load the dataset
data = pd.read_csv('Marketing campaign dataset.csv')

# Select required columns for features and target variable
selected_features = ['no_of_days', 'max_bid_cpm', 'impressions', 'media_cost_usd']
target_variable = 'clicks'  # Change the target variable to 'clicks'

# Drop rows with missing values
data = data[selected_features + [target_variable]].dropna()

# Split data into features and target variable
X = data[selected_features]
y = data[target_variable]

# Split data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save the model and necessary data using pickle
with open('marketing_campaign_model.pkl', 'wb') as f:
    pickle.dump((model, X_train, y_train), f)

# Example input values for selected features

input_values = [[10, 100, 20000, 5000]]  # Adjust values as needed

# Use the trained model to predict clicks
predicted_clicks = model.predict(input_values)

# Print the predicted clicks
print("Predicted Clicks:", predicted_clicks)
