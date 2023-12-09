class A {

public Boolean testIfB(String str)

{

return Boolean.valueOf(str);

}

public void testIfA() {

if(testIfB("True"))

System.out.println("true");

else

System.out.println("not true");

}

public static void main(String s[]) {

A obj = new A();

obj.testIfA();

}

}