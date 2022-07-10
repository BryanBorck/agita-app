import json
from flask import Flask, request, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager


app = Flask(__name__)

app.config["SECRET_KEY"] = "please-remember-me"
app.config["ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(app)

@app.after_request
def refresh_expiring_jwts(resposta):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = resposta.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                resposta.data = json.dumps(data)
        return resposta
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        return resposta

@app.route('/token', methods=["POST"])
def create_token():    
    obj_request = json.loads(request.stream.read())
    print(obj_request)
    email =obj_request["email"]
    password = obj_request["password"]

    if email != "agita-admin" or password != "AGITA2022":
        return {"msg": "Wrong email or password"}, 401

    access_token = create_access_token(identity=email)
    resposta = jsonify({"access_token":access_token})
    unset_jwt_cookies(resposta)
    return resposta

@app.route("/logout", methods=["POST"])
def logout():
    resposta = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(resposta)
    return resposta

# Running app
if __name__ == '__main__':
    app.run(debug=True)