// metodos estaticos, não precisa criar uma instancia

class Calculadora {

    static somar(a,b){
        console.log(a + b)
    }

    static subtrair(a,b){
        console.log(a - b)
    }
}

Calculadora.somar(9,3) 
Calculadora.subtrair(9,3)
Calculadora.somar(95,63) 
Calculadora.subtrair(29,37)

// node calculadora.js