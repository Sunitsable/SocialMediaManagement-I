# import pandas as pd
# from sklearn.linear_model import LinearRegression
# from sklearn.model_selection import train_test_split
# from sklearn.metrics import mean_squared_error, r2_score
# import numpy as np
# from scipy.optimize import minimize

# # Importing data
# data = pd.read_csv('advertising_sales_dataset.csv')

# # Create DataFrame
# df = pd.DataFrame(data)

# # Splitting the data into features and target variable
# X = df.drop('Sales', axis=1)
# y = df['Sales']

# # Splitting the data into training and testing sets
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# # Creating and fitting the model
# model = LinearRegression()
# model.fit(X_train, y_train)

# def optimize_budget(ads):
#     # Function to minimize (negative of sales prediction)
#     def negative_sales(x):
#         return -model.predict([x])[0]

#     # Initial guess
#     x0 = np.array(ads)

#     # Bounds for the input features (number of ads)
#     bounds = [(0, None)] * len(X.columns)

#     # Optimization
#     result = minimize(negative_sales, x0, bounds=bounds)

#     # Extracting optimal number of ads for each social media platform
#     optimal_ads = result.x.astype(int)

#     # Prepare the output excluding platforms with 0 ads
#     output = ""
#     for platform, num_ads in zip(X.columns, optimal_ads):
#         if num_ads != 0:
#             output += f"{platform}: {num_ads}\n"

#     # Add maximum predicted sales
#     output += f"\nMaximum Predicted Sales: {abs(result.fun)}"

#     return output

# # Example usage:
# input_ads = [10, 3023715, 5723451, 5190353, 20, 10646791, 36344528, 40, 60, 74585762, 53697658]
# print(optimize_budget(input_ads))


import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np
from scipy.optimize import minimize
import pickle

# Importing data
data = pd.read_csv('advertising_sales_dataset.csv')

# Create DataFrame
df = pd.DataFrame(data)

# Splitting the data into features and target variable
X = df.drop('Sales', axis=1)
y = df['Sales']

# Splitting the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Creating and fitting the model
model = LinearRegression()
model.fit(X_train, y_train)

# Save the model and necessary data using pickle
with open('advertising_sales_model.pkl', 'wb') as f:
    pickle.dump((model, X_train, y_train), f)

# Example usage without the function
input_ads = [10, 3023715, 5723451, 5190353, 20, 10646791, 36344528, 40, 60, 74585762, 53697658]

# Load the model
with open('advertising_sales_model.pkl', 'rb') as f:
    model, X_train, y_train = pickle.load(f)

# Function to minimize (negative of sales prediction)
def negative_sales(x):
    return -model.predict([x])[0]

# Initial guess
x0 = np.array(input_ads)

# Bounds for the input features (number of ads)
bounds = [(0, None)] * len(X.columns)

# Optimization
result = minimize(negative_sales, x0, bounds=bounds)

# Extracting optimal number of ads for each social media platform
optimal_ads = result.x.astype(int)

# Prepare the output excluding platforms with 0 ads
output = ""
for platform, num_ads in zip(X.columns, optimal_ads):
    if num_ads != 0:
        output += f"{platform}: {num_ads}\n"

# Add maximum predicted sales
output += f"\nMaximum Predicted Sales: {abs(result.fun)}"
#output += f"\nPredicted Sales: {model.predict(input_ads)[0]}"
print(output)
