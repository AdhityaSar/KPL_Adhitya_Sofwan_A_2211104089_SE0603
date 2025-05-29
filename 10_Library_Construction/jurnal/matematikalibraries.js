const MatematikaLibraries = {
  FPB: function (a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a);
  },

  KPK: function (a, b) {
    return Math.abs(a * b) / this.FPB(a, b);
  },

  Turunan: function (koefisien) {
    let turunan = [];
    let pangkat = koefisien.length - 1;

    for (let i = 0; i < koefisien.length - 1; i++) {
      let coef = koefisien[i] * pangkat;
      if (coef !== 0) {
        let xPart = pangkat - 1 > 0 ? `x${pangkat - 1 > 1 ? pangkat - 1 : ''}` : '';
        turunan.push(`${coef >= 0 && i > 0 ? '+ ' : ''}${coef}${xPart}`);
      }
      pangkat--;
    }

    return turunan.join(' ');
  },

  Integral: function (koefisien) {
    let integral = [];
    let pangkat = koefisien.length;

    for (let i = 0; i < koefisien.length; i++) {
      let newPangkat = pangkat - i;
      let newCoef = koefisien[i] / newPangkat;
      let displayCoef = newCoef === 1 ? '' : (newCoef === -1 ? '-' : newCoef);
      integral.push(`${newCoef >= 0 && i > 0 ? '+ ' : ''}${displayCoef}x${newPangkat > 1 ? newPangkat : ''}`);
    }

    integral.push('+ C');
    return integral.join(' ');
  }
};

module.exports = MatematikaLibraries;