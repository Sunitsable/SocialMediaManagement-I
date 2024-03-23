# from flask import Flask, jsonify
# from performance import predicted_performance
# from schedule import top_10_best_times_for_all_platforms
# from budget import optimize_budget
# from competitor import competitor_analysis
# from audience import audience_analysis
# from content import content_suggestions_route

# app = Flask(__name__)

# @app.route('/')
# def index():
#     return "Welcome to the prediction service!"
# #done
# @app.route('/perfromance-prediction', methods=['GET'])
# def run_prediction():
#     try:
#         result = predicted_performance()
#         return str(result)
#     except Exception as e:
#         return jsonify({'error': str(e)})

# @app.route('/optimize-schedule', methods=['GET'])
# def optimize_schedule_route():
#     try:
#         # Call the function to optimize schedule
#         optimized_schedule = top_10_best_times_for_all_platforms()
#         return jsonify(optimized_schedule)
#     except Exception as e:
#         return jsonify({'error': str(e)})

# #done
# @app.route('/optimize-budget', methods=['GET'])
# def optimize_budget_route():
#     try:
#         # Call the function to optimize budget
#         optimized_budget = optimize_budget()
#         return jsonify(optimized_budget)
#     except Exception as e:
#         return jsonify({'error': str(e)})

# @app.route('/competitor-analysis', methods=['GET'])
# def competitor_analysis_route():
#     try:
#         insights = competitor_analysis()
#         return jsonify(insights)
#     except Exception as e:
#         return jsonify({'error': str(e)})
    
# @app.route('/audience-analysis', methods=['GET'])
# def audience_analysis_route():
#     try:
#         analysis = audience_analysis()
#         return jsonify(analysis)
#     except Exception as e:
#         return jsonify({'error': str(e)})

# @app.route('/content-suggestions', methods=['GET'])
# def content_suggestions_route():
#     try:
#         suggestions = content_suggestions_route()
#         return jsonify(suggestions)
#     except Exception as e:
#         return jsonify({'error': str(e)})
    
# if __name__ == '__main__':
#     app.run(debug=True)
from flask import Flask, jsonify,request
import pickle
import pandas as pd
import numpy as np
from scipy.optimize import minimize
from openai import OpenAI
import webbrowser
import os

# Replace YOUR_API_KEY with your OpenAI API key
client = OpenAI(api_key = "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")

app = Flask(__name__)

@app.route('/')
def index():
    return "Welcome to the prediction service!"

# Route for performance prediction
@app.route('/performance-prediction', methods=['POST'])
def run_prediction():
    try:
        # Load the trained model and necessary data using pickle
        with open('marketing_campaign_model.pkl', 'rb') as f:
            model, X_train, y_train = pickle.load(f)

        request_data = request.json

        # Extract the values from the request body
        days = request_data['days']
        max_bid_cpm = request_data['max_bid_cpm']
        impressions = request_data['impressions']
        cost = request_data['cost']
        # Example input values for selected features
        input_values = [[days,max_bid_cpm,impressions,cost]]  # Adjust values as needed

        # Use the trained model to predict clicks
        predicted_clicks = model.predict(input_values)

        # Return the predicted clicks
        return jsonify({'predicted_clicks': predicted_clicks[0]})
    except Exception as e:
        return jsonify({'error': str(e)})

# Route for optimizing schedule
@app.route('/optimize-schedule', methods=['GET'])
def optimize_schedule_route():
    try:
        # Load the processed DataFrame and grouped data
        with open('sentiment_data.pkl', 'rb') as f:
            df, platform_hourly_active_users = pickle.load(f)

        # Find the top 10 best times for each platform
        platforms = df['Platform'].unique()
        optimized_schedule = {}
        for platform in platforms:
            platform_data = platform_hourly_active_users[platform].sort_values(ascending=False).head(10)
            optimized_schedule[platform] = platform_data.index.tolist()  # Convert index (hours) to a list

        return jsonify(optimized_schedule)
    except Exception as e:
        return jsonify({'error': str(e)})

