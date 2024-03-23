# import pandas as pd

# # Read the data
# data = pd.read_csv('sentimentdataset.csv')

# # Convert data to DataFrame
# df = pd.DataFrame(data)

# # Preprocess the 'Timestamp' column to extract hour
# df['Hour'] = pd.to_datetime(df['Timestamp']).dt.hour

# # Preprocess the 'Platform' column to remove leading and trailing whitespace
# df['Platform'] = df['Platform'].str.strip()

# # Group data by platform and hour, count the number of unique users for each group
# platform_hourly_active_users = df.groupby(['Platform', 'Hour'])['User'].nunique()

# # Define a function to find the top 10 busiest hours for each platform
# def top_10_best_times_for_platform(platform):
#     platform_data = platform_hourly_active_users[platform].sort_values(ascending=False).head(10)
#     print(f"Top 10 Best Times for {platform}:")
#     for hour, num_users in platform_data.items():
#         print(f"Hour: {hour}, Number of Active Users: {num_users}")

# # Function to find the top 10 best times for all platforms and return as a dictionary
# def top_10_best_times_for_all_platforms():
#     top_10_best_times = {}  # Dictionary to store top 10 best times for each platform

#     # Find the top 10 best times for each platform
#     platforms = df['Platform'].unique()
#     for platform in platforms:
#         platform_data = platform_hourly_active_users[platform].sort_values(ascending=False).head(10)
#         top_10_best_times[platform] = platform_data.index.tolist()  # Convert index (hours) to a list
#     return top_10_best_times

# # Call the function to get the dictionary of top 10 best times for all platforms
# best_times_dict = top_10_best_times_for_all_platforms()

# # Print the top 10 best times for each platform
# for platform, best_times in best_times_dict.items():
#     print(f"Top 10 Best Times for {platform}:")
#     for hour in best_times:
#         print(f"Hour: {hour}")

import pandas as pd
import pickle

# Read the data
data = pd.read_csv('sentimentdataset.csv')

# Convert data to DataFrame
df = pd.DataFrame(data)

# Preprocess the 'Timestamp' column to extract hour
df['Hour'] = pd.to_datetime(df['Timestamp']).dt.hour

# Preprocess the 'Platform' column to remove leading and trailing whitespace
df['Platform'] = df['Platform'].str.strip()

# Group data by platform and hour, count the number of unique users for each group
platform_hourly_active_users = df.groupby(['Platform', 'Hour'])['User'].nunique()

# Pickle the processed DataFrame and grouped data
with open('sentiment_data.pkl', 'wb') as f:
    pickle.dump((df, platform_hourly_active_users), f)

# Print the top 10 best times for each platform directly without using a function
# Load the processed DataFrame and grouped data
with open('sentiment_data.pkl', 'rb') as f:
    df, platform_hourly_active_users = pickle.load(f)

# Find the top 10 best times for each platform
platforms = df['Platform'].unique()
for platform in platforms:
    platform_data = platform_hourly_active_users[platform].sort_values(ascending=False).head(10)
    print(f"Top 10 Best Times for {platform}:")
    for hour in platform_data.index.tolist():
        print(f"Hour: {hour}")
