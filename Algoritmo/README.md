# Algoritmo - Venta de Tickets

Este proyecto resuelve el clásico problema de la venta de tickets en una fila de cine.  
Cada persona en la fila tiene un solo billete de 25, 50 o 100 dólares. El precio del ticket es de 25 dólares.  
El objetivo es determinar si la vendedora puede dar cambio a todos, vendiendo los boletos en el orden de la fila y comenzando sin dinero.

La función retorna `"SI"` si es posible vender a todos y dar el cambio correcto, o `"NO"` en caso contrario.

---

## ¿Cómo ejecutar el script?

1. **Clona el repositorio o descarga los archivos.**

2. **Instala las dependencias (si quieres correr los tests):**
   ```bash
   npm install
   ```

## Notas

- Se utilizó una estructura if en lugar de switch para el control de flujo, ya que con pocos casos if suele ser más rápido y directo que switch.
