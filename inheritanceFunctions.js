function work() {
  (this.name = "rekha"),
    (this.qualificatiion = "MCA"),
    (this.location = "gudlavalleru");
}

function administraion() {
  (this.accountpay = 25000), (this.officelocation = "hyderabad");
}

administraion.prototype = new work();
var work1 = new administraion();
work1.name;
("rekha");
work1.qualificatiion;
("MCA");
work1.accountpay;
25000;
work1.officelocation;
("hyderabad");


