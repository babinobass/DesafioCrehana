const tickets = (peopleInLine) => {
  let dollars25 = 0,
    dollars50 = 0;

  for (let dollars of peopleInLine) {
    if (dollars === 25) dollars25++;
    else if (dollars === 50) {
      dollars25--;
      dollars50++;
    } else {
      if (dollars50 > 0) {
        dollars50--;
        dollars25--;
      } else dollars25 -= 3;
    }

    if (dollars25 < 0) return "NO";
  }

  return "SI";
};

export default tickets;