# Route for optimizing budget
@app.route('/optimize-budget', methods=['POST'])
def optimize_budget_route():
    try:
        # Load the trained model and necessary data using pickle
        with open('advertising_sales_model.pkl', 'rb') as f:
            model, X_train, y_train = pickle.load(f)
            
        request_data = request.json

        # Extract the values from the request body
        instagram = int(request_data['instagram'])
        facebook = int(request_data['facebook'])
        youtube = int(request_data['youtube'])
        twitter = int(request_data['twitter'])
        telegram = int(request_data['telegram'])
        whatsapp = int(request_data['whatsapp'])
        tiktok = int(request_data['tiktok'])
        radio = int(request_data['radio'])
        tv = int(request_data['tv'])
        newspaper = int(request_data['newspaper'])
        website = int(request_data['website'])
        
        # Example usage without the function
        input_ads = [instagram, facebook, youtube, twitter, telegram, whatsapp, tiktok, radio, tv, newspaper, website]

        # Function to minimize (negative of sales prediction)
        def negative_sales(x):
            return -model.predict([x])[0]

        # Optimization
        result = minimize(negative_sales, np.array(input_ads), bounds=[(0, None)] * len(X_train.columns))

        # Extracting optimal number of ads for each social media platform
        optimal_ads = result.x.astype(int)  # Convert int32 to int64

        # Prepare the output excluding platforms with 0 ads
        output = {}
        for platform, num_ads in zip(X_train.columns, optimal_ads):
            if num_ads != 0:
                output[platform] = int(num_ads)  # Convert to native Python integer

        # Add maximum predicted sales
        output['Maximum Predicted Sales'] = abs(result.fun)

        return jsonify(output)
    except Exception as e:
        return str(e)


# Route for competitor analysis (assuming the function exists)
@app.route('/competitor-analysis', methods=['GET'])
def competitor_analysis_route():
    try:
        # Call the function to perform competitor analysis
        insights = competitor_analysis()  # Assuming the function is defined elsewhere
        return jsonify(insights)
    except Exception as e:
        return jsonify({'error': str(e)})

# Route for audience analysis (assuming the function exists)
@app.route('/audience-analysis', methods=['POST'])
def audience_analysis_route():
    try:
        # Load the trained model and label encoders
        with open('social_media_model.pkl', 'rb') as f:
            clf, label_encoders = pickle.load(f)

        request_data = request.json
        # Example user info for prediction
        user_info = {
            'Gender': request_data['Gender'],
            'DOB': request_data['DOB'],
            'City': request_data['City'],
            'Country': request_data['Country']
        }

        # Convert categorical variables to numerical values for user info
        user_info_encoded = {}
        for column in ['Gender', 'City', 'Country']:
            user_info_encoded[column] = label_encoders[column].transform(np.array([user_info[column]]))[0] if user_info[column] in label_encoders[column].classes_ else -1

        # Extract features from 'DOB'
        user_info_encoded['Age'] = pd.Timestamp('now').year - pd.to_datetime(user_info['DOB']).year

        # Select features for the user
        X_user = np.array([[user_info_encoded['Gender'], user_info_encoded['Age'], user_info_encoded['City'], user_info_encoded['Country']]])

        # Make prediction for the user
        user_prediction = clf.predict(X_user)[0]

        return jsonify({'predicted_interests': user_prediction})
    except Exception as e:
        return jsonify({'error': str(e)})


# Route for content suggestions (assuming the function exists)
@app.route('/content-suggestions', methods=['GET'])
def content_suggestions_route():
    try:
        # Call the function to generate content suggestions
        suggestions = content_suggestions_route()  # Assuming the function is defined elsewhere
        return jsonify(suggestions)
    except Exception as e:
        return jsonify({'error': str(e)})
    
@app.route("/generateImage",methods=["POST"])
def generate_image():
    try:
        request_data = request.json
        text = request_data["String"]
        # Call the API
        response = client.images.generate(
        model="dall-e-3",
        prompt=text,
        size="1024x1024",
        quality="standard",
        n=1,
        )
        print(response.data[0].url)
        return response.data[0].url
    except Exception as e:
        return jsonify({'error': str(e)})
        

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5500)

