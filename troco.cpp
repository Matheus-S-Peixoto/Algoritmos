#include <iostream>
#include <vector>
#include <cmath>
//#include <algorithm>

using namespace std;

const vector<int> MOEDAS = {100, 50, 25, 10, 5, 1};

vector<int> trocoGuloso(int valor) {
    vector<int> quantidade(MOEDAS.size(), 0);

    for (size_t i = 0; i < MOEDAS.size(); i++) {
        quantidade[i] = valor / MOEDAS[i];
        valor %= MOEDAS[i];
    }

    return quantidade;
}

void imprimir(const vector<int>& quantidade) {
    int total = 0;

    for (size_t i = 0; i < MOEDAS.size(); i++) {
        if (quantidade[i] > 0) {
            cout << quantidade[i] << " moeda(s) de R$ "
                 << MOEDAS[i] / 100 << ","
                 << (MOEDAS[i] % 100 < 10 ? "0" : "") << MOEDAS[i] % 100 << "\n";
            total += quantidade[i];
        }
    }

    cout << "Total de moedas: " << total << "\n";
}

int main() {
    double reais;
    cout << "Digite um valor (ex: 5.75): R$ ";
    cin >> reais;

    int centavos = static_cast<int>(llround(reais * 100));
    if (centavos < 0) {
        cout << "Valor invalido.\n";
        return 1;
    }

    imprimir(trocoGuloso(centavos));

    return 0;
}