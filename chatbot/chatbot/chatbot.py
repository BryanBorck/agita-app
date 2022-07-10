from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer

app = Flask(__name__)

agitabot = ChatBot("Agita Chatbot")
trainer = ListTrainer(agitabot)
trainer.train([    "Olá",
    "Olá, tudo bem?",
    "Tudo bem, sim. Qual seu nome?",
    "Eu sou Le Mude, e assistente virtual do site da Agita.",
    "Qual a sua função?",
    "A minha função é ajudar a coletar dados baseado no que você deseja de mim.",
    "Quais são as opções?",
    "Opção 1 - Fazer uma denúncia; 2 - Fazer uma crítica; 3 - Ser um voluntário; 4 - Indicação de Livros; 5- Indicação de Filmes.",
    "Opção 1",
    "Por favor, digite a sua denúncia detalhadamente.",
    "A minha denúncia é um caso de homofobia.",
    "A sua denúncia foi registrada com sucesso e será avaliada.",
    "Opção 2",
    "Por favor, digite a sua crítica.",
    "A minha crítica é que o projeto é ótimo.",
    "A sua crítica foi registrada com sucesso e será utilizada para a melhora da iniciativa.",
    "Opção 3",
    "Por favor, digite seu nome completo e telefone para contato.",
    "Julio Cesar Cardoso Duarte. Telefone (12)912345678.",
    "O seu cadastro foi registrado com sucesso. Muito obrigado por querer contribuir conosco.",
    "Opção 4",
    "As indicações de livros são: Vermelho Branco e Sangue Azul, Enquanto eu não te encontro, Quinze Dias, A garota Dinamarquesa.",
    "Opção 5", 
    "As indicações de filmes são: Me chame pelo seu nome, Moonlight, Carol, A garota Dinamarquesa.",
    "Obrigado",
    "Gostaria de mais alguma coisa?",
    "Não",
    "Obrigado por utilizar o ChatBot da Agita."
    ""])

@app.route("/")
def home(): 
	return render_template("route.html")

@app.route("/get")
def get_bot_response():
	userText = request.args.get('msg')
	return str(agitabot.get_response(userText))
if __name__ == "__main__":
	app.run()