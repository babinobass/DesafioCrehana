# Algoritmo - Venta de Tickets / Ticket Selling Algorithm

Problema de la venta de tickets en una fila de cine.  
Cada persona en la fila tiene un solo billete de 25, 50 o 100 dólares. El precio del ticket es de 25 dólares.  
El objetivo es determinar si la vendedora puede dar cambio a todos, vendiendo los boletos en el orden de la fila y comenzando sin dinero.

This project solves the classic ticket selling problem in a cinema queue.  
Each person in the line has only one bill of 25, 50, or 100 dollars. The ticket price is 25 dollars.  
The goal is to determine if the seller can give change to everyone, selling tickets in order and starting with no money.

La función retorna `"SI"` si es posible vender a todos y dar el cambio correcto, o `"NO"` en caso contrario.  
The function returns `"SI"` if it is possible to sell to everyone and give the correct change, or `"NO"` otherwise.

---

## ¿Cómo ejecutar el script? / How to run the script?

1. **Clona el repositorio o descarga los archivos. / Clone the repository or download the files.**

2. **Instala las dependencias (si quieres correr los tests). / Install dependencies (if you want to run the tests):**

   ```bash
   npm install
   ```

3. **Ejecutar Tests / Run the tests:**

```bash
npm run test
```

## Notas

- Se utilizó una estructura if en lugar de switch para el control de flujo, ya que con pocos casos if suele ser más rápido y directo que switch.
- An if structure was used instead of switch for flow control, since with few cases if is usually faster and more straightforward than switch
