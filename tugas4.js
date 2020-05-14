var a,b,c;
a = 160;
b = 170;
c = 180;

if (a>b) {
  if (a>c) {
    if (b>c) {
      console.log("a",a);
      console.log("b",b);
      console.log("c",c);
    } else {
      console.log("a",a);
      console.log("c",c);
      console.log("b",b);
    }
  } else {
    console.log("c",c);
    console.log("a",a);
    console.log("b",b);
  }
} else {
  if (b>c) {
    if (a>c) {
      console.log("b",b);
      console.log("a",a);
      console.log("c",c);
    } else {
      console.log("b",b);
      console.log("c",c);
      console.log("a",a);
    }
  } else {
    console.log("c",c);
    console.log("b",b);
    console.log("a",a);
  }
}
