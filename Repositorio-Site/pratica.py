import random

perguntas = {
    "1. Qual é o conceito de algoritmo?": "sequência de passos para resolver um problema",
    "2. O que é uma variável em programação?": "um espaço de memória para armazenar dados",
    "3. O que e uma estrutura de controle em programação?": "um comando que controla o fluxo do programa",
    "4. O que é um loop em programação?": "uma estrutura que repete um bloco de código",
    "5. O que é uma função em programação?": "um bloco de código reutilizável",
    "6. Qual é o resultado da expressão 5 + 3 * 2?": "11",
    "7. O que é um condicional em progamação?": "uma estrutura de controle que executa código com base em uma condição",
    "8. Qual é a linguagem de programação mais utilizada para algoritmos?": "Python",
    "9. O que é um vetor (array) em programação?": "uma coleção ordenada de elementos",
    "10. O que é depuração (debugging) em programação?": "o processo de identificar e corrigir erros no código",
}

def calcular_pontuacao(erros):
    if erros == 0:
        return 10
    elif erros == 1:
        return 5
    else:
        return 0

def pontos (pontuacao):
    if pontuacao == 100:
        return "EXCELENTE! Você atingiu 100 pontos."
    elif pontuacao >= 75:
        return "ÓTIMO! Você fez entre 75 e 99 pontos."
    elif pontuacao >= 50:
        return "BOM! Você fez entre 50 e 74 pontos."
    elif pontuacao >= 25:
        return "REGULAR! Você fez entre 25 e 49 pontos."
    else:
        return "PÉSSIMO! Você fez menos de 24 pontos."

pontuacao_total = 0
erros = 0

print("Bem-vindo ao jogo de Algoritmo e Lógica de Programação!")
print("Você responderá a 10 perguntas. Cada acerto vale 10 ou 5 pontos, dependendo da tentativa.")
print("Você terá duas tentativas para cada pergunta.")
print("Vamos começar!\n")

for pergunta, resposta in perguntas.items():
    print(pergunta)
    tentativa = 1
    while tentativa <= 2:
        resposta_usuario = input("Sua resposta: ").strip().lower()
        if resposta_usuario == resposta.lower():
            pontuacao_total += calcular_pontuacao(tentativa - 1)
            print(f"Resposta correta! Você ganhou {calcular_pontuacao(tentativa - 1)} pontos.\n")
            break
        else:
            if tentativa == 1:
                print("Resposta incorreta. Tente novamente.\n")
            else:
                print(f"Resposta incorreta. A resposta correta era: {resposta}\n")
                erros += 1
            tentativa += 1

print(f"Sua pontuação final é: {pontuacao_total}")
print(pontos(pontuacao_total))
print(f"Você teve {erros} erro(s) e {10 - erros} acerto(s).")

