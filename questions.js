export const questions = [
  {
    question:
      "What is the result of the following code? <br><br>(Choose 1 answer)",
    code: `public class Test {
    public static void main(String[] args) {
        System.out.println(10 + 20 + "Java");
    }
}`,
    answers: [
      { text: "A) Java1020", correct: false },
      { text: "B) Java30", correct: false },
      { text: "C) 30Java", correct: true },
      { text: "D) 1020Java", correct: false },
    ],
    explanation:
      "The code concatenates the numbers 10 and 20, resulting in 30, and then appends 'Java' to the end, resulting in '30Java'.",
  },
  {
    question:
      "What is the result of the following code snippet? <br><br>(Choose 1 answer)",
    code: `public class Test {
    public static void main(String[] args) {
        int x = 5;
        System.out.println(++x);
    }
}`,
    answers: [
      { text: "4", correct: false },
      { text: "5", correct: false },
      { text: "6", correct: true },
      { text: "7", correct: false },
    ],
    explanation:
      "The code uses the prefix increment operator (++x), which increments the value of x by one before printing it, resulting in 6.",
  },
  {
    question:
      "What is the result of the following code snippet? <br><br>(Choose 1 answer)",
    code: `public class Test {
    public static void main(String[] args) {
        int x = 10;
        int y = 20;
        System.out.println(x + y + "Java");
      }
  }`,
    answers: [
      { text: "A) 30Java", correct: true },
      { text: "B) Java30", correct: false },
      { text: "C) 1020Java", correct: false },
      { text: "D) Java1020", correct: false },
    ],
    explanation:
      "The code adds the integers 10 and 20, resulting in 30, and then concatenates 'Java', resulting in '30Java'.",
  },
  {
    question:
      "What will be the output of the following program? <br><br>(Choose 3 answers)",
    code: `public class TestClass {
    public static void main(String args[]) {
        try {
            m1();
        } catch (IndexOutOfBoundsException e) {
            System.out.println("1");
            throw new NullPointerException();
        } catch (NullPointerException e) {
            System.out.println("2");
            return;
        } catch (Exception e) {
            System.out.println("3");
        } finally {
            System.out.println("4");
        }
        System.out.println("END");
    }
    static void m1() {
        System.out.println("m1 Starts");
        throw new IndexOutOfBoundsException("Big Bang");
    }
}`,
    answers: [
      { text: "The program will print 'm1 Starts'.", correct: true },
      {
        text: "The program will print 'm1 Starts', 1 and 4, in that order.",
        correct: false,
      },
      {
        text: "The program will print 'm1 Starts', 1, 2 in that order.",
        correct: false,
      },
      {
        text: "The program will print 'm1 Starts', 1, 2 and 4 in that order.",
        correct: true,
      },
      { text: "'END' will not be printed.", correct: true },
    ],
    explanation:
      "The program first prints 'm1 Starts' when the m1 method is invoked. Then, it throws an IndexOutOfBoundsException, which is caught by the first catch block that prints '1'. Then, the catch block throws a NullPointerException, which is caught by the second catch block that prints '2' and exits the try-catch block due to the return statement. The finally block is executed, printing '4'. Since the return statement in the second catch block terminates the execution, 'END' is not printed.",
  },
  {
    question:
      "What will be the result of compiling and running the following program? <br><br>(Choose 1 answer)",
    code: `class SomeClass {
    public static void main(String args[]) {
        int size = 10;
        int[] arr = new int[size];
        for (int i = 0 ; i < size ; ++i) System.out.println(arr[i]);
    }
}`,
    answers: [
      {
        text: "The code will fail to compile, because the int[] array declaration is incorrect.",
        correct: false,
      },
      {
        text: "The program will compile, but will throw an IndexArrayOutOfBoundsException when run.",
        correct: false,
      },
      {
        text: "The program will compile and run without error, and will print nothing.",
        correct: false,
      },
      {
        text: "The program will compile and run without error and will print null ten times.",
        correct: false,
      },
      {
        text: "The program will compile and run without error and will print '0' ten times.",
        correct: true,
      },
    ],
    explanation:
      "The array is correctly initialized with a size of 10, and all elements of an int array are automatically initialized to 0. Therefore, the program will compile and run without error, printing '0' ten times, corresponding to each element of the array.",
  },
  {
    question:
      "Given the following program, which of these statements are true? <br><br>(Choose 2 answers)",
    code: `public class FinallyTest {
    public static void main(String args[]) {
        try {
            if (args.length == 0) return;
            else throw new Exception("Some Exception");
        }
        catch(Exception e) {
            System.out.println("Exception in Main");
        }
        finally {
            System.out.println("The end");
        }
    }
}`,
    answers: [
      {
        text: "If run with no arguments, the program will only print The end.",
        correct: true,
      },
      {
        text: "If run with one argument, the program will only print The end.",
        correct: false,
      },
      {
        text: "If run with one argument, the program will print Exception in Main and The end.",
        correct: true,
      },
      {
        text: "If run with one argument, the program will only print Exception in Main.",
        correct: false,
      },
      { text: "Only one of the above is correct.", correct: false },
    ],
    explanation:
      "When run with no arguments, the try block exits early due to the return statement, but the finally block is still executed, so only 'The end' is printed. <br><br>When run with one argument, an exception is thrown, the catch block prints 'Exception in Main', and the finally block prints 'The end'.",
  },
  {
    question:
      "You have an array of objects and you want to search for a particular object in that array. Which of the following Java statements will you need to use? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "Conditional", correct: true },
      { text: "Iterative/loop", correct: true },
      { text: "Instantiation", correct: false },
      { text: "Assignment", correct: false },
    ],
    explanation:
      "To search for an object in an array, you would need a loop (Iterative/loop) to traverse the array, and a conditional statement (Conditional) to check whether each element matches the object you're looking for. Instantiation and Assignment are not required for searching in an existing array.",
  },
  {
    question:
      "What may be done to the above code to make it print 100? <br><br>(Choose 1 answer)",
    code: `class Node {
    static final int TYPE = 100;
    public static void print() {
        System.out.println(TYPE); //1    
    }
}

public class Test {
    public static void main(String[] args) {
        //INSERT CODE HERE //2
    }
}`,
    answers: [
      {
        text: "Change the statement at //1 to System.out.println(None.TYPE);",
        correct: false,
      },
      { text: "insert Node.print(); at //2", correct: true },
      { text: "insert new Node().print(); at //2", correct: false },
      { text: "insert new Node.print(); at //2", correct: false },
      { text: "insert Node().print(); at //2", correct: false },
      { text: "insert print(); at //2.", correct: false },
    ],
    explanation:
      "The correct way to call a static method in Java is by using the class name. Therefore, inserting Node.print(); at //2 will successfully call the static print() method, which will print the value of the static final variable TYPE (100).",
  },
  {
    question:
      "Identify the valid for loop constructs assuming the following declarations.<br><br>(Choose 2 answers)",
    code: `Object o = null;
ArrayList c = //valid ArrayList object;
int[] ia = //valid array;`,
    answers: [
      { text: "for(o : c){ }", correct: false },
      { text: "for(final Object o2 : c){ }", correct: true },
      { text: "for(int i : ia) { }", correct: true },
      { text: "for(Iterator it : c.iterator()){ }", correct: false },
      {
        text: "for(int i = 1; i<=ia.length; i++){ System.out.println(ia[i]); }",
        correct: false,
      },
    ],
    explanation:
      "The enhanced for loop (for-each) syntax requires a type declaration, so 'for(o : c)' is invalid. 'for(final Object o2 : c)' is valid, as is 'for(int i : ia)' for iterating over arrays. 'for(Iterator it : c.iterator())' is invalid because it's missing the proper syntax for an enhanced for loop. The last option has an off-by-one error in the array indexing.",
  },
  {
    question: "What will the following code print? <br><br>(Choose 1 answer)",
    code: `List s1 = new ArrayList();
s1.add("a");
s1.add("b");
s1.add("c");
s1.add("a");
if (s1.remove("a")) {
  if (s1.remove("a")) {
    s1.remove("b");
  } else {
    s1.remove("c");
  }
}
System.out.println(s1);`,
    answers: [
      { text: "[b]", correct: false },
      { text: "[c]", correct: true },
      { text: "[b, c, a]", correct: false },
      { text: "[a, b, c, a]", correct: false },
      { text: "Exception at runtime", correct: false },
    ],
    explanation:
      "The first call to s1.remove(\"a\") removes the first occurrence of 'a'. The second call to s1.remove(\"a\") fails because no 'a' is left, leading the else block to remove 'c'. The final list contains only '[c]'.",
  },
  {
    question:
      "What will be the output of the following program? <br><br>(Choose 3 answers)",
    code: `public class TestClass {
  public static void main(String args[]) {
    try {
      m1();
    } catch(IndexOutOfBoundsException e) {
      System.out.println("1");
      throw new NullPointerException();
    } catch(NullPointerException e) {
      System.out.println("2");
      return;
    } catch(Exception e) {
      System.out.println("3");
    } finally {
      System.out.println("4");
    }
    System.out.println("END");
  }
  static void m1() {
    System.out.println("m1 Starts");
    throw new IndexOutOfBoundsException("Big Bang");
  }
}`,
    answers: [
      { text: "The program will print 'm1 Starts'.", correct: true },
      {
        text: "The program will print 'm1 Starts', 1 and 4, in that order.",
        correct: false,
      },
      {
        text: "The program will print 'm1 Starts', 1, 2 in that order.",
        correct: false,
      },
      {
        text: "The program will print 'm1 Starts', 1, 2 and 4 in that order.",
        correct: true,
      },
      { text: "'END' will not be printed.", correct: true },
    ],
    explanation:
      "The program will print 'm1 Starts' when m1() is called. It will then catch the IndexOutOfBoundsException, print '1', and throw a NullPointerException. The NullPointerException is caught, printing '2', and then the finally block executes, printing '4'. The 'END' statement is not reached due to the return in the NullPointerException catch block.",
  },
  {
    question:
      "What will be the result of compiling and running the following program? <br><br>(Choose 1 answer)",
    code: `class SomeClass {
  public static void main(String args[]) {
    int size = 10;
    int[] arr = new int[size];
    for (int i = 0; i < size; ++i) System.out.println(arr[i]);
  }
}`,
    answers: [
      {
        text: "The code will fail to compile, because the int[] array declaration is incorrect.",
        correct: false,
      },
      {
        text: "The program will compile, but will throw an IndexArrayOutOfBoundsException when run.",
        correct: false,
      },
      {
        text: "The program will compile and run without error, and will print nothing.",
        correct: false,
      },
      {
        text: "The program will compile and run without error and will print null ten times.",
        correct: false,
      },
      {
        text: "The program will compile and run without error and will print '0' ten times.",
        correct: true,
      },
    ],
    explanation:
      "The program initializes an array of size 10 with default values of 0 for each element. The loop iterates over the array, printing each element, which results in ten zeros being printed.",
  },
  {
    question:
      "Given the following program, which of these statements are true? <br><br>(Choose 2 answers)",
    code: `public class FinallyTest {
  public static void main(String args[]) {
    try {
      if (args.length == 0) return;
      else throw new Exception("Some Exception");
    } catch(Exception e) {
      System.out.println("Exception in Main");
    } finally {
      System.out.println("The end");
    }
  }
}`,
    answers: [
      {
        text: "If run with no arguments, the program will only print The end.",
        correct: true,
      },
      {
        text: "If run with one argument, the program will only print The end.",
        correct: false,
      },
      {
        text: "If run with one argument, the program will print Exception in Main and The end.",
        correct: true,
      },
      {
        text: "If run with one argument, the program will only print Exception in Main.",
        correct: false,
      },
      { text: "Only one of the above is correct.", correct: false },
    ],
    explanation:
      "If run with no arguments, the try block returns immediately, and the finally block executes, printing 'The end'. If run with one argument, an exception is thrown, caught, and 'Exception in Main' is printed, followed by the finally block printing 'The end'.",
  },
  {
    question:
      "You have an array of objects and you want to search for a particular object in that array. Which of the following Java statements will you need to use? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "Conditional", correct: false },
      { text: "Iterative/loop", correct: true },
      { text: "Instantiation", correct: false },
      { text: "Assignment", correct: false },
    ],
    explanation:
      "To search for a particular object in an array, you typically use an iterative/loop statement to traverse the array and check each element.",
  },
  {
    question:
      "What may be done to the above code to make it print 100? <br><br>(Choose 2 answers)",
    code: `class Node {
  static final int TYPE = 100;
  public static void print() {
    System.out.println(TYPE); //1    
  }
}

public class Test {
  public static void main(String[] args) {
    //INSERT CODE HERE //2
  }
}`,
    answers: [
      {
        text: "Change the statement at //1 to System.out.println(None.TYPE);",
        correct: false,
      },
      { text: "insert Node.print(); at //2", correct: true },
      { text: "insert new Node().print(); at //2", correct: true },
      { text: "insert new Node.print(); at //2", correct: false },
      { text: "insert Node().print(); at //2", correct: false },
      { text: "insert print(); at //2.", correct: false },
    ],
    explanation:
      "The static method print() can be called using the class name Node.print() or by creating an instance of Node and calling print() on it.",
  },
  {
    question: "What will the following code print? <br><br>(Choose 1 answer)",
    code: `boolean flag = true;
if (flag = false) {
  System.out.println("1");
} else if (flag) {
  System.out.println("2");
} else if (!flag) {
  System.out.println("3");
} else System.out.println("4");`,
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "4", correct: false },
      { text: "Compilation error.", correct: false },
    ],
    explanation:
      "The assignment 'flag = false' sets flag to false, so the first if condition is false. The second condition 'flag' is also false, so it goes to the third condition '!flag', which is true, printing '3'.",
  },
  {
    question:
      "Identify the valid for loop constructs assuming the following declarations: Object o = null; ArrayList c = //valid ArrayList object; int[] ia = //valid array. <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "for(o : c){ }", correct: false },
      { text: "for(final Object o2 :c){ }", correct: true },
      { text: "for(int i : ia) { }", correct: true },
      { text: "for(Iterator it : c.iterator()){ }", correct: false },
      {
        text: "for(int i = 1; i<=ia.length; i++){  System.out.println(ia[i]); }",
        correct: false,
      },
    ],
    explanation:
      "The enhanced for loop (for-each) is valid for iterating over collections and arrays. The syntax 'for(type var : array/collection)' is correct for iterating over 'c' and 'ia'.",
  },
  {
    question: "What will the following code print? <br><br>(Choose 1 answer)",
    code: `List s1 = new ArrayList();
s1.add("a");
s1.add("b");
s1.add("c");
s1.add("a");
if (s1.remove("a")) {
  if (s1.remove("a")) {
    s1.remove("b");
  } else {
    s1.remove("c");
  }
}
System.out.println(s1);`,
    answers: [
      { text: "[b]", correct: false },
      { text: "[c]", correct: true },
      { text: "[b, c, a]", correct: false },
      { text: "[a, b, c, a]", correct: false },
      { text: "Exception at runtime", correct: false },
    ],
    explanation:
      "The first 'remove' call removes the first occurrence of 'a'. The second 'remove' call removes the next 'a'. Then 'b' is removed, leaving only 'c'.",
  },
  {
    question:
      "Which one can hold a larger integer value, a char or a short? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "char", correct: true },
      { text: "short", correct: false },
      { text: "largest integer that both can hold are same.", correct: false },
      {
        text: "They cannot be compared because char can hold only character values.",
        correct: false,
      },
      { text: "None of the above", correct: false },
    ],
    explanation:
      "A 'char' in Java is an unsigned 16-bit type, which can hold values from 0 to 65535, whereas a 'short' is a signed 16-bit type, which can hold values from -32768 to 32767.",
  },
  {
    question:
      "You are writing a class named AccountManager. This class is the starting point of your application and is to be executing from the command line. What should be the name of the file containing this class's source code? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "accountmanager.java", correct: false },
      { text: "AccountManager.java", correct: true },
      { text: "main.java", correct: false },
      { text: "Main.java", correct: false },
      {
        text: "The name of the file doesn't matter because after compilation, the class file will be named AccountManager.class anyway.",
        correct: false,
      },
    ],
    explanation:
      "In Java, the source file name must match the public class name, so the file should be named 'AccountManager.java'.",
  },
  {
    question:
      "What should be inserted at //1 so that Y.java can compile without any error? <br><br>(Choose 2 answers)",
    code: `//in file /root/com/foo/X.java
package com.foo;
public class X {
  public static int LOGICID = 10;
  public void apply(int i) {
    System.out.println("applied");
  }
}

//in file /root/com/bar/Y.java
package com.bar;
//1  <== INSERT STATEMENT(s) HERE
public class Y {
  public static void main(String[] args) {
    X x = new X();
    x.apply(LOGICID);
  }
}`,
    answers: [
      { text: "import static X;", correct: false },
      { text: "import static com.foo.*;", correct: false },
      { text: "import static com.foo.X.*;", correct: true },
      { text: "com.foo.*;", correct: false },
      { text: "com.foo.X.LOGICID;", correct: true },
    ],
    explanation:
      "To access the static field LOGICID from class X, you need to import it using 'import static com.foo.X.*;' or directly use 'com.foo.X.LOGICID'.",
  },
  {
    question:
      "Which of the following are features of Java? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      {
        text: "It allows you to develop distributed applications.",
        correct: true,
      },
      {
        text: "It allows you to develop desktop as well as web applications.",
        correct: true,
      },
      {
        text: "It allows development of low level components such as device drivers.",
        correct: false,
      },
      { text: "It is a scripted language.", correct: false },
      { text: "It is a structured programming language.", correct: false },
    ],
    explanation:
      "Java is known for its ability to develop distributed and web applications. It is not typically used for low-level programming like device drivers.",
  },
  {
    question:
      "Which of the following statements are true if the above program is run with the command line: java Test closed? <br><br>(Choose 1 answer)",
    code: `public class Test {
  public static void main(String[] args) {
      if (args[0].equals("open"))
         if (args[1].equals("someone"))
            System.out.println("Hello!");
      else System.out.println("Go away "+ args[1]);
    }
}`,
    answers: [
      {
        text: "It will throw ArrayIndexOutOfBoundsException at runtime.",
        correct: true,
      },
      {
        text: "It will end without exceptions and will print nothing.",
        correct: false,
      },
      { text: "It will print Go away", correct: false },
      {
        text: "It will print Go away and then will throw an ArrayIndexOutOfBoundsException.",
        correct: false,
      },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The program will throw an ArrayIndexOutOfBoundsException because it tries to access args[1] when only one argument is provided.",
  },
  {
    question:
      "What will the following code print when run? <br><br>(Choose 4 answers)",
    code: `public class TestClass {
  public static void main(String[] args) throws Exception {
    String[] sa = {
      "a",
      "b",
      "c"
    };
    for (String s: sa) {
      if ("b".equals(s)) continue;
      System.out.println(s);
      if ("b".equals(s)) break;
      System.out.println(s + " again");
    }
  }
}`,
    answers: [
      { text: "a", correct: true },
      { text: "a again", correct: true },
      { text: "c", correct: true },
      { text: "c again", correct: true },
      { text: "a a again b", correct: false },
      { text: "a a again b b again c c again", correct: false },
    ],
    explanation:
      "The loop skips 'b' due to the continue statement. It prints 'a', 'a again', 'c', and 'c again'.",
  },
  {
    question:
      "Which of the following statements will print true? <br><br>(Choose 2 answers)",
    code: `int x = 5;
int y = 9;
int z = 12;
boolean b = true;`,
    answers: [
      { text: "System.out.println( x==y || b );", correct: true },
      { text: "System.out.println( ! (x<z) || b );", correct: true },
      { text: "System.out.println( b == y>z );", correct: false },
      { text: "System.out.println( b && y>z || z<x );", correct: false },
      { text: "System.out.println( !b == y>z );", correct: false },
    ],
    explanation:
      "Statement A, which checks x == y || b, evaluates to false || true since x is not equal to y but b is true. Therefore, this statement will print true.<br><br>Statement B checks ! (x < z) || b. Since x < z (5 < 12) is true, ! (x < z) becomes false, leading to false || true, which evaluates to true. Thus, this statement will also print true.<br><br></br>In contrast, Statement C compares b == y > z. Here, y > z (9 > 12) is false, making the expression evaluate to false, so this statement will print false.<br><br></br>Statement D evaluates b && y > z || z < x. Since b is true and y > z is false, it simplifies to true && false, which is false, leading to a final result of false as well.<br><br>Lastly, Statement E, which checks !b == y > z, translates to comparing false == (y > z). Since y > z is false, this part would seem to evaluate to true, but due to operator precedence, it ultimately evaluates to false.",
  },
  {
    question:
      "What will be the output when the above code is executed? <br><br>(Choose 1 answer)",
    code: `public static void main(String[] args) throws Exception {
  int i = 1,
  j = 10;
  do {
    if (i++>--j) continue;
  } while ( i < 5 );
  System.out.println("i=" + i + " j=" + j);
}`,
    answers: [
      { text: "i=6 j=6", correct: false },
      { text: "i=5 j=6", correct: true },
      { text: "i=5 j=5", correct: false },
      { text: "i=6 j=5", correct: false },
      { text: "None of these.", correct: false },
    ],
    explanation:
      "The loop increments 'i' and decrements 'j' until 'i' is no longer less than 5. The final values are 'i=5' and 'j=6'.",
  },
  {
    question:
      "Given the following class, which of these are valid ways of referring to the class from outside of the package com.enthu? <br><br>(Choose 2 answers)",
    code: `package com.enthu;
public class Base {
  // ....
  // lot of code...
}`,
    answers: [
      { text: "Base", correct: false },
      {
        text: "By importing the package com.* and referring to the class as enthu.Base",
        correct: false,
      },
      { text: "importing com.* is illegal.", correct: true },
      {
        text: "By importing com.enthu.* and referring to the class as Base.",
        correct: true,
      },
      { text: "By referring to the class as com.enthu.Base.", correct: true },
    ],
    explanation:
      "You can refer to the class by importing com.enthu.* and using 'Base', or by fully qualifying the class name as 'com.enthu.Base'.",
  },
  {
    question:
      "Which of the following are true about the enhanced for loop? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      {
        text: "It can iterate over an array or a Collection but not an ArrayList.",
        correct: false,
      },
      {
        text: "Using an enhanced for loop prevents the code from going into an infinite loop.",
        correct: false,
      },
      {
        text: "Using an enhanced for loop on an array may cause infinite loop.",
        correct: false,
      },
      {
        text: "You cannot find out the number of the current iteration while iterating.",
        correct: true,
      },
    ],
    explanation:
      "The enhanced for loop can iterate over arrays and collections, including ArrayLists. It does not inherently prevent infinite loops, and it does not provide a way to access the current iteration index.",
  },
  {
    question:
      "Which lines contain a valid constructor in the following code? <br><br>(Choose 3 answers)",
    code: `public class TestClass {
  public TestClass(int a, int b) {} // 1
  public void TestClass(int a) {} // 2
  public TestClass(String s); // 3
  private TestClass(String s, int a) {} //4
  public TestClass(String s1, String s2) {}; //5
}`,
    answers: [
      { text: "Line // 1", correct: true },
      { text: "Line // 2", correct: false },
      { text: "Line // 3", correct: false },
      { text: "Line // 4", correct: true },
      { text: "Line // 5", correct: true },
    ],
    explanation:
      "Lines 1, 4, and 5 are valid constructors. Line 2 is a method, not a constructor, and line 3 is missing a body.",
  },
  {
    question:
      "Which of the following is true about a Java source file? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "It must have exactly one package statement.", correct: false },
      { text: "It must have zero or more import statements.", correct: true },
      {
        text: "All the classes that belong to the same package as the package of this class are automatically imported.",
        correct: false,
      },
      {
        text: "It can only have zero or one package statement.",
        correct: true,
      },
      {
        text: "All packages of J2SE are automatically imported.",
        correct: false,
      },
      {
        text: "The source file name has no relation to the classes contained in the file.",
        correct: false,
      },
    ],
    explanation:
      "A Java source file can have zero or one package statement and zero or more import statements. Classes in the same package are not automatically imported.",
  },
  {
    question: "Identify correct statements. <br><br>(Choose 1 answer)",
    code: `double da[] = new double[3];`,
    answers: [
      {
        text: "for(double d : da) System.out.println(d); will print null null null",
        correct: false,
      },
      {
        text: "for(int i=1; i<=da.length; i++ ) System.out.println(da[i]); will print null null null",
        correct: false,
      },
      {
        text: "for(int i=0; i<=da.length; i++ ) System.out.println(da[i]); will print null null null",
        correct: false,
      },
      {
        text: "for(int i=0; i<da.length; i++ ) System.out.println(da[i]); will print null null null",
        correct: false,
      },
      { text: "None of the above.", correct: true },
    ],
    explanation:
      "The array 'da' is initialized with default values of 0.0, not null. The correct loop will print 0.0 three times.",
  },
  {
    question:
      "What letters, and in what order, will be printed when the following program is compiled and run? <br><br>(Choose 1 answer)",
    code: `public class FinallyTest {
  public static void main(String args[]) throws Exception {
    try {
      m1();
      System.out.println("A");
    } finally {
      System.out.println("B");
    }
    System.out.println("C");
  }
  public static void m1() throws Exception {
    throw new Exception();
  }
}`,
    answers: [
      { text: "It will print C and B, in that order.", correct: false },
      { text: "It will print A and B, in that order.", correct: false },
      { text: "It will print B and then throw an Exception.", correct: true },
      { text: "It will print A, B and C in that order.", correct: false },
      { text: "Compile time error.", correct: false },
    ],
    explanation:
      "The method m1() throws an exception, so 'A' is not printed. The finally block executes, printing 'B', and then the exception is thrown.",
  },
  {
    question:
      "What, if anything, is wrong with the following code? <br><br>(Choose 1 answer)",
    code: `void test(int x) {
   switch(x) {
      case 1:
      case 2:
      case 0:
      default :
      case 4:
   }
}`,
    answers: [
      {
        text: "Data Type of 'x' is not valid to be used as an expression for the switch clause.",
        correct: false,
      },
      { text: "The case label 0 must precede case label 1.", correct: false },
      {
        text: "Each case section must be ended by a break keyword.",
        correct: false,
      },
      {
        text: "The default label must be the last label in the switch statement.",
        correct: false,
      },
      { text: "There is nothing wrong with the code.", correct: true },
    ],
    explanation:
      "The code is syntactically correct. A switch statement does not require break statements or a specific order for case labels.",
  },
  {
    question: "Identify correct statements. <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      {
        text: "1 + Math.random()*9 will return a random number between 1 and 10.",
        correct: true,
      },
      {
        text: "Math.random()*10 will return a random number between 1 and 10.",
        correct: false,
      },
      {
        text: "Math.round(Math.random()*9) will return a random number between 1 and 10.",
        correct: false,
      },
      {
        text: "1 + Math.round(Math.random()*9) will return a random number between 1 and 10.",
        correct: true,
      },
      {
        text: "Math.round(Math.random()*10) will return a random number between 1 and 10.",
        correct: false,
      },
    ],
    explanation:
      "The expression '1 + Math.random()*9' generates a number between 1 (inclusive) and 10 (exclusive). '1 + Math.round(Math.random()*9)' generates an integer between 1 and 10.",
  },
  {
    question:
      "Which of the following statements will print true? <br><br>(Choose 2 answers)",
    code: `int a = 10, b = 20, c = 30, d = 40;
boolean t = true;`,
    answers: [
      { text: "System.out.println( (a > b) && t);", correct: false },
      { text: "System.out.println( (a > b || b < c) && t);", correct: true },
      { text: "System.out.println( (a < d && b < c) || t);", correct: true },
      {
        text: "System.out.println( (a > b || t) && (b>c && c>d));",
        correct: false,
      },
    ],
    explanation:
      "The second and third statements evaluate to true. The first statement is false because 'a > b' is false, and the fourth statement is false because '(b>c && c>d)' is false.",
  },
  {
    question: "What is the result? <br><br>(Choose 1 answer)",
    code: `String str = "hello\\r\\n" + "world";
System.out.println(str.length);`,
    answers: [
      { text: "12", correct: false },
      { text: "13", correct: false },
      { text: "14", correct: false },
      { text: "Compilation error", correct: true },
      { text: "Exception at run time", correct: false },
    ],
    explanation:
      "The code will not compile because 'str.length' should be 'str.length()' to call the method.",
  },
  {
    question:
      "A try statement must always have a ............. associated with it. <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "catch", correct: false },
      { text: "throws", correct: false },
      { text: "finally", correct: false },
      { text: "catch, finally or both", correct: true },
      { text: "throw", correct: false },
    ],
    explanation:
      "A try statement must be followed by at least one catch block or a finally block, or both.",
  },
  {
    question:
      "What sequence of digits will the following program print? <br><br>(Choose 1 answer)",
    code: `import java.util. * ;
public class ListTest {
  public static void main(String args[]) {
    List s1 = new ArrayList();
    s1.add("a");
    s1.add("b");
    s1.add(1, "c");
    List s2 = new ArrayList(s1.subList(1, 1));
    s1.addAll(s2);
    System.out.println(s1);
  }
}`,
    answers: [
      { text: "The sequence a, b, c, b is printed.", correct: false },
      { text: "The sequence a, c, b, c is printed.", correct: false },
      { text: "The sequence a, c, b is printed.", correct: true },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The subList(1, 1) call returns an empty list, so nothing is added to s1. The final list is ['a', 'c', 'b'].",
  },
  {
    question:
      "Which two lines can be inserted at locations marked //1 and //2? <br><br>(Choose 1 answer)",
    code: `//1
//2
public class TestClass {
  public static void main(String[] args) {
    double d = Math.random();
    System.out.println(d);
  }
}`,
    answers: [
      { text: "import java.lang.*;  at //1", correct: false },
      { text: "import java.util.*;  at //1", correct: false },
      { text: "package test;  at //1", correct: true },
      { text: "package a.b;  at //2", correct: false },
      { text: "import java.*;  at //2", correct: false },
      { text: "import java.lang.*;  at //2", correct: false },
    ],
    explanation:
      "A package statement can be placed at the top of the file. Import statements are not needed for java.lang classes.",
  },
  {
    question: "Which of these are keywords in Java? <br><br>(Choose 4 answers)",
    code: ``,
    answers: [
      { text: "default", correct: true },
      { text: "null", correct: false },
      { text: "String", correct: false },
      { text: "throws", correct: true },
      { text: "long", correct: true },
      { text: "strictfp", correct: true },
    ],
    explanation:
      "'default', 'throws', 'long', and 'strictfp' are Java keywords. 'null' is a literal, and 'String' is a class.",
  },
  {
    question:
      "What letters will be printed by this program? <br><br>(Choose 3 answers)",
    code: `public class ForSwitch {
  public static void main(String args[]) {
    char i;
    LOOP: for (i = 0; i < 5; i++) {
      switch (i++) {
      case '0':
        System.out.println("A");
      case 1:
        System.out.println("B");
        break LOOP;
      case 2:
        System.out.println("C");
        break;
      case 3:
        System.out.println("D");
        break;
      case 4:
        System.out.println("E");
      case 'E':
        System.out.println("F");
      }
    }
  }
}`,
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: false },
      { text: "E", correct: true },
      { text: "F", correct: true },
    ],
    explanation: `In the first iteration, i starts at 0. The switch statement evaluates i++, which checks the value of i as 0 before incrementing it to 1. Since none of the cases match, it continues to the next iteration.<br><br>In the second iteration, i is now 1. The switch evaluates i++ again, matching case 1, which prints "B." However, because there is no break statement after this case, the execution continues to case 2, which then prints "C" before breaking out of that case.<br><br>In the third iteration, i becomes 3. The switch checks the value, matches case 3, and prints "D," but again, since there is no further break, it moves to case 4. In this case, it prints "E," and since there is still no break, it falls through to case 'E', printing "F."<br><br>Thus, the final output of the program is "C," "E," and "F," as the fall-through behavior in the switch statement allows the code to execute multiple cases without breaking out immediately.`,
  },
  {
    question:
      "Which of the following operators can be used in conjunction with a String object? <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      { text: "+", correct: true },
      { text: "++", correct: false },
      { text: "+=", correct: true },
      { text: ".", correct: true },
      { text: "*", correct: false },
    ],
    explanation:
      "The '+' and '+=' operators can be used for string concatenation, and the '.' operator is used to call methods on a String object.",
  },
  {
    question:
      "What will the following code snippet print? <br><br>(Choose 1 answer)",
    code: `int count = 0,
sum = 0;
do {
  if (count % 3 == 0) continue;
  sum += count;
} while ( count ++< 11 );
System.out.println(sum);`,
    answers: [
      { text: "49", correct: false },
      { text: "48", correct: true },
      { text: "37", correct: false },
      { text: "36", correct: false },
      { text: "38", correct: false },
    ],
    explanation: "The loop skips numbers divisible by 3, so the sum is 48.",
  },
  {
    question: "What is the result? <br><br>(Choose 1 answer)",
    code: `public static void main(String[] args) {
  int[] balances1 = new int[2];
  balances1[0] = 10;
  balances1[1] = 20;

  int[] balances2 = balances1;
  balances2[0] = 0;

  System.out.print(balances1 == balances2);
}`,
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "compilation failure", correct: false },
      { text: "exception at run time", correct: false },
    ],
    explanation:
      "Both balances1 and balances2 refer to the same array object, so the comparison returns true.",
  },
  {
    question:
      "Which of the following are NOT valid operators in Java? <br><br>(Choose 4 answers)",
    code: ``,
    answers: [
      { text: "sizeof", correct: true },
      { text: "<<<", correct: true },
      { text: "instanceof", correct: false },
      { text: "mod", correct: true },
      { text: "equals", correct: true },
    ],
    explanation:
      "'sizeof', '<<<', 'mod', and 'equals' are not valid operators in Java. 'instanceof' is a valid operator.",
  },
  {
    question:
      "Which statements regarding the following code are correct? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static void main(String args[]) {
    int x = Integer.parseInt(args[0]);
    switch (x) {
    case x < 5 : System.out.println("BIG");
      break;
    case x > 5 : System.out.println("SMALL");
    default:
      System.out.println("CORRECT");
      break;
    }
  }
}`,
    answers: [
      { text: "BIG will never be followed be anything else.", correct: false },
      { text: "SMALL will never follow anything else.", correct: false },
      { text: "SMALL will always be followed be CORRECT.", correct: false },
      { text: "It will not compile.", correct: true },
      { text: "It'll throw an exception at runtime.", correct: false },
    ],
    explanation:
      "The code will not compile because switch cases cannot contain expressions like 'x < 5'.",
  },
  {
    question:
      "Which of the following statements can be inserted successfully at // 1? <br><br>(Choose 3 answers)",
    code: `public class InitTest {
  static int si = 10;
  int i;
  final boolean bool;
  // 1
}`,
    answers: [
      { text: "instance { bool = true; }", correct: false },
      { text: "InitTest() { si += 10; }", correct: true },
      {
        text: "void InitTest(){ si = 5; i = bool ? 1000 : 2000;}",
        correct: false,
      },
      { text: "{ i = 1000; }", correct: true },
      { text: "InitTest(boolean flag) { bool  = flag; }", correct: true },
    ],
    explanation:
      "The constructor InitTest() and the instance initializer block '{ i = 1000; }' are valid. The constructor InitTest(boolean flag) correctly initializes the final variable 'bool'.",
  },
  {
    question:
      "Which of the following code snippets will compile without any errors? <br><br>(Choose 4 answers lol)",
    code: ``,
    answers: [
      { text: "while (false) { x=3; }", correct: true },
      { text: "if (false) { x=3; }", correct: true },
      { text: "do{ x = 3; } while(false);", correct: true },
      { text: "for( int i = 0; i< 0; i++) x = 3;", correct: true },
    ],
    explanation:
      "All the code snippets will compile without errors. The while and if statements with 'false' will not execute their blocks, but they are syntactically correct.",
  },
  {
    question:
      "What will the following program print? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  static int someInt = 10;
  public static void changeIt(int a) {
    a = 20;
  }
  public static void main(String[] args) {
    changeIt(someInt);
    System.out.println(someInt);
  }
}`,
    answers: [
      { text: "10", correct: true },
      { text: "20", correct: false },
      { text: "It will not compile.", correct: false },
      { text: "It will throw an exception at runtime.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The method changeIt() changes the local copy of the variable 'a', not the static variable 'someInt'. Therefore, 'someInt' remains 10.",
  },
  {
    question:
      "Which of the following options, when inserted in the above code, will print 111 222? <br><br>(Choose 1 answer)",
    code: `public class Account {
  int id;
  public Account(int id) {
    this.id = id;
  }

  public static void main(String[] args) {
    List < Account > list = new ArrayList < Account > ();
    list.add(new Account(111));
    list.add(new Account(222));

    //insert code here
  }
}`,
    answers: [
      {
        text: 'for(int id : list.id) System.out.print(id+" ");',
        correct: false,
      },
      {
        text: 'for(Account id : list) System.out.print(id+" ");',
        correct: false,
      },
      {
        text: 'Iterator<Account> it = list.iterator(); while(it.hasNext()) System.out.println(it.next()+" ");',
        correct: false,
      },
      {
        text: 'for(int i = 0; i<list.size(); i++) System.out.print(list.id+" ");',
        correct: false,
      },
      { text: "None of the above.", correct: true },
    ],
    explanation:
      "None of the provided options correctly iterate over the list and print the 'id' field of each Account object.",
  },
  {
    question:
      "What command should be given to compile and run a java source file named TestClass.java (for standard Oracle JDK)? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "javac TestClass and java TestClass.class", correct: false },
      { text: "javac TestClass.java and java TestClass", correct: true },
      { text: "java TestClass.java and java TestClass", correct: false },
      { text: "javac TestClass.java and javac TestClass", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The correct commands are 'javac TestClass.java' to compile the source file and 'java TestClass' to run the compiled class.",
  },
  {
    question:
      "What will the following class print when compiled and run? <br><br>(Choose 1 answer)",
    code: `public class Holder {
  int value = 1;
  Holder link;
  public Holder(int val) {
    this.value = val;
  }
  public static void main(String[] args) {
    Holder a = new Holder(5);
    Holder b = new Holder(10);
    a.link = b;
    setIt(a, b);
    System.out.println(a.link.value + ", " + b.link.value);
  }

  public static void setIt(Holder x, Holder y) {
    y.link = x;
  }
}`,
    answers: [
      { text: "It will print 5, 5.", correct: false },
      { text: "It will print 10, 5.", correct: true },
      { text: "It will print 5, 10.", correct: false },
      { text: "It will print 10, 10.", correct: false },
      { text: "None of these.", correct: false },
    ],
    explanation: `When the program is compiled and run, it creates two instances of the Holder class: a with a value of 5 and b with a value of 10. It links a to b and then calls the method setIt, which links b back to a. <br><br>Consequently, when the program prints a.link.value (which refers to b.value) and b.link.value (which refers to a.value), the output will be "10, 5".
`,
  },
  {
    question:
      "What will be the result of attempting to compile and run the following code? <br><br>(Choose 1 answer)",
    code: `class TestClass {
  public static void main(String args[]) {
    String str1 = "str1";
    String str2 = "str2";
    System.out.println(str1.concat(str2));
    System.out.println(str1);
  }
}`,
    answers: [
      { text: "The code will fail to compile.", correct: false },
      { text: "The program will print str1 and str1.", correct: false },
      { text: "The program will print str1 and str1str2", correct: false },
      { text: "The program will print str1str2 and str1", correct: true },
      { text: "The program will print str1str2 and str1str2", correct: false },
    ],
    explanation:
      "The concat() method returns a new string, so the first print statement outputs 'str1str2'. The second print statement outputs 'str1' because str1 is unchanged.",
  },
  {
    question:
      "What will be the output of the following code snippet? <br><br>(Choose 1 answer)",
    code: `int a = 1;
int[] ia = new int[10];
int b = ia[a];
int c = b + a;
System.out.println(b = c);`,
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "true", correct: false },
      { text: "false", correct: false },
    ],
    explanation:
      "The code initializes 'a' to 1 and creates an array 'ia' of size 10. All elements in 'ia' are initialized to 0 by default. 'b' is assigned the value of ia[1], which is 0. 'c' is then calculated as b + a, which is 0 + 1 = 1. Finally, the statement 'b = c' assigns 1 to 'b' and prints this value. Therefore, the output is 1.",
  },
  {
    question:
      "How many objects and reference variables are created by the following code? <br><br>(Choose 1 answer)",
    code: `TestClass t1, t2, t3, t4;
t1 = t2 = new TestClass();
t3 = new TestClass();`,
    answers: [
      { text: "2 Objects, 3 references.", correct: false },
      { text: "2 Objects, 4 references.", correct: true },
      { text: "3 Objects, 2 references.", correct: false },
      { text: "2 Objects, 2 references.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Two objects are created, and four reference variables are declared. t1 and t2 refer to the same object, and t3 refers to another object.",
  },
  {
    question:
      "What will the following class print when compiled and run? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public int methodA(int a) {
    return a * 2;
  } //1
  public long methodA(int a) {
    return a;
  } //2
  public static void main(String[] args) {
    int i = 0;
    i = new TestClass().methodA(2);
    System.out.println(i);
  }
}`,
    answers: [
      {
        text: "Line 2 correctly overrides the method at line 1.",
        correct: false,
      },
      {
        text: "Line 2 correctly overloads the method at line 1.",
        correct: false,
      },
      {
        text: "There is neither overloading nor overriding happening in the given code but the program will compile fine.",
        correct: false,
      },
      { text: "The program will not compile.", correct: true },
      { text: "The program will compile and print 4.", correct: false },
    ],
    explanation:
      "In the provided code, both methods methodA have the same name but different return types. However, in Java, method overloading requires a change in the parameter list, not just the return type. Since both methods have the same parameter type (int a), this leads to a compile-time error due to the duplicate method definition. <br><br>Therefore, the program will not compile, and you will receive an error indicating that methodA is already defined.",
  },
  {
    question: "Which lines will print true? <br><br>(Choose 2 answers)",
    code: `String s1 = "java";
String s2 = "java";
String s3 = new String("java");
System.out.println(s1 == s2); //1
System.out.println(s1 == s3); //2
System.out.println(s1.equals(s2)); //3
System.out.println(s2.equals(s3)); //4`,
    answers: [
      { text: "1, 2, 4", correct: false },
      { text: "1, 4", correct: false },
      { text: "3, 4", correct: true },
      { text: "1, 2, 3, 4", correct: false },
      { text: "1, 2", correct: false },
      { text: "1, 2, 3", correct: false },
      { text: "1, 3, 4", correct: true },
    ],
    explanation:
      "Lines 1 and 3 print true because s1 and s2 refer to the same string literal, and equals() checks for value equality. Line 4 also prints true because equals() checks for value equality.",
  },
  {
    question:
      "Which of the following declarations are valid? <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      { text: "float f1 = 1.0;", correct: false },
      { text: "float f = 43e1;", correct: true },
      { text: "float f = -1;", correct: true },
      { text: "float f = 0x0123;", correct: false },
      { text: "float f = 4;", correct: true },
    ],
    explanation:
      "A float literal must have an 'f' or 'F' suffix unless it is a whole number or in scientific notation. '43e1' and '-1' are valid float declarations.",
  },
  {
    question:
      "What will the following code print when compiled and run? <br><br>(Choose 1 answer)",
    code: `public class OrderTest {
  public void initData(String[] arr) {
    int ind = 0;
    for (String str: arr) {
      str.concat(str + " " + ind);
      ind++;
    }
  }

  public void printData(String[] arr) {
    for (String str: arr) {
      System.out.println(str);
    }
  }

  public static void main(String[] args) {
    OrderTest ot = new OrderTest();
    String[] arr = new String[2];
    ot.initData(arr);
    ot.printData(arr);
  }
}`,
    answers: [
      { text: "null 0", correct: false },
      { text: "null 1", correct: false },
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "   0 //SPACE BEFORE 0", correct: false },
      { text: "   1 //SPACE BEFORE 1", correct: false },
      { text: "null", correct: false },
      { text: "It will throw a RuntimeException at run time.", correct: true },
    ],
    explanation:
      "When you do new String[2], you create a String array of two elements. arr is therefore not null. But each element of the array is not given any value and is therefore null. When you call a method on that element (i.e. str.concat(str+' '+ind); in initData), it will generate a NullPointerException, which is a RuntimeException.",
  },
  {
    question:
      "What will the following program print? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static void main(String[] args) {
    int x = 1;
    int y = 0;
    if (x / y) System.out.println("Good");
    else System.out.println("Bad");
  }
}`,
    answers: [
      { text: "Good", correct: false },
      { text: "Bad", correct: false },
      { text: "Exception at runtime saying division by Zero.", correct: true },
      { text: "It will not compile.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The program will throw an ArithmeticException at runtime due to division by zero.",
  },
  {
    question:
      "Which of the following statements are correct? <br><br>(Choose 1 answer)",
    code: `class A {
  public void doA(int k) throws Exception { // 0
    for (int i = 0; i < 10; i++) {
      if (i == k) throw new Exception("Index of k is " + i); // 1
    }
  }
  public void doB(boolean f) { //2
    if (f) {
      doA(15); //3
    }
    else return;
  }
  public static void main(String[] args) { //4
    A a = new A();
    a.doB(args.length > 0); //5
  }
}`,
    answers: [
      {
        text: "This will compile and run without any errors or exception.",
        correct: false,
      },
      {
        text: "This will compile if 'throws Exception' is added at line //2",
        correct: false,
      },
      {
        text: "This will compile if 'throws Exception' is added at line //4",
        correct: true,
      },
      {
        text: "This will compile if 'throws Exception' is added at line //2 as well as //4",
        correct: false,
      },
      {
        text: "This will compile if  line marked // 1 is enclosed in a try - catch block.",
        correct: false,
      },
    ],
    explanation:
      "The method doB() calls doA(), which throws an exception. The main method must declare 'throws Exception' to handle this.",
  },
  {
    question:
      "What is the result of executing the following fragment of code? <br><br>(Choose 1 answer)",
    code: `boolean b1 = false;
boolean b2 = false;
if (b2 = b1 != b2) {
  System.out.println("true");
} else {
  System.out.println("false");
}`,
    answers: [
      { text: "Compile time error.", correct: false },
      { text: "It will print true;", correct: false },
      { text: "It will print false;", correct: true },
      { text: "Runtime error.", correct: false },
      { text: "It will print nothing.", correct: false },
    ],
    explanation:
      "The expression 'b1 != b2' evaluates to false, and 'b2 = false' assigns false to b2, so the if condition is false, printing 'false'.",
  },
  {
    question:
      "Which of the following statements will print YES? <br><br>(Choose 2 answers)",
    code: `String a = "aAaA", b = "bbBB";`,
    answers: [
      {
        text: 'if(a.endsWith("aa") || b.startsWith("BB")) System.out.println("YES");',
        correct: false,
      },
      {
        text: 'if( (a.substring(1,2) + b.substring(2)).startsWith("AB") ) System.out.println("YES");',
        correct: true,
      },
      {
        text: "if(a.length() == b.replace('x', 'y').length()) System.out.println(\"YES\");",
        correct: true,
      },
      {
        text: 'if( (a+b).charAt(4) != b.charAt(0)) System.out.println("YES");',
        correct: false,
      },
    ],
    explanation:
      "The second statement prints YES because 'a.substring(1,2)' is 'A' and 'b.substring(2)' is 'BB', forming 'ABB'. The third statement prints YES because both strings have the same length.",
  },
  {
    question:
      "Which of the following statements are true? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      {
        text: "The modulus operator % can only be used with integral operands.",
        correct: false,
      },
      {
        text: "&& can have integral as well as boolean operands.",
        correct: false,
      },
      {
        text: "The arithmetic operators *, / and % have the same level of precedence.",
        correct: true,
      },
      {
        text: "+= can have integral as well as String operands.",
        correct: true,
      },
    ],
    explanation:
      "The modulus operator can be used with both integral and floating-point operands. The && operator only works with boolean operands. The operators *, /, and % have the same precedence level, and the += operator can be used with both integral and String operands.",
  },
  {
    question:
      "What will the following program print? <br><br>(Choose 1 answer)",
    code: `class LoopTest {
  public static void main(String args[]) {
    int counter = 0;
    outer: for (int i = 0; i < 3; i++)
    middle: for (int j = 0; j < 3; j++)
    inner: for (int k = 0; k < 3; k++) {
      if (k - j > 0) break middle;
      counter++;
    }
    System.out.println(counter);
  }
}`,
    answers: [
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "9", correct: false },
    ],
    explanation:
      "The loop increments the counter 7 times before breaking out of the middle loop when k-j>0.",
  },
  {
    question:
      "The following method will compile and run without any problems. <br><br>(Choose 1 answer)",
    code: `public void switchTest(byte x) {
  switch (x) {
  case 'b':
    // 1
  default:
    // 2
  case - 2 : // 3
  case 80:
    // 4
  }
}`,
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
    explanation:
      "The switch statement is valid. The case labels are within the range of a byte, and the method will compile and run without issues.",
  },
  {
    question:
      "How many string objects are created in the following code fragment? <br><br>(Choose 1 answer)",
    code: `String a, b, c;
a = new String("hello");
b = a;
c = a + b;`,
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: false },
    ],
    explanation:
      "Three string objects are created: one for 'new String(\"hello\")', and two for the concatenation 'a + b'.",
  },
  {
    question:
      "What will the following class print when compiled and run? <br><br>(Choose 1 answer)",
    code: `class Holder {
  int value = 1;
  Holder link;
  public Holder(int val) {
    this.value = val;
  }
  public static void main(String[] args) {
    final Holder a = new Holder(5);
    Holder b = new Holder(10);
    a.link = b;
    b.link = setIt(a, b);
    System.out.println(a.link.value + " " + b.link.value);
  }

  public static Holder setIt(final Holder x, final Holder y) {
    x.link = y.link;
    return x;
  }
}`,
    answers: [
      { text: "It will not compile because 'a' is final.", correct: false },
      {
        text: "It will not compile because method setIt() cannot change x.link.",
        correct: false,
      },
      { text: "It will print 5, 10.", correct: false },
      { text: "It will print 10, 10.", correct: false },
      { text: "It will throw an exception when run.", correct: true },
    ],
    explanation:
      "When the Holder class is compiled and run, it will throw a NullPointerException at runtime. This occurs because the a.link is set to null within the setIt method, and the program attempts to access a.link.value in the print statement. Since a.link is null, this results in the exception.",
  },
  {
    question:
      "Which of the following method declarations correctly declares a method named sum that takes an array of integers and returns the sum of the values in that array? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "sum(int[] : array) : int { // code here }", correct: false },
      { text: "int sum(int[] : array)  { // code here }", correct: false },
      { text: "sum(int[] array) : int { // code here }", correct: false },
      { text: "int : sum(integer[] array) { // code here }", correct: false },
      { text: "int sum(int array[]) { // code here }", correct: true },
    ],
    explanation:
      "The correct method declaration is 'int sum(int array[]) { // code here }'. The other options have incorrect syntax.",
  },
  {
    question: "What will the following code print? <br><br>(Choose 1 answer)",
    code: `List s1 = new ArrayList();
s1.add("a");
s1.add("b");
s1.add("c");
s1.add("a");
System.out.println(s1.remove("a") + " " + s1.remove("x"));
  `,
    answers: [
      { text: "1 0", correct: false },
      { text: "2 -1", correct: false },
      { text: "2 0", correct: false },
      { text: "1 -1", correct: false },
      { text: "true false", correct: true },
    ],
    explanation:
      "The method remove(Object o) returns true if the list contained the specified element. The first remove call removes the first 'a' and returns true. The second remove call returns false because 'x' is not in the list.",
  },
  {
    question:
      "Which of the following is NOT a primitive data value in Java? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: '"x"', correct: true },
      { text: "'x'", correct: false },
      { text: "10.2F", correct: false },
      { text: "new Object()", correct: true },
      { text: "false", correct: false },
    ],
    explanation:
      "In Java, 'x' is a character literal, and 10.2F is a float literal. 'new Object()' is an object, not a primitive data type. \"x\" is a String, which is also not a primitive data type.",
  },
  {
    question:
      "What can be inserted in the above code so that it can compile without any error? <br><br>(Choose 2 answers)",
    code: `import java.util. * ;
public class TestClass {
  public static void main(String[] args) throws Exception {
    ArrayList < Double > al = new ArrayList < >();
    //INSERT CODE HERE
  }
}`,
    answers: [
      { text: "al.add(111);", correct: false },
      { text: "System.out.println(al.indexOf(1.0));", correct: true },
      { text: 'System.out.println(al.contains("string"));', correct: false },
      { text: "Double d = al.get(al.length);", correct: false },
    ],
    explanation:
      "The method indexOf can be used with a Double value, and the contains method can be used with a Double value. The add method requires a Double, and the get method should use size() instead of length.",
  },
  {
    question:
      "Which of the following are valid declarations of the standard main method? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "static void main(String args[ ]) { }", correct: false },
      { text: "public static int main(String args[ ]) {}", correct: false },
      { text: "public static void main (String args) { }", correct: false },
      {
        text: "final static public void main (String[ ] arguments ) { }",
        correct: true,
      },
      { text: "public static void main (String[ ] args) { }", correct: true },
    ],
    explanation:
      "The main method must be public, static, and void. The order of modifiers does not matter, so 'final static public' is valid.",
  },
  {
    question:
      "What will the following statement print? <br><br>(Choose 1 answer)",
    code: `System.out.printf("I scored %d marks in the %s exam!", "90%", "Java Foundations");`,
    answers: [
      {
        text: "I scored 90% marks in the Java Foundations exam!",
        correct: false,
      },
      {
        text: "I scored 90 marks in the Java Foundations exam!",
        correct: false,
      },
      { text: "Exception will be thrown at run time.", correct: true },
      {
        text: 'It will print I scored 90 marks in the Java Foundations exam! if "90%" is changed to "90" in the argument list.',
        correct: false,
      },
    ],
    explanation:
      'The format specifier %d expects an integer, but a string "90%" is provided, causing an IllegalFormatConversionException.',
  },
  {
    question:
      "Which of the following can be valid declarations of an integer variable? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "global int x = 10;", correct: false },
      { text: "final int x = 10;", correct: true },
      { text: "public Int x = 10;", correct: false },
      { text: "Int x = 10;", correct: false },
      { text: "static int x = 10;", correct: true },
    ],
    explanation:
      "The 'final' and 'static' modifiers are valid for integer variable declarations. 'Int' should be 'int', and 'global' is not a valid modifier.",
  },
  {
    question:
      "Given the following set of member declarations, which of the following is true? <br><br>(Choose 2 answers)",
    code: `int a; //  (1)
static int a; //  (2)
int f() {
  return a;
} //  (3)
static int f() {
  return a;
} //  (4)
`,
    answers: [
      {
        text: "Declarations (1) and (3) cannot occur in the same class definition.",
        correct: false,
      },
      {
        text: "Declarations (2) and (4) cannot occur in the same class definition.",
        correct: false,
      },
      {
        text: "Declarations (1) and (4) cannot occur in the same class definition.",
        correct: false,
      },
      {
        text: "Declarations (2) and (3) cannot occur in the same class definition.",
        correct: false,
      },
      {
        text: "Declarations (1) and (2) cannot occur in the same class definition.",
        correct: true,
      },
    ],
    explanation:
      "You cannot have two fields with the same name in the same class, regardless of whether they are static or not.",
  },
  {
    question:
      "What is the result of executing the following fragment of code? <br><br>(Choose 1 answer)",
    code: `boolean b1 = false;
boolean b2 = false;
if (b2 != b1 = !b2) {
  System.out.println("true");
} else {
  System.out.println("false");
}`,
    answers: [
      { text: "Compile time error.", correct: true },
      { text: "It will print true.", correct: false },
      { text: "It will print false.", correct: false },
      { text: "Runtime error.", correct: false },
      { text: "It will print nothing.", correct: false },
    ],
    explanation:
      "The expression 'b2 != b1 = !b2' is invalid because 'b1 = !b2' is an assignment, not a boolean expression, leading to a compile-time error.",
  },
  {
    question:
      "Which of the following can be used as a constructor for the class shell given below? <br><br>(Choose 2 answers)",
    code: `public class TestClass {
  // lots of code ...
}`,
    answers: [
      { text: "public void TestClass() {...}", correct: false },
      { text: "public TestClass() {...}", correct: true },
      { text: "public static TestClass() {...}", correct: false },
      { text: "public final TestClass() {...}", correct: false },
      { text: "public TestClass(int x) { ...}", correct: true },
    ],
    explanation:
      "Constructors must have the same name as the class and cannot have a return type. 'public TestClass() {...}' and 'public TestClass(int x) {...}' are valid constructors.",
  },
  {
    question:
      "Which of the following methods do not follow JavaBeans naming conventions? <br><br>(Choose 1 answer)",
    code: `public class Bond {
  public String ticker;
  private double Coupon;
  public String getTicker() {
    return ticker;
  }
  public void setTicker(String ticker) {
    this.ticker = ticker;
  }
  public double getCoupon() {
    return Coupon;
  }
  public void setCoupon(double coupon) {
    //do nothing
  }
  public java.util.Date getMaturity() {
    return new java.util.Date();
  }
  public boolean isFloater() {
    return false;
  }
  public boolean getCallable() {
    return true;
  }
}`,
    answers: [
      { text: "getTicker", correct: false },
      { text: "getCoupon", correct: false },
      { text: "setCoupon", correct: false },
      { text: "getMaturity", correct: false },
      { text: "isFloater", correct: false },
      { text: "getCallable", correct: true },
      { text: "All are valid.", correct: false },
    ],
    explanation:
      "The method 'getCallable' does not follow the JavaBeans naming convention for boolean properties, which should use 'is' as a prefix.",
  },
  {
    question:
      "Which method declarations will enable a class to be run as a standalone program? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "static void main(String args[])", correct: false },
      { text: "public void static main(String args[])", correct: false },
      { text: "public static main(String[] argv)", correct: false },
      { text: "final public static void main(String[] array)", correct: true },
      { text: "public static void main(String args[])", correct: true },
    ],
    explanation:
      "The main method must be public, static, and void. The order of modifiers does not matter, so 'final public static' is valid.",
  },
  {
    question: "What will the following code print? <br><br>(Choose 1 answer)",
    code: `class Test {
  public static void main(String args[]) {
    int c = 0;
    A: for (int i = 0; i < 2; i++) {
      B: for (int j = 0; j < 2; j++) {
        C: for (int k = 0; k < 3; k++) {
          c++;
          if (k > j) break;
        }
      }
    }
    System.out.println(c);
  }
}`,
    answers: [
      { text: "7", correct: true },
      { text: "8", correct: false },
      { text: "9", correct: false },
      { text: "10", correct: false },
      { text: "11", correct: false },
    ],
    explanation:
      "The innermost loop breaks when k > j, so it runs 2 times for j=0 and 1 time for j=1, resulting in 3 iterations per outer loop, totaling 6 iterations.",
  },
  {
    question:
      "Which of these statements regarding the following code are correct? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  static int a;
  int b;
  public TestClass() {
    int c;
    c = a;
    a++;
    b += c;
  }
  public static void main(String args[]) {
    new TestClass();
  }
}`,
    answers: [
      {
        text: "The code will fail to compile, since the constructor is trying to access static members.",
        correct: false,
      },
      {
        text: "The code will fail to compile, since the constructor is trying to use static member variable a before it has been initialized.",
        correct: false,
      },
      {
        text: "The code will fail to compile, since the constructor is trying to use member variable b before it has been initialized.",
        correct: false,
      },
      {
        text: "The code will fail to compile, since the constructor is trying to use local variable c before it has been initialized.",
        correct: false,
      },
      {
        text: "The code will compile and run without any problems.",
        correct: true,
      },
    ],
    explanation:
      "The code will compile and run without any problems. Static variables are initialized to their default values, and instance variables are initialized before the constructor is called.",
  },
  {
    question:
      "In the following code what will be the output if 0 (integer value zero) is passed to loopTest()? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public void loopTest(int x) {
    loop: for (int i = 1; i < 5; i++) {
      for (int j = 1; j < 5; j++) {
        System.out.println(i);
        if (x == 0) {
          continue loop;
        }
        System.out.println(j);
      }
    }
  }
}`,
    answers: [
      { text: "The program will not compile.", correct: false },
      { text: "It will print 1 2 3 4", correct: false },
      { text: "It will print 1 1 2 3 4", correct: false },
      { text: "It will print 1 1 2 2 3 3 4 4", correct: false },
      { text: "Produces no output", correct: true },
    ],
    explanation:
      "The loop will print the value of 'i' and then continue to the next iteration of the outer loop, skipping the inner loop, resulting in no output.",
  },
  {
    question:
      "What will the following program print? <br><br>(Choose 1 answer)",
    code: `class Test {
  public static void main(String args[]) {
    int c = 0;
    boolean flag = true;
    for (int i = 0; i < 3; i++) {
      while (flag) {
        c++;
        if (i > c || c > 5) flag = false;
      }
    }
    System.out.println(c);
  }
}`,
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: false },
      { text: "6", correct: true },
      { text: "7", correct: false },
    ],
    explanation:
      "The while loop increments 'c' until 'c > 5', at which point 'flag' is set to false, and the loop exits. The final value of 'c' is 6 because the loop stops when 'c' becomes 6, and no further increments occur.",
  },
  {
    question:
      "Consider the following class: What will be printed when the above class is run using the following command line: java ArgsPrinter 1 2 3 4? <br><br>(Choose 1 answer)",
    code: `public class ArgsPrinter {
  public static void main(String args) {
    for (int i = 0; i < 3; i++) {
      System.out.println(args);
    }
  }
}`,
    answers: [
      { text: "1 2 3", correct: false },
      { text: "ArgsPrinter 1 2", correct: false },
      { text: "java ArgsPrinter 1 2", correct: false },
      { text: "1 1 1", correct: false },
      { text: "None of these.", correct: true },
    ],
    explanation:
      "The main method signature is incorrect. It should be 'main(String[] args)' to accept command-line arguments. The program will not run as expected.",
  },
  {
    question:
      "What can be inserted at //1 and //2 in the code below so that it will print a number between 0.0 and 1.0? (Assume that no package has been imported in the code.) <br><br>(Choose 2 answers)",
    code: `//1
double d = //2
System.out.println(d);`,
    answers: [
      {
        text: "java.util.Random r = new java.util.Random(); and r.random();",
        correct: false,
      },
      { text: "Random r = new Random(); and r.random();", correct: false },
      {
        text: "java.util.Random r = new java.util.Random(); and r.nextDouble();",
        correct: true,
      },
      { text: "Random r = new Random(); and r.next();", correct: false },
      {
        text: "java.util.Random r = new java.util.Random(100); and r.nextDouble();",
        correct: true,
      },
    ],
    explanation:
      "The Random class's nextDouble() method returns a double value between 0.0 and 1.0. The correct instantiation is 'java.util.Random r = new java.util.Random();'.",
  },
  {
    question:
      "Which of these is the correct format to use to create the char literal of value a? Assume that \\u0061 is the unicode value for a. <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "'a'", correct: true },
      { text: '"a"', correct: false },
      { text: "new Character(a)", correct: false },
      { text: "\\u0061", correct: false },
      { text: "'\\u0061'", correct: true },
    ],
    explanation:
      "The correct char literal can be created using single quotes around the character or the unicode escape sequence.",
  },
  {
    question:
      "What will the following program print? <br><br>(Choose 1 answer)",
    code: `class Test {
  public static void main(String args[]) {
    int i = 0,
    j = 0;
    X1: for (i = 0; i < 3; i++) {
      X2: for (j = 3; j > 0; j--) {
        if (i < j) continue X1;
        else break X2;
      }
    }
    System.out.println(i + " " + j);
  }
}`,
    answers: [
      { text: "0 3", correct: false },
      { text: "0 2", correct: false },
      { text: "3 0", correct: true },
      { text: "3 3", correct: false },
      { text: "2 2", correct: false },
    ],
    explanation:
      "The outer loop continues when i < j, skipping the inner loop. When i >= j, the inner loop breaks, resulting in i=3 and j=0.",
  },
  {
    question:
      "Given the following two lines of code: What can XXX be? <br><br>(Choose 1 answer)",
    code: `int rate = 10;
XXX amount = 1 - rate / 100 * 1 - rate / 100;`,
    answers: [
      { text: "only int or long", correct: false },
      { text: "only long or double", correct: false },
      { text: "only double", correct: false },
      { text: "int, long, float, or double", correct: true },
      { text: "long or double but not int or float.", correct: false },
    ],
    explanation:
      "The expression results in an integer value, so it can be assigned to any numeric type: int, long, float, or double.",
  },
  {
    question:
      "Which code fragments will print the last argument given on the command line to the standard output, and exit without any output and exceptions on the command line if no arguments are given? <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      {
        text: "public static void main(String args[]) { if (args.length != 0) System.out.println(args[args.length-1]); }",
        correct: true,
      },
      {
        text: "public static void main(String args[]) { try { System.out.println(args[args.length-1]); } catch (ArrayIndexOutOfBoundsException e) { } }",
        correct: true,
      },
      {
        text: "public static void main(String args[]) { int i = args.length; if (i != 0) System.out.println(args[i-1]); }",
        correct: true,
      },
      {
        text: "public static void main(String args[]) { int i = args.length-1; if (i > 0) System.out.println(args[i]); }",
        correct: false,
      },
      {
        text: "public static void main(String args[]) { try { System.out.println(args[args.length-1]); } catch (NullPointerException e) { } }",
        correct: false,
      },
    ],
    explanation:
      "The first three options correctly handle the case where no arguments are given, either by checking the length or catching the appropriate exception.",
  },
  {
    question:
      "Consider the following method: Which of the following statements are correct? <br><br>(Choose 2 answers)",
    code: `public static void ifTest(boolean flag) {
  if (flag) //1
  if (flag) //2
  if (flag) //3
  System.out.println("False True");
  else //4
  System.out.println("True False");
  else //5
  System.out.println("True True");
  else //6
  System.out.println("False False");
}`,
    answers: [
      {
        text: "If run with an argument of 'false', it will print 'False False'",
        correct: true,
      },
      {
        text: "If run with an argument of 'false', it will print 'True True'",
        correct: false,
      },
      {
        text: "If run with an argument of 'true', it will print 'True False'",
        correct: true,
      },
      { text: "It will never print 'True True'", correct: false },
      { text: "It will not compile.", correct: false },
    ],
    explanation:
      "The nested if-else structure will print 'False False' if the flag is false and 'True False' if the flag is true.",
  },
  {
    question:
      "Which digits and in what order will be printed when the following program is run? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static void main(String args[]) {
    int k = 0;
    try {
      int i = 5 / k;
    } catch(ArithmeticException e) {
      System.out.println("1");
    } catch(RuntimeException e) {
      System.out.println("2");
      return;
    } catch(Exception e) {
      System.out.println("3");
    } finally {
      System.out.println("4");
    }
    System.out.println("5");
  }
}`,
    answers: [
      { text: "The program will print 5.", correct: false },
      {
        text: "The program will print 1 and 4, in that order.",
        correct: false,
      },
      {
        text: "The program will print 1, 2 and 4, in that order.",
        correct: false,
      },
      {
        text: "The program will print 1, 4 and 5, in that order.",
        correct: true,
      },
      {
        text: "The program will print 1,2, 4 and 5, in that order.",
        correct: false,
      },
    ],
    explanation:
      "The ArithmeticException is caught, printing '1'. The finally block executes, printing '4'. In the end, the program will print '5'.",
  },
  {
    question:
      "Which of the following statements are true? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      {
        text: 'System.out.println(1 + 2 + "3"); would print 33.',
        correct: false,
      },
      {
        text: 'System.out.println("1" + 2 + 3); would print 15.',
        correct: false,
      },
      { text: "System.out.println(4 + 1.0f); would print 5.0", correct: true },
      { text: "System.out.println(5/4); would print 1.25", correct: false },
      { text: "System.out.println('a' + 1 ); would print b.", correct: true },
    ],
    explanation:
      "The expression '4 + 1.0f' results in a float addition, printing 5.0. The expression 'System.out.println('a' + 1)' prints the integer value of 'a' plus 1, which is 'b'.",
  },
  {
    question:
      "What will the following code print when compiled and run? <br><br>(Choose 1 answer)",
    code: `import java.util. * ;
public class TestClass {
  public static void main(String[] args) throws Exception {
    ArrayList < String > al = new ArrayList < String > ();
    al.add("111");
    al.add("222");
    System.out.println(al.get(al.size()));
  }
}`,
    answers: [
      { text: "It will not compile.", correct: false },
      {
        text: "It will throw a NullPointerException at run time.",
        correct: false,
      },
      {
        text: "It will throw an IndexOutOfBoundsException at run time.",
        correct: true,
      },
      { text: "222", correct: false },
      { text: "null", correct: false },
    ],
    explanation:
      "The method get(al.size()) attempts to access an index equal to the size of the list, which is out of bounds, resulting in an IndexOutOfBoundsException.",
  },
  {
    question:
      "You are developing a class that represents a Book. Which data type will you use for storing the ISBN number, which is an alphanumeric number, of the book? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "int", correct: false },
      { text: "char", correct: false },
      { text: "String", correct: true },
      { text: "None of these.", correct: false },
    ],
    explanation:
      "The ISBN number is alphanumeric, so it should be stored as a String.",
  },
  {
    question:
      "What will the following code print when compiled and run? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static void main(String[] args) {
    int[] arr = { 1, 2, 3, 4, 5, 6 };
    int counter = 0;
    for (int value: arr) {
      if (counter >= 5) {
        break;
      } else {
        continue;
      }
      if (value > 4) {
        arr[counter] = value + 1;
      }
      counter++;
    }
    System.out.println(arr[counter]);
  }
}`,
    answers: [
      { text: "It will not compile.", correct: true },
      { text: "It will throw an exception at run time.", correct: false },
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: false },
    ],
    explanation:
      "The code will not compile because the 'continue' statement skips the increment of 'counter', leading to an infinite loop.",
  },
  {
    question: "Identify valid for constructs: <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      {
        text: 'A) for(;Math.random()<0.5;) { System.out.println("true"); }',
        correct: true,
      },
      {
        text: 'B) for(;;Math.random()<0.5) { System.out.println("true"); }',
        correct: false,
      },
      {
        text: 'C) for(;;Math.random()) { System.out.println("true"); }',
        correct: false,
      },
      { text: "D) for(;;) { if(Math.random()<.05) break; }", correct: true },
    ],
    explanation:
      `In option A), for(;Math.random()<0.5;) { System.out.println("true"); } is valid because it includes a condition (Math.random() < 0.5) while omitting the initialization and update expressions. This loop will continue executing as long as the condition evaluates to true. Option D), for(;;) { if(Math.random()<.05) break; }, is also valid as it creates an infinite loop that can be exited with a break statement if the condition inside the loop is met.<br><br>On the other hand, option B), for(;;Math.random()<0.5) { System.out.println("true"); }, is invalid because it improperly uses a condition as an update expression, which leads to a compilation error. Similarly, option C), for(;;Math.random()) { System.out.println("true"); }, is also invalid for the same reason, as the update expression does not conform to the expected syntax.`,
  },
  {
    question:
      "Which of the following code fragments are valid method declarations? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "void method1{ }", correct: false },
      { text: "void method2( ) { }", correct: true },
      { text: "void method3(void){ }", correct: false },
      { text: "method4{ }", correct: false },
      { text: "method5(void){ }", correct: false },
    ],
    explanation:
      "The method declaration 'void method2( ) { }' is valid. The others have syntax errors or invalid parameter lists.",
  },
  {
    question: "What is the result? <br><br>(Choose 1 answer)",
    code: `int a = 5, b = 2, c = 30;
System.out.println(a + ++b * c);`,
    answers: [
      { text: "65", correct: false },
      { text: "210", correct: false },
      { text: "180", correct: false },
      { text: "95", correct: true },
      { text: "Compilation failure", correct: false },
    ],
    explanation:
      "The expression evaluates as follows: '++b' increments b to 3, then '3 * 30' is 90, and '5 + 90' is 95.",
  },
  {
    question:
      "What will the following program print? <br><br>(Choose 1 answer)",
    code: `class Test {
  public static void main(String args[]) {
    int k = 9,
    s = 5;
    switch (k) {
    default:
      if (k == 10) {
        s = s * 2;
      }
      else {
        s = s + 4;
        break;
      }
    case 7:
      s = s + 3;
    }
    System.out.println(s);
  }
}`,
    answers: [
      { text: "5", correct: false },
      { text: "9", correct: false },
      { text: "12", correct: true },
      { text: "It will not compile.", correct: false },
    ],
    explanation:
      "The default case executes, adding 4 to s, resulting in 9. The case 7 is not executed because of the break statement.",
  },
  {
    question:
      "Which of the following is a benefit of encapsulation? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      {
        text: "It allows you to add functionality by extending the class.",
        correct: false,
      },
      {
        text: "It allows you to plug and play different components without changing the code.",
        correct: false,
      },
      {
        text: "It allows you the change the implementation of the internal logic without changing the API.",
        correct: true,
      },
      {
        text: "It allows you to couple one class with another.",
        correct: false,
      },
      { text: "It provides control over data.", correct: true },
    ],
    explanation:
      "Encapsulation allows you to change the internal implementation without affecting the external API and provides control over data access.",
  },
  {
    question:
      "Which of these statements concerning the charAt() method of java.lang.String class are true? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      {
        text: "The charAt( ) method can take a char value as an argument.",
        correct: false,
      },
      {
        text: "The charAt( ) method returns a Character object.",
        correct: false,
      },
      {
        text: 'The expression char ch = "12345".charAt(3) will assign 3 to ch.',
        correct: false,
      },
      {
        text: 'The expression char ch = str.charAt(str.length()) where str is "12345", will assign 3 to ch.',
        correct: false,
      },
      { text: "The index of the first character is 0.", correct: true },
    ],
    explanation:
      "The charAt() method takes an int index as an argument and returns a char. The index of the first character is 0.",
  },
  {
    question:
      "Which of the following are valid declarations: <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      { text: "int a = b = c = 100;", correct: false },
      { text: "int a, b, c; a = b = c = 100;", correct: true },
      { text: "int a, b, c=100;", correct: true },
      { text: "int a=100, b, c;", correct: true },
      { text: "int a= 100 = b = c;", correct: false },
    ],
    explanation:
      "The declarations 'int a, b, c; a = b = c = 100;', 'int a, b, c=100;', and 'int a=100, b, c;' are valid. The others have syntax errors.",
  },
  {
    question:
      "What will be the result of attempting to compile and run the following program? <br><br>(Choose 1 answer)",
    code: `class TestClass {
  public static void main(String args[]) {
    int i = 0;
    loop: // 1
    {
      System.out.println("Loop Lable line");
      try {
        for (; true; i++) {
          if (i > 5) break loop; // 2
        }
      } catch(Exception e) {
        System.out.println("Exception in loop.");
      } finally {
        System.out.println("In Finally"); // 3
      }
    }
  }
}`,
    answers: [
      {
        text: "Compilation error at line 1 as this is an invalid syntax for defining a label.",
        correct: false,
      },
      {
        text: "Compilation error at line 2 as 'loop' is not visible here.",
        correct: false,
      },
      {
        text: "No compilation error and line 3 will be executed.",
        correct: true,
      },
      {
        text: "No compilation error and line 3 will NOT be executed.",
        correct: false,
      },
      {
        text: "Only the line with the label Loop will be printed.",
        correct: false,
      },
    ],
    explanation:
      "The code will compile and run without errors. The finally block will execute, printing 'In Finally'.",
  },
  {
    question:
      "Given the following code snippet: What can XXX be? <br><br>(Choose 1 answer)",
    code: `int rate = 10;
int t = 5;
XXX amount = 1000.0;
for (int i = 0; i < t; t++) {
  amount = amount * (1 - rate / 100);
}`,
    answers: [
      { text: "int", correct: false },
      { text: "long", correct: false },
      { text: "only double", correct: true },
      { text: "double or float", correct: true },
      { text: "float", correct: false },
    ],
    explanation:
      "The variable 'amount' is initialized with a double value, so it must be declared as a double or float.",
  },
  {
    question:
      "Identify the fundamental principles of Object Oriented Programming. <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "Code reuse", correct: true },
      { text: "Dependency Injection", correct: false },
      { text: "Hiding unnecessary details", correct: true },
      { text: "Scripting", correct: false },
      { text: "Write once run anywhere (WORA)", correct: false },
    ],
    explanation:
      "The fundamental principles of Object-Oriented Programming include encapsulation (hiding unnecessary details) and inheritance (code reuse).",
  },
  {
    question:
      "What will be the result of attempting to compile and run the following program? <br><br>(Choose 1 answer)",
    code: `class TestClass {
  public static void main(String args[]) {
    boolean b = false;
    int i = 1;
    do {
      i++;
    } while ( b = ! b );
    System.out.println(i);
  }
}`,
    answers: [
      {
        text: "The code will fail to compile because the while statement used in the code has an invalid condition expression.",
        correct: false,
      },
      {
        text: "It will compile but will throw an exception at runtime.",
        correct: false,
      },
      { text: "It will print 3.", correct: true },
      { text: "It will create an infinite loop.", correct: false },
      { text: "It will print 1.", correct: false },
    ],
    explanation:
      "The loop executes twice: once when b is false and once when b is true. The final value of i is 3.",
  },
  {
    question:
      "Consider the following two java files in /home/user directory: <br><br>The files are compiled using the following command line: javac -d /home *.java <br><br>Where will the class files be created? <br><br>(Choose 1 answer)",
    code: `//file A.java
package com.enthu;
class A {}

//file B.java
package com.foo;
class B {}`,
    answers: [
      { text: "Both A.class and B.class in /home", correct: false },
      {
        text: "A.class in /home/com/enthu and B.class in /home/com/foo",
        correct: true,
      },
      { text: "Both A.class and B.class in /home/classes", correct: false },
      { text: "No class file will be generated.", correct: false },
    ],
    explanation:
      "The '-d' option specifies the root directory for package directories. The class files will be placed in /home/com/enthu and /home/com/foo.",
  },
  {
    question: "A Java method .... <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "cannot return multiple values.", correct: true },
      { text: "cannot be private.", correct: false },
      { text: "must take 1 or more parameters.", correct: false },
      { text: "must return a value.", correct: false },
      { text: "must exist inside a type definition.", correct: true },
    ],
    explanation:
      "A Java method cannot return multiple values directly and must exist inside a class or interface.",
  },
  {
    question:
      "What will be the result of attempting to compile and run the following class? <br><br>(Choose 1 answer)",
    code: `public class IfTest {
  public static void main(String args[]) {
    if (true) if (false) System.out.println("True False");
    else System.out.println("True True");
  }
}`,
    answers: [
      {
        text: "The code will fail to compile because the syntax of the if statement is not correct.",
        correct: false,
      },
      {
        text: "The code will fail to compile because the values in the condition bracket are invalid.",
        correct: false,
      },
      {
        text: "The code will compile correctly and will not display anything.",
        correct: false,
      },
      {
        text: "The code will compile correctly and will display 'True True'.",
        correct: true,
      },
      {
        text: "The code will compile correctly but will display 'True False'",
        correct: false,
      },
    ],
    explanation:
      "The nested if-else structure will execute the else block, printing 'True True'.",
  },
  {
    question:
      "What will be the output of the following code? <br><br>(Choose 2 answers)",
    code: `public class Test {
  static int a;
  int b;
  public void incr() {
    int c = a++;
    b++;
    c++;
    System.out.println(a + " " + b + " " + c);
  }
  public static void main(String args[]) {
    Test test = new Test();
    test.incr();
    a++;
    test = new Test();
    test.incr();
  }
}`,
    answers: [
      { text: "Compilation failure.", correct: false },
      { text: "1 1 1", correct: true },
      { text: "2 1 2", correct: false },
      { text: "1 1 1", correct: false },
      { text: "3 1 3", correct: true },
      { text: "1 2 1", correct: false },
      { text: "2 3 3", correct: false },
      { text: "1 2 1", correct: false },
      { text: "3 3 3", correct: false },
    ],
    explanation: `The code initializes a static variable a and an instance variable b. In the first call to incr(), c is assigned the value of a, which is 0, and then a increments to 1. The instance variable b increments to 1, and c increments to 1. Thus, the output for this call is "1 1 1".<br><br>After this, a increments to 2. When a new instance of Test is created and incr() is called again, c is assigned the value of a, now 2, and then a increments to 3. The new instance's b increments to 1, and c increments to 3. Therefore, the output for the second call is "3 1 3".`,
  },
  {
    question: "The JRE contains: <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "Java API", correct: true },
      { text: "Virtual machine", correct: true },
      { text: "debugging tools", correct: false },
      { text: "IDE", correct: false },
      { text: "Java Application Launcher", correct: false },
    ],
    explanation:
      "The JRE (Java Runtime Environment) contains the Java API and the virtual machine.",
  },
  {
    question:
      "Which of the following are primitive integral types in java? <br><br>(Choose 4 answers)",
    code: ``,
    answers: [
      { text: "float", correct: false },
      { text: "nibble", correct: false },
      { text: "char", correct: true },
      { text: "byte", correct: true },
      { text: "short", correct: true },
      { text: "int", correct: true },
      { text: "natural", correct: false },
    ],
    explanation:
      "The primitive integral types in Java are char, byte, short, and int.",
  },
  {
    question:
      "Consider the following class definition: What will be the result of compiling and running the class? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static void main() {
    new TestClass().sayHello();
  } //1
  public static void sayHello() {
    System.out.println("Static Hello World");
  } //2
  public void sayHello() {
    System.out.println("Hello World ");
  } //3
}`,
    answers: [
      { text: "It will print 'Hello World'.", correct: false },
      { text: "It will print 'Static Hello World'.", correct: false },
      { text: "Compilation error at line 2.", correct: false },
      { text: "Compilation error at line 3.", correct: false },
      { text: "Runtime Error.", correct: true },
    ],
    explanation:
      "The main method is missing the String[] args parameter, resulting in a runtime error.",
  },
  {
    question: "What will the following code print? <br><br>(Choose 1 answer)",
    code: `String abc = "";
abc.concat("abc");
abc.concat("def");
System.out.println(abc);`,
    answers: [
      { text: "abc", correct: false },
      { text: "abcdef", correct: false },
      { text: "def", correct: false },
      {
        text: "It will print empty string (or in other words, nothing).",
        correct: true,
      },
      {
        text: "It will not compile because there is no concat() method in String class.",
        correct: false,
      },
    ],
    explanation:
      "The concat() method returns a new string and does not modify the original string. Therefore, 'abc' remains an empty string.",
  },
  {
    question:
      "The following code snippet will not compile... <br><br>(Choose 1 answer)",
    code: `int i = 10;
System.out.println(i < 20 ? out1() : out2());`,
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
    explanation:
      "The methods out1() and out2() have void return types, which cannot be used in the ternary operator.",
  },
  {
    question:
      "What will be written to the standard output when the following program is run? <br><br>(Choose 1 answer)",
    code: `public class TrimTest {
  public static void main(String args[]) {
    String blank = " "; // one space
    String line = blank + "hello" + blank + blank;
    line.concat("world");
    String newLine = line.trim();
    System.out.println((int)(line.length() + newLine.length()));
  }
}`,
    answers: [
      { text: "25", correct: false },
      { text: "24", correct: false },
      { text: "23", correct: false },
      { text: "22", correct: true },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The original line has a length of 8 (including spaces). The trimmed line has a length of 5. The sum is 13.",
  },
  {
    question:
      "You are developing a Java rich client application that is to be installed on a lot of workstations used by the employees of your company. The users are located in various office locations across the globe. Which of the following Java technologies will be useful in delivering the application to the users over the internet? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "Java RMI", correct: false },
      { text: "Java Web Start", correct: true },
      { text: "Email", correct: false },
      { text: "EJB and Servlet", correct: false },
      { text: "Swing/AWT", correct: false },
    ],
    explanation:
      "Java Web Start is a technology that allows Java applications to be launched directly from the internet.",
  },
  {
    question: "Which of the following are literals? <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      { text: "goto", correct: false },
      { text: "case", correct: false },
      { text: "break", correct: false },
      { text: "true", correct: true },
      { text: "false", correct: true },
      { text: "null", correct: true },
      { text: "Integer", correct: false },
    ],
    explanation: "The literals in Java are true, false, and null.",
  },
  {
    question: "What is the output? <br><br>(Choose 1 answer)",
    code: `public class Test {
  public int div(int a, int b) throws Exception {
    try {
      return a / b;
    } catch(ArithmeticException ae) {
      System.out.println("exception in div");
      return 0;
    }
  }

  public static void main(String args[]) {
    Test test = new Test();
    try {
      System.out.println(test.div(5, 0));
    } catch(Exception e) {
      System.out.println("exception in main");
    }
  }
}`,
    answers: [
      { text: "exception in div", correct: false },
      { text: "exception in main", correct: false },
      { text: "exception in div exception in main", correct: false },
      { text: "exception in div" + "\n" + "0", correct: true },
      { text: "Compilation failure", correct: false },
    ],
    explanation: `The div method attempts to divide a by b. When div(5, 0) is called, an ArithmeticException is thrown due to division by zero. The catch block in div catches this exception, prints "exception in div," and returns 0. The main method then prints this returned value.`,
  },
  {
    question:
      "What will the following code print when run? <br><br>(Choose 1 answer)",
    code: `public class Mambo {
  public static String makeItBetter(String str) {
    return str + "!!!";
  }
  public static void main(String args[]) {
    String str = "Hi";
    str = makeItBetter(str);
    System.out.println(str);
  }
}`,
    answers: [
      { text: "Hi!!!", correct: true },
      { text: "Hi", correct: false },
      { text: "Hi!!!!!!", correct: false },
      { text: "None of these.", correct: false },
    ],
    explanation:
      "The method makeItBetter appends '!!!' to the string, resulting in 'Hi!!!'.",
  },
  {
    question:
      "What can be inserted in the above code so that it will print 10 10.0? <br><br>(Choose 1 answer)",
    code: `class Acct {
  int id;
  double balance;
  public Acct(int id, double balance) {
    this.id = id;
    this.balance = balance;
  }
  public void setId(int id) {
    this.id = id;
  }
  public void setBalance(double balance) {
    this.balance = balance;
  }
}
public class Account {
  public static void main(String[] args) {
    //INSERT CODE HERE        
    System.out.println(acct.id + " " + acct.balance);
  }
}`,
    answers: [
      {
        text: "Acct acct = new Acct(); acct.id = 10; acct.balance = 10.0;",
        correct: false,
      },
      { text: "Acct acct = new Acct(10, 10);", correct: true },
      {
        text: "Acct acct = new Acct(); acct.setId(10); acct.setBalance(10.0);",
        correct: false,
      },
      {
        text: "Acct acct = null; acct.id = 10; acct.balance = 10.0;",
        correct: false,
      },
      { text: "Acct acct; acct.id = 10; acct.balance = 10.0;", correct: false },
    ],
    explanation:
      "The constructor Acct(int id, double balance) initializes the id and balance fields. The correct instantiation is 'Acct acct = new Acct(10, 10);'.",
  },
  {
    question:
      "Consider the following code: What will be the output when it is run by giving the following command: java Test good bye friend!? <br><br>(Choose 1 answer)",
    code: `class Test {
  public static void main(String[] args) {
    for (int i = 0; i < args.length; i++) System.out.print(i == 0 ? args[i] : " " + args[i]);
  }
}`,
    answers: [
      { text: "It will print good bye friend!", correct: true },
      { text: "It will print good good good", correct: false },
      { text: "It will print goodgoodgood", correct: false },
      { text: "It will print good bye", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The loop iterates over the command-line arguments, printing each one separated by a space.",
  },
  {
    question:
      "What will the following code print when run? <br><br>(Choose 1 answer)",
    code: `List s1 = new ArrayList();
s1.add("ann");
if (s1.contains("ann")) s1.add("ann");
System.out.println(s1.size() + " " + s1.indexOf("ann"));`,
    answers: [
      { text: "1 0", correct: false },
      { text: "2 0", correct: true },
      { text: "2 1", correct: false },
      { text: "1 1", correct: false },
      { text: "Compilation failure", correct: false },
      { text: "an exception at run time", correct: false },
    ],
    explanation:
      "The list contains 'ann', so another 'ann' is added. The size is 2, and the index of the first 'ann' is 0.",
  },
  {
    question:
      "What can be the return type of method getSwitch so that this program compiles and runs without any problems? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static XXX getSwitch(int x) {
    return x - 20 / x + x * x;
  }
  public static void main(String args[]) {
    switch (getSwitch(10)) {
    case 1:
    case 2:
    case 3:
    default:
      break;
    }
  }
}`,
    answers: [
      { text: "int", correct: true },
      { text: "float", correct: false },
      { text: "long", correct: false },
      { text: "double", correct: false },
      { text: "char", correct: false },
      { text: "byte", correct: false },
      { text: "short", correct: false },
    ],
    explanation:
      "The switch statement requires an int, short, byte, or char. The expression returns an int, so the return type should be int.",
  },
  {
    question:
      "Your GUI screen contains a text field for username. The String variable used to store the value entered by the user is named userName. Which of the following lines of code will you use to check whether the userName is empty or not? A value containing only spaces is also considered empty. <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: 'userName.equals("")', correct: false },
      { text: 'userName.removeWhiteSpaces().equals("")', correct: false },
      { text: "userName.trim().length == 0", correct: false },
      { text: 'userName.trim().equals("")', correct: true },
    ],
    explanation: `The method userName.trim().equals("") checks if the trimmed version of userName is equal to an empty string, effectively determining if it is empty or consists only of spaces.`,
  },
  {
    question:
      "Consider the following code in file TestClass.java: <br><br>This file is compiled and run using the following command line: java -version TestClass <br><br>What will be the output? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static void main(String[] args) {
    System.out.println("Hello!!!");
  }
}`,
    answers: [
      {
        text: "The Java interpreter will print the version information and then exit without running the java class.",
        correct: true,
      },
      {
        text: 'It will print the version information followed by "Hello!!!".',
        correct: false,
      },
      { text: 'It will only print "Hello!!!".', correct: false },
      { text: "It will print an error message and exit.", correct: false },
    ],
    explanation:
      "The command 'java -version TestClass' prints the version information and exits without running the class.",
  },
  {
    question:
      "Which of the following statements is correct? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      {
        text: "new, delete, and goto are keywords in the Java language",
        correct: false,
      },
      {
        text: "try, catch, and thrown are keywords in the Java language",
        correct: false,
      },
      {
        text: "static, unsigned, and long are keywords in the Java language",
        correct: false,
      },
      {
        text: "exit, class, and while are keywords in the Java language",
        correct: false,
      },
      {
        text: "return, goto, and default are keywords in the Java language",
        correct: true,
      },
    ],
    explanation:
      "In Java, 'return', 'goto', and 'default' are keywords. 'goto' is reserved but not used.",
  },
  {
    question:
      "What can be inserted in the following code so that it will print true when run? <br><br>(Choose 1 answer)",
    code: `List s1 = new ArrayList();
s1.add("ann");
s1.add("bella");
//INSERT CODE HERE
System.out.println(flag);`,
    answers: [
      { text: 'boolean flag = s1.contains("bella");', correct: true },
      { text: 'boolean flag = s1.indexOf("bella")>1;', correct: false },
      { text: 'boolean flag = s1.contains("bella") == 1;', correct: false },
      { text: "boolean flag = s1.length()>1;", correct: false },
    ],
    explanation:
      "The contains method checks if the list contains the specified element, returning true if it does.",
  },
  {
    question: "What will the following code print? <br><br>(Choose 1 answer)",
    code: `int x = 1;
int y = 2;
int z = x++;
int a = --y;
int b = z--;
b += ++z;
int answ = x > a ? y > b ? y: b: x > z ? x: z;
System.out.println(answ);`,
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "-1", correct: false },
      { text: "-2", correct: false },
      { text: "3", correct: false },
    ],
    explanation:
      "The code initializes several integer variables: x is set to 1, y to 2, and z is assigned the value of x++, resulting in z being 1 and x being incremented to 2. Next, a is assigned the value of --y, which decrements y to 1. <br><br>Then, b is assigned the value of z--, making b equal to 1 while z is decremented to 0. The code then increments z with b += ++z, resulting in b being updated to 2. <br><br>Finally, the ternary conditional expression checks if x (which is 2) is greater than a (which is 1). Since this condition is true, it evaluates y > b, which is false, leading to answ being assigned the value of b, which is 2. <br><br>Thus, when System.out.println(answ); is executed, it prints the value 2.",
  },
  {
    question:
      "Identify the correct statements about ArrayList. <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      {
        text: "Standard JDK provides no subclasses of ArrayList.",
        correct: true,
      },
      { text: "An ArrayList cannot store primitives.", correct: true },
      {
        text: "It allows constant time access to all its elements.",
        correct: true,
      },
      {
        text: "ArrayList cannot resize dynamically if you add more number of elements than its capacity.",
        correct: false,
      },
      { text: "An ArrayList is backed by an array.", correct: true },
      {
        text: "Elements can be inserted into an ArrayList at various positions using the assignment operator.",
        correct: false,
      },
    ],
    explanation:
      "ArrayList is backed by an array and allows constant time access. It cannot store primitives directly, and the JDK does not provide subclasses of ArrayList.",
  },
  {
    question:
      "Given a class named Test, which of these would be valid definitions for the constructors for the class? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "Test(Test b) { }", correct: true },
      { text: "Test Test( ) { }", correct: false },
      { text: "private final Test( ) { }", correct: false },
      { text: "void Test( ) { }", correct: false },
      { text: "public static void Test(String args[ ] ) { }", correct: false },
    ],
    explanation:
      "A constructor must have the same name as the class and cannot have a return type. 'Test(Test b) { }' is a valid constructor.",
  },
  {
    question: "What will the following code print? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  int x = 5;
  int getX() {
    return x;
  }
  public static void main(String args[]) throws Exception {
    TestClass tc = new TestClass();
    tc.looper();
    System.out.println(tc.x);
  }
  public void looper() {
    int x = 0;
    while ((x = getX()) != 0) {
      for (int m = 10; m >= 0; m--) {
        x = m;
      }
    }
  }
}`,
    answers: [
      { text: "It will not compile.", correct: false },
      { text: "It will throw an exception at runtime.", correct: false },
      { text: "It will print 0.", correct: false },
      { text: "It will print 5.", correct: true },
      { text: "None of these.", correct: false },
    ],
    explanation:
      "The looper method assigns 0 to the local variable 'x', but the instance variable 'x' remains 5. The program prints 5.",
  },
  {
    question:
      "What will the following lines of code print? <br><br>(Choose 1 answer)",
    code: `String s = "java";
s.replace('j', 'l');
s = s.substring(0, 2);
System.out.println(s);`,
    answers: [
      { text: "java", correct: false },
      { text: "lava", correct: false },
      { text: "la", correct: true },
      { text: "ja", correct: false },
      { text: "lav", correct: false },
    ],
    explanation:
      "The replace method does not modify the original string. The substring method extracts the first two characters, resulting in 'la'.",
  },
  {
    question:
      "What will be printed when the following code snippet is executed? <br><br>(Choose 1 answer)",
    code: `String str = "123456789";
String s = str.substring(2, 5);
System.out.println(s);`,
    answers: [
      { text: "23456", correct: false },
      { text: "345678", correct: false },
      { text: "45678", correct: false },
      { text: "2345", correct: false },
      { text: "3456", correct: true },
    ],
    explanation:
      "The substring method extracts characters from index 2 to 4 (inclusive), resulting in '345'.",
  },
  {
    question:
      "Following is not a valid comment: /* this comment /* // /** is not valid */ <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
    explanation:
      "The comment is not valid because it contains nested comment delimiters, which are not allowed in Java.",
  },
  {
    question:
      "What what will the following statement return? <br><br>(Choose 1 answer)",
    code: `"    hello java guru   ".trim();`,
    answers: [
      { text: "The line of code will not Compile.", correct: false },
      { text: '"hellojavaguru"', correct: false },
      { text: '"hello java guru"', correct: true },
      { text: '"hello java guru   "', correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The trim method removes leading and trailing spaces, resulting in 'hello java guru'.",
  },
  {
    question:
      "Given the following code, which method declarations can be inserted at line 1 without any problems? <br><br>(Choose 3 answers)",
    code: `public class OverloadTest {
  public int sum(int i1, int i2) {
    return i1 + i2;
  }
  // 1
}`,
    answers: [
      {
        text: "public int sum(int a, int b) { return a + b; }",
        correct: false,
      },
      {
        text: "public int sum(long i1, long i2) { return (int) i1; }",
        correct: true,
      },
      {
        text: "public int sum(int i1, long i2) { return (int) i2; }",
        correct: true,
      },
      {
        text: "public long sum(long i1, int i2) { return i1 + i2; }",
        correct: true,
      },
      {
        text: "public long sum(int i1, int i2) { return i1 + i2; }",
        correct: false,
      },
    ],
    explanation:
      "The methods with different parameter types are valid overloads. The method with the same parameter types is not a valid overload.",
  },
  {
    question: "Identify correct statements: <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      {
        text: "Java development environment requires an IDE to be installed before the JDK.",
        correct: false,
      },
      {
        text: "Java development environment is installed by default for all major operating systems.",
        correct: false,
      },
      {
        text: "Java development environment requires you to install the JRE first.",
        correct: false,
      },
      {
        text: "Java development environment is set up when you download an install the JDK for your platform.",
        correct: true,
      },
      {
        text: "Both JDK and JRE are required for setting up the Java development environment.",
        correct: false,
      },
    ],
    explanation:
      "The Java development environment is set up when you download and install the JDK, which includes the JRE.",
  },
  {
    question:
      "What will be the output of the following class... <br><br>(Choose 1 answer)",
    code: `class Test {
  public static void main(String[] args) {
    int j = 1;
    try {
      int i = doIt() / (j = 2);
    } catch(Exception e) {
      System.out.println(" j = " + j);
    }
  }
  public static int doIt() throws Exception {
    throw new Exception("FORGET IT");
  }
}`,
    answers: [
      { text: "It will print j = 1", correct: true },
      { text: "It will print j = 2", correct: false },
      { text: "The value of j cannot be determined.", correct: false },
      { text: "It will not compile.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The exception is thrown before the assignment 'j = 2' is executed, so 'j' remains 1.",
  },
  {
    question: "Which of the following is illegal? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "char c = 320;", correct: false },
      { text: "float f = 320;", correct: false },
      { text: "double d = 320;", correct: false },
      { text: "byte b = 320;", correct: true },
      { text: "None of the above is illegal.", correct: false },
    ],
    explanation:
      "The value 320 is out of range for a byte, which can only hold values from -128 to 127.",
  },
  {
    question:
      "What will the following program print? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static void main(String[] args) {
    for: for (int i = 0; i < 10; i++) {
      for (int j = 0; j < 10; j++) {
        if (i + j > 10) break
        for;
      }
      System.out.println("hello");
    }
  }
}`,
    answers: [
      { text: 'It will print "hello" 6 times.', correct: false },
      { text: "It will not compile.", correct: false },
      { text: 'It will print "hello" 2 times.', correct: false },
      { text: 'It will print "hello" 5 times.', correct: true },
      { text: 'It will print "hello" 4 times.', correct: false },
    ],
    explanation:
      "The outer loop breaks when i + j > 10, which occurs after 5 iterations of the outer loop.",
  },
  {
    question:
      "What would be the result of attempting to compile and run the following program? <br><br>(Choose 1 answer)",
    code: `class TestClass {
  static TestClass ref;
  String[] arguments;
  public static void main(String args[]) {
    ref = new TestClass();
    ref.func(args);
  }
  public void func(String[] args) {
    ref.arguments = args;
  }
}`,
    answers: [
      {
        text: "The program will fail to compile, since the static method main is trying to call the non-static method func.",
        correct: false,
      },
      {
        text: "The program will fail to compile, since the non-static method func cannot access the static member variable ref.",
        correct: false,
      },
      {
        text: "The program will fail to compile, since the argument args passed to the static method main cannot be passed on to the non-static method func.",
        correct: false,
      },
      {
        text: "The program will fail to compile, since method func is trying to assign to the non-static member variable 'arguments' through the static member variable ref.",
        correct: false,
      },
      { text: "The program will compile and run successfully.", correct: true },
    ],
    explanation:
      "The program will compile and run successfully. The static method main can call non-static methods through an instance of the class.",
  },
  {
    question:
      "Which of the following statements about an array are correct? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "An array can dynamically grow in size.", correct: false },
      {
        text: "Arrays can be created only for primitive types.",
        correct: false,
      },
      {
        text: "Every array has a built in property named 'size' which tells you the number of elements in the array.",
        correct: false,
      },
      {
        text: "Every array has an implicit method named 'length' which tells you the number of elements in the array.",
        correct: false,
      },
      {
        text: "Element indexing for arrays as well as for Lists starts at 0.",
        correct: true,
      },
    ],
    explanation:
      "Element indexing for arrays and Lists starts at 0. Arrays have a 'length' property, not a method, and can hold both primitive and object types.",
  },
  {
    question:
      "Which class definition uses the naming conventions of Java Programming? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      {
        text: "class coursemanagement{ String course_ID; final int PASSING_MARKS = 50; public void enrollStudents(){ } }",
        correct: false,
      },
      {
        text: "class CourseManagement{ String courseID; final int PASSING_MARKS = 50; public void EnrollStudents(){ } }",
        correct: false,
      },
      {
        text: "class CourseManagement{ String str_course_id; final int INT_PASSING_MARKS = 50; public void EnrollStudents(){ } }",
        correct: false,
      },
      {
        text: "class CourseManagement{ String courseID; final int CONST_PASSING_MARKS = 50; public void enrollStudents(){ } }",
        correct: true,
      },
      {
        text: "class CourseManagement{ String courseId; final int PASSING_MARKS = 50; public void enrollStudents(){ } }",
        correct: false,
      },
      {
        text: "class courseManagement{ String courseId; final int PASSING_MARKS = 50; public void enrollStudents(){ } }",
        correct: false,
      },
    ],
    explanation:
      "The class 'CourseManagement' with 'courseID' and 'CONST_PASSING_MARKS' follows Java naming conventions for classes, variables, and constants.",
  },
  {
    question:
      "What will the following method return if called with an argument of 7? <br><br>(Choose 1 answer)",
    code: `public int transformNumber(int n) {
  int radix = 2;
  int output = 0;
  output += radix * n;
  radix = output / radix;
  if (output < 14) {
    return output;
  } else {
    output = output * radix / 2;
    return output;
  } else {
    return output / 2;
  }
}`,
    answers: [
      { text: "7", correct: false },
      { text: "14", correct: false },
      { text: "49", correct: false },
      { text: "Compilation fails.", correct: true },
    ],
    explanation:
      "The method contains unreachable code due to the second 'else' block, causing a compilation error.",
  },
  {
    question:
      "How many times will the line marked //1 be called in the following code? <br><br>(Choose 1 answer)",
    code: `int x = 10;
do {
  x--;
  System.out.println(x); // 1
} while ( x < 10 );`,
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "9", correct: false },
      { text: "10", correct: false },
      { text: "None of these.", correct: true },
    ],
    explanation:
      "Initially, the variable x is set to 10. The do loop executes its body at least once, which decrements x from 10 to 9 and prints this value. The loop then checks the condition x < 10. Since 9 is less than 10, the condition is true, and the loop continues.<br><br>This process repeats, with x being decremented further and printed each time. As a result, x will continue to decrease indefinitely, printing values down to negative infinity. The loop never exits because the condition x < 10 will always remain true. <br><br>Therefore, the line marked //1 will be called an infinite number of times.",
  },
  {
    question:
      "Which of the following implementations of a max() method will correctly return the largest value? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      {
        text: "int max(int x, int y) { return( if(x > y){ x; } else{ y; } ); }",
        correct: false,
      },
      {
        text: "int max(int x, int y) { return( if(x > y){ return x; }  else{ return y; } ); }",
        correct: false,
      },
      {
        text: "int max(int x, int y) { switch(x < y) { case true: return y; default : return x; }; }",
        correct: false,
      },
      {
        text: "int max(int x, int y) { if (x > y)  return x; return y; }",
        correct: true,
      },
    ],
    explanation:
      "The correct implementation uses an if statement to compare x and y, returning the larger value.",
  },
  {
    question:
      "What will the following program print? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  static String str;
  public static void main(String[] args) {
    System.out.println(str);
  }
}`,
    answers: [
      { text: "It will not compile.", correct: false },
      {
        text: "It will compile but throw an exception at runtime.",
        correct: false,
      },
      { text: "It will print 'null'", correct: true },
      { text: "It will print nothing.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The static variable 'str' is initialized to null by default, so the program prints 'null'.",
  },
  {
    question:
      "Consider the following code: How many times will the output contain 2? <br><br>(Choose 1 answer)",
    code: `String[] dataList = { "x", "y", "z" };
for (String dataElement: dataList) {
  int innerCounter = 0;
  while (innerCounter < dataList.length) {
    System.out.println(dataElement + ", " + innerCounter);
    innerCounter++;
  }
}`,
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "4", correct: false },
    ],
    explanation:
      "The inner loop runs 3 times for each element in dataList, printing '2' once per element, resulting in 3 occurrences.",
  },
  {
    question:
      "What will the following program print? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static void main(String[] args) {
    Object obj1 = new Object();
    Object obj2 = obj1;
    if (obj1.equals(obj2)) System.out.println("true");
    else System.out.println("false");
  }
}`,
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "It will not compile.", correct: false },
      {
        text: "It will compile but throw an exception at run time.",
        correct: false,
      },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The equals method returns true because obj1 and obj2 refer to the same object.",
  },
  {
    question:
      "Using a break in a while loop causes the loop to break the current iteration and start the next iteration of the loop. <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
    explanation:
      "Using a break statement in a loop causes the loop to terminate immediately, not start the next iteration.",
  },
  {
    question:
      "Which of the following statements will correctly create and initialize an array of Strings to non null elements? <br><br>(Choose 4 answers)",
    code: ``,
    answers: [
      { text: 'String[] sA = new String[1] { "aaa"};', correct: false },
      { text: 'String[] sA = new String[] { "aaa"};', correct: true },
      { text: 'String[] sA = new String[1] ; sA[0] = "aaa";', correct: true },
      { text: 'String[] sA = {new String( "aaa")};', correct: true },
      { text: 'String[] sA = { "aaa"};', correct: true },
    ],
    explanation:
      "The correct statements create and initialize an array of Strings with non-null elements.",
  },
  {
    question:
      "What will be the output of the following program? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static void main(String[] args) throws Exception {
    try {
      amethod();
      System.out.println("try");
    } catch(Exception e) {
      System.out.println("catch");
    } finally {
      System.out.println("finally");
    }
    System.out.println("out");
  }
  public static void amethod() {}
}`,
    answers: [
      { text: "try finally", correct: false },
      { text: "try finally out", correct: true },
      { text: "try out", correct: false },
      { text: "catch finally out", correct: false },
      {
        text: "It will not compile because amethod() does not throw any exception.",
        correct: false,
      },
    ],
    explanation:
      "The try block executes without exceptions, so 'try' is printed. The finally block executes, printing 'finally', followed by 'out'.",
  },
  {
    question:
      "Which of the following code snippets will print exactly 10? <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      {
        text: "Object t = new Integer(106); int k = ((Integer) t).intValue()/10; System.out.println(k);",
        correct: true,
      },
      { text: "System.out.println(100/9.9);", correct: false },
      { text: "System.out.println(100/10.0);", correct: false },
      { text: "System.out.println(100/10);", correct: true },
      { text: "System.out.println(3 + 100/10*2-13);", correct: true },
    ],
    explanation:
      "The first, fourth, and fifth snippets evaluate to 10. The second and third snippets result in floating-point division.",
  },
  {
    question:
      "What is the result of compiling and running the following program? <br><br>(Choose 1 answer)",
    code: `public class Learner {
  public static void main(String[] args) {
    String[] dataArr = new String[4];
    dataArr[1] = "Bill";
    dataArr[2] = "Steve";
    dataArr[3] = "Larry";
    try {
      for (String data: dataArr) {
        System.out.print(data + " ");
      }
    } catch(Exception e) {
      System.out.println(e.getClass());
    }
  }
}`,
    answers: [
      { text: "Bill Steve Larry null", correct: false },
      {
        text: "Bill Steve Larry class java.lang.NullPointerException",
        correct: false,
      },
      { text: "class java.lang.Exception Bill Steve Larry", correct: false },
      { text: "Bill Steve Larry class java.lang.Exception", correct: false },
      { text: "null Bill Steve Larry", correct: true },
    ],
    explanation: `An array called dataArr is initialized with a size of four, where all elements are initially set to null. The code assigns "Bill" to dataArr[1], "Steve" to dataArr[2], and "Larry" to dataArr[3], while dataArr[0] remains null.<br><br>As the for-each loop iterates over the array, it prints each element in order. The first element prints null, followed by "Bill", "Steve", and "Larry". Since there are no exceptions, the catch block is never executed, resulting in the output being a single line with each value separated by a space.`,
  },
  {
    question:
      "Given the following code: How many object references are being created? <br><br>(Choose 1 answer)",
    code: `class References {
  String s1;
  String s2 = null;
  Integer i1 = new Integer();
  int i2;
  File f;
  Object b = f;
}`,
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "None of the above", correct: true },
    ],
    explanation:
      "The code contains syntax errors, as Integer and File constructors require arguments. The correct number of references cannot be determined.",
  },
  {
    question:
      "What will the following code snippet print when run? <br><br>(Choose 1 answer)",
    code: `String str = "asdfasdf";
char ch = str.charAt(3);
if (ch == 'a') str = str.replace('a', 'x');
else if (ch == 'f') str = str.replace('s', 'x');
System.out.println(str);`,
    answers: [
      { text: "asdfasdf", correct: false },
      { text: "axdfaxdf", correct: true },
      { text: "axdfasdf", correct: false },
      { text: "xsdfxsdf", correct: false },
      { text: "xsdfasdf", correct: false },
    ],
    explanation:
      "The character at index 3 is 'f', so the else-if block executes, replacing all occurrences of 's' with 'x', resulting in 'axdfaxdf'.",
  },
  {
    question:
      "What will the following code print when compiled and run? <br><br>(Choose 1 answer)",
    code: `import java.util. * ;
public class TestClass {
  public static void main(String[] args) throws Exception {
    List list = new ArrayList();
    list.add("val1"); //1
    list.add(2, "val2"); //2
    list.add(1, "val3"); //3
    System.out.println(list);
  }
}`,
    answers: [
      { text: "It will not compile.", correct: false },
      {
        text: "It will throw an exception at run time because of line //1",
        correct: false,
      },
      {
        text: "It will throw an exception at run time because of line //2",
        correct: true,
      },
      {
        text: "It will throw an exception at run time because of line //3",
        correct: false,
      },
      { text: "null", correct: false },
    ],
    explanation:
      "The add method at line //2 attempts to insert at index 2, which is out of bounds, causing an IndexOutOfBoundsException.",
  },
  {
    question:
      "Consider the following program: What will the value of 'harry' if the program is run from the command line: java TestClass 111 222 333? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static void main(String[] args) {
    String tom = args[0];
    String dick = args[1];
    String harry = args[2];
  }
}`,
    answers: [
      { text: "111", correct: false },
      { text: "222", correct: false },
      { text: "333", correct: true },
      {
        text: "It will throw an ArrayIndexOutOfBoundsException",
        correct: false,
      },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The command line arguments are assigned to the variables in order, so 'harry' is assigned the value '333'.",
  },
  {
    question:
      "Given the complete contents of TestClass.java file: Which import statement should be added to make it compile? <br><br>(Choose 1 answer)",
    code: `package x;
public class TestClass {
  ArrayList < String > al;
  public void init() {
    al = new ArrayList < >();
    al.add("Name 1");
    al.add("Name 2");
  }
  public static void main(String[] args) throws Exception {
    TestClass tc = new TestClass();
    tc.init();
    System.out.println("Size = " + tc.al.size());
  }
}`,
    answers: [
      { text: "import java.lang.*;", correct: false },
      { text: "import java.lang.ArrayList;", correct: false },
      { text: "import java.util.ArrayList;", correct: true },
      { text: "import java.collections.ArrayList;", correct: false },
      { text: "No import is necessary.", correct: false },
    ],
    explanation:
      "The ArrayList class is part of the java.util package, so 'import java.util.ArrayList;' is required.",
  },
  {
    question:
      "Which of the following are benefits of ArrayList over an array? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      {
        text: "You do not have to worry about the size of the ArrayList while appending elements.",
        correct: true,
      },
      { text: "It consumes less memory space.", correct: false },
      { text: "You do not have to worry about thread safety.", correct: false },
      { text: "It allows you to write type safe code.", correct: false },
    ],
    explanation:
      "ArrayLists can dynamically resize, so you do not have to worry about the size while appending elements.",
  },
  {
    question:
      "Which of the following expressions will evaluate to true if preceded by the following code? <br><br>(Choose 3 answers)",
    code: `String a = "java";
char[] b = {
  'j',
  'a',
  'v',
  'a'
};
String c = new String(b);
String d = a;`,
    answers: [
      { text: "(a == d)", correct: true },
      { text: "(b == d)", correct: false },
      { text: '(a == "java")', correct: true },
      { text: "a.equals(c)", correct: true },
    ],
    explanation:
      "The expressions '(a == d)', '(a == \"java\")', and 'a.equals(c)' evaluate to true because 'a' and 'd' refer to the same string, and 'c' is a new string with the same content.",
  },
  {
    question:
      "Given that java.lang.Integer class has a public static field named MAX_VALUE, which of the given options should be inserted at line 1 so that the following code can compile without any errors? <br><br>(Choose 2 answers)",
    code: `package objective1;
// 1
public class StaticImports {
  public StaticImports() {
    out.println(MAX_VALUE);
  }
}`,
    answers: [
      { text: "import static java.lang.Integer.*;", correct: true },
      { text: "static import java.lang.System.out;", correct: false },
      { text: "static import Integer.MAX_VALUE;", correct: false },
      { text: "import static java.lang.System.*;", correct: true },
      { text: "static import java.lang.System.*;", correct: false },
    ],
    explanation:
      "The correct imports are 'import static java.lang.Integer.*;' for MAX_VALUE and 'import static java.lang.System.*;' for out.",
  },
  {
    question:
      'Which of the following are true about the "default" constructor? <br><br>(Choose 2 answers)',
    code: ``,
    answers: [
      {
        text: "It is provided by the compiler only if the class does not define any constructor.",
        correct: true,
      },
      {
        text: "It initializes the instance members of the class.",
        correct: false,
      },
      {
        text: "It calls the default 'no-args' constructor of the super class.",
        correct: true,
      },
      {
        text: "It initializes instance as well as class fields of the class.",
        correct: false,
      },
      {
        text: "It is provided by the compiler if the class does not define a 'no- args' constructor.",
        correct: false,
      },
    ],
    explanation:
      "The default constructor is provided by the compiler if no constructors are defined and calls the no-args constructor of the superclass.",
  },
  {
    question:
      "Which of the following are true about Java? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "It provides automatic exception handling.", correct: false },
      { text: "It provides automatic memory management.", correct: true },
      { text: "It provides database connectivity.", correct: false },
      {
        text: "Java source code is converted to binary code using an interpreter.",
        correct: false,
      },
    ],
    explanation:
      "Java provides automatic memory management through garbage collection. It does not provide automatic exception handling or database connectivity.",
  },
  {
    question:
      "What will be the output of the following program (excluding the quotes)? <br><br>(Choose 1 answer)",
    code: `public class SubstringTest {
  public static void main(String args[]) {
    String String = "string isa string";
    System.out.println(String.substring(3, 6));
  }
}`,
    answers: [
      { text: "It will not compile.", correct: false },
      { text: '"ing is"', correct: false },
      { text: '"ing isa"', correct: false },
      { text: '"ing " (There is a space after g)', correct: true },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The substring method extracts characters from index 3 to 5 (inclusive), resulting in 'ing '.",
  },
  {
    question: "What will the following code print? <br><br>(Choose 1 answer)",
    code: `void crazyLoop() {
  int c = 0;
  JACK: while (c < 8) {
    JILL: System.out.println(c);
    if (c > 3) break JILL;
    else c++;
  }
}`,
    answers: [
      { text: "It will not compile.", correct: true },
      { text: "It'll throw an exception at runtime.", correct: false },
      { text: "It will print numbers from 0 to 8", correct: false },
      { text: "It will print numbers from 0 to 3", correct: false },
      { text: "It will print numbers from 0 to 4", correct: false },
    ],
    explanation:
      "The code will not compile because the break statement cannot target a label that is not a loop or switch statement.",
  },
  {
    question:
      "Which of the following are valid class declarations? (Not the whole class, just the declaration). <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "public class Hello", correct: true },
      { text: "private class Hello", correct: false },
      { text: "class Hello implements Listener", correct: true },
      { text: "class Hello throws Exception", correct: false },
    ],
    explanation:
      "The declarations 'public class Hello' and 'class Hello implements Listener' are valid. A class cannot be private, and 'throws' is not used in class declarations.",
  },
  {
    question:
      "What will the following program print? <br><br>(Choose 1 answer)",
    code: `class Test {
  public static void main(String args[]) {
    int
    var = 20,
    i = 0;
    do {
      while (true) {
        if (i++>
        var) break;
      }
    } while ( i < var --);
    System.out.println(var);
  }
}
`,
    answers: [
      { text: "19", correct: false },
      { text: "20", correct: false },
      { text: "21", correct: false },
      { text: "22", correct: true },
      { text: "It'll enter an infinite loop.", correct: false },
    ],
    explanation:
      "The inner loop increments 'i' until it exceeds 'var', breaking the loop. The outer loop decrements 'var' until 'i' is no longer less than 'var'.",
  },
  {
    question:
      "What will the following code print when run? <br><br>(Choose 1 answer)",
    code: `public class Mambo {
  public static void main(String args[]) {
    for (int i = 0; i < 5; i++) {
      if (i == 2) continue;
    }
    System.out.println(i);
  }
}`,
    answers: [
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: false },
      { text: "It will not compile.", correct: true },
    ],
    explanation:
      "The variable 'i' is declared inside the for loop, so it is not accessible outside the loop, causing a compilation error.",
  },
  {
    question:
      "Which integral types in Java have a range of 2^16 integers? OR Which integral types in Java can represent exactly 2^16 distinct integers? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "char", correct: true },
      { text: "int", correct: false },
      { text: "long", correct: false },
      { text: "short", correct: true },
    ],
    explanation:
      "The char and short types in Java have a range of 2^16 integers. char is unsigned, and short is signed.",
  },
  {
    question:
      "The options below contain the complete contents of a file. Which of these options can be run with the following command line once compiled? java main <br><br>(Choose 1 answer)",
    code: `//in file main.java
class main {
  public void main(String[] args) {
    System.out.println("hello");
  }
}
//in file main.java
public static void main(String[] args) {
  System.out.println("hello");
}
//in file main.java
public class anotherone {}
class main {
  public static void main(String[] args) {
    System.out.println("hello");
  }
}
//in file main.java
class anothermain {
  public static void main(String[] args) {
    System.out.println("hello2");
  }
}
class main {
  public final static void main(String[] args) {
    System.out.println("hello");
  }
}
`,
    answers: [
      { text: "Option 1", correct: false },
      { text: "Option 2", correct: false },
      { text: "Option 3", correct: false },
      { text: "Option 4", correct: true },
    ],
    explanation:
      "Option 4 contains a class named 'main' with a valid main method, allowing it to be run with the command 'java main'.",
  },
  {
    question:
      "Which of the following are features of Java? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "It is strongly typed", correct: true },
      { text: "It offers direct memory management.", correct: false },
      { text: "It allows multithreaded programming.", correct: true },
      { text: "It is a distributed language.", correct: false },
    ],
    explanation:
      "Java is strongly typed and supports multithreaded programming. It does not offer direct memory management or inherently support distributed programming.",
  },
  {
    question:
      'Which of the following are correct about "encapsulation"? <br><br>(Choose 2 answers)',
    code: ``,
    answers: [
      { text: "Encapsulation is same as polymorphism.", correct: false },
      {
        text: "It helps make sure that clients have no accidental dependence on the choice of representation",
        correct: true,
      },
      {
        text: "It helps avoiding name clashes as internal variables are not visible outside.",
        correct: true,
      },
      {
        text: "Encapsulation makes sure that messages are sent to the right object at run time.",
        correct: false,
      },
      {
        text: "Encapsulation helps you inherit the properties of another class.",
        correct: false,
      },
    ],
    explanation:
      "Encapsulation helps hide the internal representation of an object and prevents name clashes by making internal variables private.",
  },
  {
    question:
      "You have been given a library that contains the following class: What should be inserted at //1 above? <br><br>(Choose 2 answers)",
    code: `// 1 insert code here
public class Furnace {
  public void cool(Cooler c) { // 2
    c.doCool();
  }
}`,
    answers: [
      { text: "package com.cool;", correct: false },
      { text: "import package com.cool;", correct: false },
      { text: "import com.cool.*;", correct: true },
      { text: "import com.cool;", correct: false },
      { text: "class com.cool.Cooler;", correct: false },
      { text: "import com.cool.Cooler;", correct: true },
    ],
    explanation:
      "The correct imports are 'import com.cool.*;' or 'import com.cool.Cooler;' to access the Cooler class.",
  },
  {
    question:
      "What will be printed when the following code snippet is executed? <br><br>(Choose 1 answer)",
    code: `String str = "123456789";
str.substring(2, 5);
System.out.println(str.charAt(2));
`,
    answers: [
      { text: "3", correct: true },
      { text: "4", correct: false },
      { text: "5", correct: false },
      { text: "This will not compile.", correct: false },
    ],
    explanation:
      "The charAt method returns the character at index 2, which is '3'. The substring method does not modify the original string.",
  },
  {
    question:
      "What will the following code print when run without any arguments? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static int m1(int i) {
    return++i;
  }
  public static void main(String[] args) {
    int k = m1(args.length);
    k += 3 + ++k;
    System.out.println(k);
  }
}
`,
    answers: [
      { text: "It will throw ArrayIndexOutOfBoundsException.", correct: false },
      { text: "It will throw NullPointerException.", correct: false },
      { text: "6", correct: true },
      { text: "5", correct: false },
      { text: "7", correct: false },
      { text: "2", correct: false },
      { text: "None of these.", correct: false },
    ],
    explanation:
      "The args.length is 0, so m1 returns 1. The expression 'k += 3 + ++k' evaluates to 6.",
  },
  {
    question:
      "What can be inserted in the above code at the specified location without causing compilation error? <br><br>(Choose 1 answer)",
    code: `class Account {
  //insert code here
}
`,
    answers: [
      { text: "{ private String id; }", correct: false },
      { text: 'while(true) { System.out.println("true"); }', correct: false },
      { text: "package org.acme;", correct: false },
      { text: 'private String id = "hello";', correct: true },
      { text: "void print() { System.out.println(id); }", correct: false },
    ],
    explanation:
      "The correct insertion is 'private String id = \"hello\";', which is a valid field declaration.",
  },
  {
    question:
      "Given the code fragment: What is the result? <br><br>(Choose 1 answer)",
    code: `int[] balances1 = new int[] {
  10,
  20
};
int[] balances2 = balances1;
balances1 = new int[] {
  100
};
System.out.print(balances1 == balances2);`,
    answers: [
      { text: "true", correct: false },
      { text: "false", correct: true },
      { text: "compilation failure", correct: false },
      { text: "exception at run time", correct: false },
    ],
    explanation:
      "The assignment 'balances1 = new int[]{ 100 };' creates a new array, so balances1 and balances2 refer to different arrays, resulting in false.",
  },
  {
    question:
      "Consider the following method, which is called with an argument of 7: What will it print? <br><br>(Choose 1 answer)",
    code: `public void method1(int i) {
  int j = (i * 30 - 2) / 100;
  POINT1: for (; j < 10; j++) {
    boolean flag = false;
    while (!flag) {
      if (Math.random() > 0.5) break POINT1;
    }
  }
  while (j > 0) {
    System.out.println(j--);
    if (j == 4) break POINT1;
  }
}
`,
    answers: [
      { text: "It will print 1 and 2", correct: false },
      {
        text: "It will print 1 to N where N is a random number.",
        correct: true,
      },
      { text: "It will not compile.", correct: false },
      { text: "It will throw an exception at runtime.", correct: false },
    ],
    explanation:
      "The loop prints numbers from j to 1, where j is a random number determined by the break statement.",
  },
  {
    question:
      "Which of the following options are valid when inserted independently at the line marked //1? <br><br>(Choose 3 answers)",
    code: `String s1 = "Hello";
String s2 = "World";
//1

`,
    answers: [
      { text: "s1 += s2;", correct: true },
      { text: "s1 -= s2;", correct: false },
      { text: "System.out.println( s1 = s2 );", correct: true },
      { text: "System.out.println( s1 == s2);", correct: true },
    ],
    explanation:
      "The expressions 's1 += s2;', 'System.out.println( s1 = s2 );', and 'System.out.println( s1 == s2);' are valid. The '-=' operator is not valid for strings.",
  },
  {
    question:
      "What will be the result of attempting to compile the following program? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  long l1;
  public void TestClass(long pLong) {
    l1 = pLong;
  } //1
  public static void main(String args[]) {
    TestClass a,
    b;
    a = new TestClass(); //2
    b = new TestClass(5); //3
  }
}
`,
    answers: [
      {
        text: "A compilation error will be encountered at //1, since constructors should not specify a return value.",
        correct: true,
      },
      {
        text: "A compilation error will be encountered at //2, since the class does not have a default constructor.",
        correct: false,
      },
      {
        text: "A compilation error will be encountered at //3.",
        correct: false,
      },
      { text: "The program will compile correctly.", correct: false },
      {
        text: "It will not compile because parameter type of the constructor is different than the type of value passed to it.",
        correct: false,
      },
    ],
    explanation:
      "The method 'public void TestClass(long pLong)' is not a constructor because it has a return type. Constructors should not specify a return value.",
  },
  {
    question:
      "Which of the following are reserved words in Java? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "goto", correct: true },
      { text: "package", correct: true },
      { text: "export", correct: false },
      { text: "array", correct: false },
      { text: "hash", correct: false },
    ],
    explanation:
      "'goto' and 'package' are reserved words in Java. 'goto' is reserved but not used.",
  },
  {
    question:
      "What is the result of the following code? <br><br>(Choose 1 answer)",
    code: `public class Test {
  public static void main(String[] args) {
    System.out.println(10 + 20 + "Java");
  }
}`,
    answers: [
      { text: "A) Java1020", correct: false },
      { text: "B) Java30", correct: false },
      { text: "C) 30Java", correct: true },
      { text: "D) 1020Java", correct: false },
    ],
    explanation:
      "The code concatenates the numbers 10 and 20, resulting in 30, and then appends 'Java' to the end, resulting in '30Java'.",
  },
  {
    question:
      "What is the result of the following code snippet? <br><br>(Choose 1 answer)",
    code: `public class Test {
  public static void main(String[] args) {
    int x = 5;
    System.out.println(++x);
  }
}`,
    answers: [
      { text: "4", correct: false },
      { text: "5", correct: false },
      { text: "6", correct: true },
      { text: "7", correct: false },
    ],
    explanation:
      "The code uses the prefix increment operator (++x), which increments the value of x by one before printing it, resulting in 6.",
  },
  {
    question:
      "What is the result of the following code snippet? <br><br>(Choose 1 answer)",
    code: `public class Test {
  public static void main(String[] args) {
    int x = 10;
    int y = 20;
    System.out.println(x + y + "Java");
  }
}`,
    answers: [
      { text: "A) Interface A", correct: true },
      { text: "A) Interface B", correct: false },
      { text: "C) Compilation error due to ambiguity", correct: false },
      { text: "D) Compilation error due to super keyword", correct: false },
    ],
    explanation:
      "The code uses the super keyword to call the print method from the parent class, resulting in 'Interface A'.",
  },
  {
    question:
      "What will be the output of the following program? <br><br>(Choose 3 answers)",
    code: `public class TestClass {
  public static void main(String args[]) {
    try {
      m1();
    } catch(IndexOutOfBoundsException e) {
      System.out.println("1");
      throw new NullPointerException();
    } catch(NullPointerException e) {
      System.out.println("2");
      return;
    } catch(Exception e) {
      System.out.println("3");
    } finally {
      System.out.println("4");
    }
    System.out.println("END");
  }
  static void m1() {
    System.out.println("m1 Starts");
    throw new IndexOutOfBoundsException("Big Bang");
  }
}`,
    answers: [
      { text: "The program will print 'm1 Starts'.", correct: true },
      {
        text: "The program will print 'm1 Starts', 1 and 4, in that order.",
        correct: false,
      },
      {
        text: "The program will print 'm1 Starts', 1, 2 in that order.",
        correct: false,
      },
      {
        text: "The program will print 'm1 Starts', 1, 2 and 4 in that order.",
        correct: true,
      },
      { text: "'END' will not be printed.", correct: true },
    ],
    explanation:
      "The program first prints 'm1 Starts' when the m1 method is invoked. Then, it throws an IndexOutOfBoundsException, which is caught by the first catch block that prints '1'. Then, the catch block throws a NullPointerException, which is caught by the second catch block that prints '2' and exits the try-catch block due to the return statement. The finally block is executed, printing '4'. Since the return statement in the second catch block terminates the execution, 'END' is not printed.",
  },
  {
    question:
      "What will be the result of compiling and running the following program? <br><br>(Choose 1 answer)",
    code: `class SomeClass {
  public static void main(String args[]) {
    int size = 10;
    int[] arr = new int[size];
    for (int i = 0; i < size; ++i) System.out.println(arr[i]);
  }
}`,
    answers: [
      {
        text: "The code will fail to compile, because the int[] array declaration is incorrect.",
        correct: false,
      },
      {
        text: "The program will compile, but will throw an IndexArrayOutOfBoundsException when run.",
        correct: false,
      },
      {
        text: "The program will compile and run without error, and will print nothing.",
        correct: false,
      },
      {
        text: "The program will compile and run without error and will print null ten times.",
        correct: false,
      },
      {
        text: "The program will compile and run without error and will print '0' ten times.",
        correct: true,
      },
    ],
    explanation:
      "The array is correctly initialized with a size of 10, and all elements of an int array are automatically initialized to 0. Therefore, the program will compile and run without error, printing '0' ten times, corresponding to each element of the array.",
  },
  {
    question:
      "Given the following program, which of these statements are true? <br><br>(Choose 2 answers)",
    code: `public class FinallyTest {
  public static void main(String args[]) {
    try {
      if (args.length == 0) return;
      else throw new Exception("Some Exception");
    }
    catch(Exception e) {
      System.out.println("Exception in Main");
    }
    finally {
      System.out.println("The end");
    }
  }
}`,
    answers: [
      {
        text: "If run with no arguments, the program will only print The end.",
        correct: true,
      },
      {
        text: "If run with one argument, the program will only print The end.",
        correct: false,
      },
      {
        text: "If run with one argument, the program will print Exception in Main and The end.",
        correct: true,
      },
      {
        text: "If run with one argument, the program will only print Exception in Main.",
        correct: false,
      },
      { text: "Only one of the above is correct.", correct: false },
    ],
    explanation:
      "When run with no arguments, the try block exits early due to the return statement, but the finally block is still executed, so only 'The end' is printed. When run with one argument, an exception is thrown, the catch block prints 'Exception in Main', and the finally block prints 'The end'.",
  },
  {
    question:
      "You have an array of objects and you want to search for a particular object in that array. Which of the following Java statements will you need to use? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "Conditional", correct: true },
      { text: "Iterative/loop", correct: true },
      { text: "Instantiation", correct: false },
      { text: "Assignment", correct: false },
    ],
    explanation:
      "To search for an object in an array, you would need a loop (Iterative/loop) to traverse the array, and a conditional statement (Conditional) to check whether each element matches the object you're looking for. Instantiation and Assignment are not required for searching in an existing array.",
  },
  {
    question:
      "What may be done to the above code to make it print 100? <br><br>(Choose 1 answer)",
    code: `class Node {
  static final int TYPE = 100;
  public static void print() {
    System.out.println(TYPE); //1    
  }
}

public class Test {
  public static void main(String[] args) {
    //INSERT CODE HERE //2
  }
}`,
    answers: [
      {
        text: "Change the statement at //1 to System.out.println(None.TYPE);",
        correct: false,
      },
      { text: "insert Node.print(); at //2", correct: true },
      { text: "insert new Node().print(); at //2", correct: false },
      { text: "insert new Node.print(); at //2", correct: false },
      { text: "insert Node().print(); at //2", correct: false },
      { text: "insert print(); at //2.", correct: false },
    ],
    explanation:
      "The correct way to call a static method in Java is by using the class name. Therefore, inserting Node.print(); at //2 will successfully call the static print() method, which will print the value of the static final variable TYPE (100).",
  },
  {
    question:
      "Identify the valid for loop constructs assuming the following declarations: Object o = null; ArrayList c = //valid ArrayList object. int[] ia = //valid array. <br><br>(Choose 2 answers)",
    code: `Object o = null;
ArrayList c = //valid ArrayList object;
int[] ia = //valid array;`,
    answers: [
      { text: "for(o : c){ }", correct: false },
      { text: "for(final Object o2 : c){ }", correct: true },
      { text: "for(int i : ia) { }", correct: true },
      { text: "for(Iterator it : c.iterator()){ }", correct: false },
      {
        text: "for(int i = 1; i<=ia.length; i++){ System.out.println(ia[i]); }",
        correct: false,
      },
    ],
    explanation:
      "The enhanced for loop (for-each) syntax requires a type declaration, so 'for(o : c)' is invalid. 'for(final Object o2 : c)' is valid, as is 'for(int i : ia)' for iterating over arrays. 'for(Iterator it : c.iterator())' is invalid because it's missing the proper syntax for an enhanced for loop. The last option has an off-by-one error in the array indexing.",
  },
  {
    question: "What will the following code print? <br><br>(Choose 1 answer)",
    code: `List s1 = new ArrayList();
s1.add("a");
s1.add("b");
s1.add("c");
s1.add("a");
if (s1.remove("a")) {
  if (s1.remove("a")) {
    s1.remove("b");
  } else {
    s1.remove("c");
  }
}
System.out.println(s1);`,
    answers: [
      { text: "[b]", correct: false },
      { text: "[c]", correct: true },
      { text: "[b, c, a]", correct: false },
      { text: "[a, b, c, a]", correct: false },
      { text: "Exception at runtime", correct: false },
    ],
    explanation:
      "The first call to s1.remove(\"a\") removes the first occurrence of 'a'. The second call to s1.remove(\"a\") fails because no 'a' is left, leading the else block to remove 'c'. The final list contains only '[c]'.",
  },
  {
    question:
      "What will be the output of the following program? <br><br>(Choose 3 answers)",
    code: `public class TestClass {
  public static void main(String args[]) {
    try {
      m1();
    } catch(IndexOutOfBoundsException e) {
      System.out.println("1");
      throw new NullPointerException();
    } catch(NullPointerException e) {
      System.out.println("2");
      return;
    } catch(Exception e) {
      System.out.println("3");
    } finally {
      System.out.println("4");
    }
    System.out.println("END");
  }
  static void m1() {
    System.out.println("m1 Starts");
    throw new IndexOutOfBoundsException("Big Bang");
  }
}`,
    answers: [
      { text: "The program will print 'm1 Starts'.", correct: true },
      {
        text: "The program will print 'm1 Starts', 1 and 4, in that order.",
        correct: false,
      },
      {
        text: "The program will print 'm1 Starts', 1, 2 in that order.",
        correct: false,
      },
      {
        text: "The program will print 'm1 Starts', 1, 2 and 4 in that order.",
        correct: true,
      },
      { text: "'END' will not be printed.", correct: true },
    ],
    explanation:
      "The program will print 'm1 Starts' when m1() is called. It will then catch the IndexOutOfBoundsException, print '1', and throw a NullPointerException. The NullPointerException is caught, printing '2', and then the finally block executes, printing '4'. The 'END' statement is not reached due to the return in the NullPointerException catch block.",
  },
  {
    question:
      "What will be the result of compiling and running the following program? <br><br>(Choose 1 answer)",
    code: `class SomeClass {
  public static void main(String args[]) {
    int size = 10;
    int[] arr = new int[size];
    for (int i = 0; i < size; ++i) System.out.println(arr[i]);
  }
}`,
    answers: [
      {
        text: "The code will fail to compile, because the int[] array declaration is incorrect.",
        correct: false,
      },
      {
        text: "The program will compile, but will throw an IndexArrayOutOfBoundsException when run.",
        correct: false,
      },
      {
        text: "The program will compile and run without error, and will print nothing.",
        correct: false,
      },
      {
        text: "The program will compile and run without error and will print null ten times.",
        correct: false,
      },
      {
        text: "The program will compile and run without error and will print '0' ten times.",
        correct: true,
      },
    ],
    explanation:
      "The program initializes an array of size 10 with default values of 0 for each element. The loop iterates over the array, printing each element, which results in ten zeros being printed.",
  },
  {
    question:
      "Given the following program, which of these statements are true? <br><br>(Choose 2 answers)",
    code: `public class FinallyTest {
  public static void main(String args[]) {
    try {
      if (args.length == 0) return;
      else throw new Exception("Some Exception");
    } catch(Exception e) {
      System.out.println("Exception in Main");
    } finally {
      System.out.println("The end");
    }
  }
}`,
    answers: [
      {
        text: "If run with no arguments, the program will only print The end.",
        correct: true,
      },
      {
        text: "If run with one argument, the program will only print The end.",
        correct: false,
      },
      {
        text: "If run with one argument, the program will print Exception in Main and The end.",
        correct: true,
      },
      {
        text: "If run with one argument, the program will only print Exception in Main.",
        correct: false,
      },
      { text: "Only one of the above is correct.", correct: false },
    ],
    explanation:
      "If run with no arguments, the try block returns immediately, and the finally block executes, printing 'The end'. If run with one argument, an exception is thrown, caught, and 'Exception in Main' is printed, followed by the finally block printing 'The end'.",
  },
  {
    question:
      "You have an array of objects and you want to search for a particular object in that array. Which of the following Java statements will you need to use? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "Conditional", correct: false },
      { text: "Iterative/loop", correct: true },
      { text: "Instantiation", correct: false },
      { text: "Assignment", correct: false },
    ],
    explanation:
      "To search for a particular object in an array, you typically use an iterative/loop statement to traverse the array and check each element.",
  },
  {
    question:
      "What may be done to the above code to make it print 100? <br><br>(Choose 2 answers)",
    code: `class Node {
  static final int TYPE = 100;
  public static void print() {
    System.out.println(TYPE); //1    
  }
}

public class Test {
  public static void main(String[] args) {
    //INSERT CODE HERE //2
  }
}`,
    answers: [
      {
        text: "Change the statement at //1 to System.out.println(None.TYPE);",
        correct: false,
      },
      { text: "insert Node.print(); at //2", correct: true },
      { text: "insert new Node().print(); at //2", correct: true },
      { text: "insert new Node.print(); at //2", correct: false },
      { text: "insert Node().print(); at //2", correct: false },
      { text: "insert print(); at //2.", correct: false },
    ],
    explanation:
      "The static method print() can be called using the class name Node.print() or by creating an instance of Node and calling print() on it.",
  },
  {
    question: "What will the following code print? <br><br>(Choose 1 answer)",
    code: `boolean flag = true;
if (flag = false) {
  System.out.println("1");
} else if (flag) {
  System.out.println("2");
} else if (!flag) {
  System.out.println("3");
} else System.out.println("4");`,
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "4", correct: false },
      { text: "Compilation error.", correct: false },
    ],
    explanation:
      "The assignment 'flag = false' sets flag to false, so the first if condition is false. The second condition 'flag' is also false, so it goes to the third condition '!flag', which is true, printing '3'.",
  },
  {
    question:
      "Identify the valid for loop constructs assuming the following declarations: <br><br>(Choose 2 answers)",
    code: `Object o = null; 
ArrayList c = // valid ArrayList object; 
int[] ia = // valid array;

// A) 
for(o : c){ }

// B) 
for(final Object o2 : c){ }

// C) 
for(int i : ia) { }

// D) 
for(Iterator it : c.iterator()){ }

// E) 
for(int i = 1; i <= ia.length; i++){  
    System.out.println(ia[i]); 
}
`,
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "C", correct: true },
      { text: "D", correct: false },
      {
        text: "E",
        correct: false,
      },
    ],
    explanation:
      "The first construct, for(o : c), is invalid because the variable o is uninitialized and cannot hold elements from the collection. <br><br>The second construct, for(final Object o2 : c), is valid since o2 is declared as final and can store elements from the ArrayList c. <br><br>The third construct, for(int i : ia), is also valid because i can hold the integer values from the int[] ia array.<br><br>The fourth construct, for(Iterator it : c.iterator()), is invalid because an enhanced for loop cannot directly use an Iterator like this. Lastly, the fifth construct, for(int i = 1; i <= ia.length; i++), is invalid because it starts indexing from 1, which would lead to an ArrayIndexOutOfBoundsException when accessing ia[i]. <br><br>Therefore, the valid constructs are B and",
  },
  {
    question: "What will the following code print? <br><br>(Choose 1 answer)",
    code: `List s1 = new ArrayList();
s1.add("a");
s1.add("b");
s1.add("c");
s1.add("a");
if (s1.remove("a")) {
  if (s1.remove("a")) {
    s1.remove("b");
  } else {
    s1.remove("c");
  }
}
System.out.println(s1);`,
    answers: [
      { text: "[b]", correct: false },
      { text: "[c]", correct: true },
      { text: "[b, c, a]", correct: false },
      { text: "[a, b, c, a]", correct: false },
      { text: "Exception at runtime", correct: false },
    ],
    explanation:
      "The first 'remove' call removes the first occurrence of 'a'. The second 'remove' call removes the next 'a'. Then 'b' is removed, leaving only 'c'.",
  },
  {
    question:
      "Which one can hold a larger integer value, a char or a short? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "char", correct: true },
      { text: "short", correct: false },
      { text: "largest integer that both can hold are same.", correct: false },
      {
        text: "They cannot be compared because char can hold only character values.",
        correct: false,
      },
      { text: "None of the above", correct: false },
    ],
    explanation:
      "A 'char' in Java is an unsigned 16-bit type, which can hold values from 0 to 65535, whereas a 'short' is a signed 16-bit type, which can hold values from -32768 to 32767.",
  },
  {
    question:
      "You are writing a class named AccountManager. This class is the starting point of your application and is to be executing from the command line. What should be the name of the file containing this class's source code? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "accountmanager.java", correct: false },
      { text: "AccountManager.java", correct: true },
      { text: "main.java", correct: false },
      { text: "Main.java", correct: false },
      {
        text: "The name of the file doesn't matter because after compilation, the class file will be named AccountManager.class anyway.",
        correct: false,
      },
    ],
    explanation:
      "In Java, the source file name must match the public class name, so the file should be named 'AccountManager.java'.",
  },
  {
    question:
      "What should be inserted at //1 so that Y.java can compile without any error? <br><br>(Choose 2 answers)",
    code: `//in file /root/com/foo/X.java
package com.foo;
public class X {
  public static int LOGICID = 10;
  public void apply(int i) {
    System.out.println("applied");
  }
}

//in file /root/com/bar/Y.java
package com.bar;
//1  <== INSERT STATEMENT(s) HERE
public class Y {
  public static void main(String[] args) {
    X x = new X();
    x.apply(LOGICID);
  }
}`,
    answers: [
      { text: "import static X;", correct: false },
      { text: "import static com.foo.*;", correct: false },
      { text: "import static com.foo.X.*;", correct: true },
      { text: "com.foo.*;", correct: false },
      { text: "com.foo.X.LOGICID;", correct: true },
    ],
    explanation:
      "To access the static field LOGICID from class X, you need to import it using 'import static com.foo.X.*;' or directly use 'com.foo.X.LOGICID'.",
  },
  {
    question:
      "Which of the following are features of Java? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      {
        text: "It allows you to develop distributed applications.",
        correct: true,
      },
      {
        text: "It allows you to develop desktop as well as web applications.",
        correct: true,
      },
      {
        text: "It allows development of low level components such as device drivers.",
        correct: false,
      },
      { text: "It is a scripted language.", correct: false },
      { text: "It is a structured programming language.", correct: false },
    ],
    explanation:
      "Java is known for its ability to develop distributed and web applications. It is not typically used for low-level programming like device drivers.",
  },
  {
    question:
      "Which of the following statements are true if the above program is run with the command line: java Test closed? <br><br>(Choose 1 answer)",
    code: `public class Test {
  public static void main(String[] args) {
    if (args[0].equals("open")) if (args[1].equals("someone")) System.out.println("Hello!");
    else System.out.println("Go away " + args[1]);
  }
}`,
    answers: [
      {
        text: "It will throw ArrayIndexOutOfBoundsException at runtime.",
        correct: true,
      },
      {
        text: "It will end without exceptions and will print nothing.",
        correct: false,
      },
      { text: "It will print Go away", correct: false },
      {
        text: "It will print Go away and then will throw an ArrayIndexOutOfBoundsException.",
        correct: false,
      },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The program will throw an ArrayIndexOutOfBoundsException because it tries to access args[1] when only one argument is provided.",
  },
  {
    question:
      "What will the following code print when run? <br><br>(Choose 4 answers)",
    code: `public class TestClass {
  public static void main(String[] args) throws Exception {
    String[] sa = { "a", "b", "c" };
    for (String s: sa) {
      if ("b".equals(s)) continue;
      System.out.println(s);
      if ("b".equals(s)) break;
      System.out.println(s + " again");
    }
  }
}`,
    answers: [
      { text: "a", correct: true },
      { text: "a again", correct: true },
      { text: "c", correct: true },
      { text: "c again", correct: true },
      { text: "a a again b", correct: false },
      { text: "a a again b b again c c again", correct: false },
    ],
    explanation:
      "The loop skips 'b' due to the continue statement. It prints 'a', 'a again', 'c', and 'c again'.",
  },
  {
    question:
      "Which of the following statements will print true? <br><br>(Choose 3 answers)",
    code: `int x = 5;
int y = 9;
int z = 12;
boolean b = true;`,
    answers: [
      { text: "A) System.out.println( x==y || b );", correct: true },
      { text: "B) System.out.println( ! (x<z) || b );", correct: true },
      { text: "C) System.out.println( b == y>z );", correct: false },
      { text: "D) System.out.println( b && y>z || z<x );", correct: false },
      { text: "E) System.out.println( !b == y>z );", correct: true },
    ],
    explanation:
      "In A), x == y is false (5 is not equal to 9), but b is true, so the expression evaluates to true and will print true.<br><br>In B), x < z is true, making !true equal to false. With b as true, the expression evaluates to true, so it will print true.<br><br>In C), y > z is false, and since b is true, the expression evaluates to false, so it does not print true.<br><br>In D), b && y > z is false, and z < x is also false, leading to false || false, which does not print true.<br><br>In E), !b is false and y > z is false, so false == false is true, meaning it will print true.",
  },
  {
    question:
      "What will be the output when the above code is executed? <br><br>(Choose 1 answer)",
    code: `public static void main(String[] args) throws Exception {
  int i = 1,
  j = 10;
  do {
    if (i++>--j) continue;
  } while ( i < 5 );
  System.out.println("i=" + i + " j=" + j);
}`,
    answers: [
      { text: "i=6 j=6", correct: false },
      { text: "i=5 j=6", correct: true },
      { text: "i=5 j=5", correct: false },
      { text: "i=6 j=5", correct: false },
      { text: "None of these.", correct: false },
    ],
    explanation:
      `When the provided code is executed, it initializes i to 1 and j to 10. In the first iteration of the do-while loop, i increments to 2 and j decrements to 9, but since 1 is not greater than 9, it continues to the next iteration. <br><br>This process repeats, with i incrementing and j decrementing in each iteration, until i becomes 5 and j becomes 6. The loop then exits because the condition i < 5 is no longer true. <br><br>Finally, the program prints the values of i and j, resulting in the output: "i=5 j=6".`,
  },
  {
    question:
      "Given the following class, which of these are valid ways of referring to the class from outside of the package com.enthu? <br><br>(Choose 2 answers)",
    code: `package com.enthu;
public class Base {
  // ....
  // lot of code...
}`,
    answers: [
      { text: "Base", correct: false },
      {
        text: "By importing the package com.* and referring to the class as enthu.Base",
        correct: false,
      },
      { text: "importing com.* is illegal.", correct: true },
      {
        text: "By importing com.enthu.* and referring to the class as Base.",
        correct: true,
      },
      { text: "By referring to the class as com.enthu.Base.", correct: true },
    ],
    explanation:
      "You can refer to the class by importing com.enthu.* and using 'Base', or by fully qualifying the class name as 'com.enthu.Base'.",
  },
  {
    question:
      "Which of the following are true about the enhanced for loop? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      {
        text: "It can iterate over an array or a Collection but not an ArrayList.",
        correct: false,
      },
      {
        text: "Using an enhanced for loop prevents the code from going into an infinite loop.",
        correct: false,
      },
      {
        text: "Using an enhanced for loop on an array may cause infinite loop.",
        correct: false,
      },
      {
        text: "You cannot find out the number of the current iteration while iterating.",
        correct: true,
      },
    ],
    explanation:
      "The enhanced for loop can iterate over arrays and collections, including ArrayLists. It does not inherently prevent infinite loops, and it does not provide a way to access the current iteration index.",
  },
  {
    question:
      "Which lines contain a valid constructor in the following code? <br><br>(Choose 3 answers)",
    code: `public class TestClass {
  public TestClass(int a, int b) {} // 1
  public void TestClass(int a) {} // 2
  public TestClass(String s); // 3
  private TestClass(String s, int a) {} //4
  public TestClass(String s1, String s2) {}; //5
}`,
    answers: [
      { text: "Line // 1", correct: true },
      { text: "Line // 2", correct: false },
      { text: "Line // 3", correct: false },
      { text: "Line // 4", correct: true },
      { text: "Line // 5", correct: true },
    ],
    explanation:
      "Line // 1 contains a valid constructor because it correctly defines a constructor with two parameters.<br><br>Line // 2 is not a valid constructor because it has a return type (void), which disqualifies it from being a constructor.<br><br>Line // 3 declares a constructor but is missing an implementation; it only has a semicolon, making it an invalid constructor.<br><br> Line // 4 is a valid constructor, as it correctly defines a constructor with two parameters and is marked private.<br><br>Line // 5 is also a valid constructor, as it defines a constructor with two string parameters.",
  },
  {
    question:
      "Which of the following is true about a Java source file? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "It must have exactly one package statement.", correct: false },
      { text: "It must have zero or more import statements.", correct: true },
      {
        text: "All the classes that belong to the same package as the package of this class are automatically imported.",
        correct: false,
      },
      {
        text: "It can only have zero or one package statement.",
        correct: true,
      },
      {
        text: "All packages of J2SE are automatically imported.",
        correct: false,
      },
      {
        text: "The source file name has no relation to the classes contained in the file.",
        correct: false,
      },
    ],
    explanation:
      "A Java source file can have zero or one package statement and zero or more import statements. Classes in the same package are not automatically imported.",
  },
  {
    question: "Identify correct statements for the following code snippet: <br><br>(Choose 1 answer)",
    code: `double da[] = new double[3];`,
    answers: [
      {
        text: "A) for(double d : da) System.out.println(d); will print null null null",
        correct: false,
      },
      {
        text: "B) for(int i=1; i<=da.length; i++ ) System.out.println(da[i]); will print 0.0 0.0 0.0",
        correct: false,
      },
      {
        text: "C) for(int i=0; i<=da.length; i++ ) System.out.println(da[i]); will print null null null",
        correct: false,
      },
      {
        text: "D) for(int i=0; i<da.length; i++ ) System.out.println(da[i]); will print 0.0 0.0 0.0",
        correct: true,
      },
      { text: "E) None of the above.", correct: false },
    ],
    explanation:
      "A) will print 0.0 three times, not null. Therefore, this statement is incorrect.<br><br>B) will cause an ArrayIndexOutOfBoundsException because it tries to access da[3] when i is 3. Thus, this statement is incorrect.<br><br>C) will also cause an ArrayIndexOutOfBoundsException when i is 3. Therefore, this statement is incorrect.<br><br>D) will print 0.0 three times, as it correctly iterates over valid indices (0, 1, and 2). This statement is correct.<br><br>E) is incorrect since statement D) is correct.",
  },
  {
    question:
      "What letters, and in what order, will be printed when the following program is compiled and run? <br><br>(Choose 1 answer)",
    code: `public class FinallyTest {
  public static void main(String args[]) throws Exception {
    try {
      m1();
      System.out.println("A");
    } finally {
      System.out.println("B");
    }
    System.out.println("C");
  }
  public static void m1() throws Exception {
    throw new Exception();
  }
}`,
    answers: [
      { text: "It will print C and B, in that order.", correct: false },
      { text: "It will print A and B, in that order.", correct: false },
      { text: "It will print B and then throw an Exception.", correct: true },
      { text: "It will print A, B and C in that order.", correct: false },
      { text: "Compile time error.", correct: false },
    ],
    explanation:
      `When the provided program is compiled and run, it first executes the main method, which calls the m1() method. The m1() method throws an Exception, causing control to transfer to the finally block associated with the try statement. <br><br>In this finally block, "B" is printed to the console. After the finally block executes, the program does not reach the line that prints "C" because the exception remains unhandled in the main method, resulting in program termination. <br><br>Therefore, the only output from the program will be "B".`,
  },
  {
    question:
      "What, if anything, is wrong with the following code? <br><br>(Choose 1 answer)",
    code: `void test(int x) {
  switch (x) {
  case 1:
  case 2:
  case 0:
  default:
  case 4:
  }
}`,
    answers: [
      {
        text: "Data Type of 'x' is not valid to be used as an expression for the switch clause.",
        correct: false,
      },
      { text: "The case label 0 must precede case label 1.", correct: false },
      {
        text: "Each case section must be ended by a break keyword.",
        correct: false,
      },
      {
        text: "The default label must be the last label in the switch statement.",
        correct: false,
      },
      { text: "There is nothing wrong with the code.", correct: true },
    ],
    explanation:
      "The code is syntactically correct. A switch statement does not require break statements or a specific order for case labels.",
  },
  {
    question: "Identify correct statements: <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      {
        text: "A) 1 + Math.random()*9 will return a random number between 1 and 10.",
        correct: true,
      },
      {
        text: "B) Math.random()*10 will return a random number between 1 and 10.",
        correct: false,
      },
      {
        text: "C) Math.round(Math.random()*9) will return a random number between 1 and 10.",
        correct: false,
      },
      {
        text: "D) 1 + Math.round(Math.random()*9) will return a random number between 1 and 10.",
        correct: true,
      },
      {
        text: "E) Math.round(Math.random()*10) will return a random number between 1 and 10.",
        correct: false,
      },
    ],
    explanation:
      "A) is correct. Math.random() generates a random number between 0.0 (inclusive) and 1.0 (exclusive). Multiplying by 9 gives a range from 0.0 to just under 9.0, and adding 1 shifts the range to between 1.0 and just under 10.0.<br><br>B) is incorrect. Math.random()*10 produces a number between 0.0 and just under 10.0, not between 1 and 10.<br><br>C) is incorrect. Math.random()*9 generates a number from 0.0 to just under 9.0, and when rounded, it can return values from 0 to 9. Therefore, it does not guarantee a return value between 1 and 10.<br><br>D) is correct. The expression Math.round(Math.random()*9) can return values from 0 to 9, and adding 1 shifts the range to 1 through 10.<br><br>E) is incorrect. Math.round(Math.random()*10) can return values from 0 to 10, so it does not ensure a return value strictly between 1 and 10.",
  },
  {
    question:
      "Considering the following code snippet, which of the following statements will print true? <br><br>(Choose 2 answers)",
    code: `int a = 10, b = 20, c = 30, d = 40;
boolean t = true;`,
    answers: [
      { text: "A) System.out.println( (a > b) && t);", correct: false },
      { text: "B) System.out.println( (a > b || b < c) && t);", correct: true },
      { text: "C) System.out.println( (a < d && b < c) || t);", correct: true },
      {
        text: "D) System.out.println( (a > b || t) && (b>c && c>d));",
        correct: false,
      },
    ],
    explanation:
      "A) evaluates to (10 > 20) && true, which is false && true, resulting in false.<br><br>B) evaluates to (10 > 20 || 20 < 30) && true, which is false || true, resulting in true && true, hence it prints true.<br><br>C) evaluates to (10 < 40 && 20 < 30) || true, which is true && false, resulting in false || true, hence it prints true.<br><br>D) evaluates to (10 > 20 || true) && (20 > 30 && 30 > 40), which simplifies to true && false, resulting in false.",
  },
  {
    question: "What is the result? <br><br>(Choose 1 answer)",
    code: `String str = "hello\\r\\n" + "world";
System.out.println(str.length);`,
    answers: [
      { text: "12", correct: false },
      { text: "13", correct: false },
      { text: "14", correct: false },
      { text: "Compilation error", correct: true },
      { text: "Exception at run time", correct: false },
    ],
    explanation:
      "The code will not compile because 'str.length' should be 'str.length()' to call the method.",
  },
  {
    question:
      "A try statement must always have a ..... associated with it. <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "catch", correct: false },
      { text: "throws", correct: false },
      { text: "finally", correct: false },
      { text: "catch, finally or both", correct: true },
      { text: "throw", correct: false },
    ],
    explanation:
      "A try statement must be followed by at least one catch block or a finally block, or both.",
  },
  {
    question:
      "What sequence of digits will the following program print? <br><br>(Choose 1 answer)",
    code: `import java.util. * ;
public class ListTest {
  public static void main(String args[]) {
    List s1 = new ArrayList();
    s1.add("a");
    s1.add("b");
    s1.add(1, "c");
    List s2 = new ArrayList(s1.subList(1, 1));
    s1.addAll(s2);
    System.out.println(s1);
  }
}`,
    answers: [
      { text: "The sequence a, b, c, b is printed.", correct: false },
      { text: "The sequence a, c, b, c is printed.", correct: false },
      { text: "The sequence a, c, b is printed.", correct: true },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      `The program starts by creating an ArrayList named s1 and adds the elements "a" and "b", resulting in s1 being ["a", "b"]. Then, it adds "c" at index 1, changing s1 to ["a", "c", "b"]. <br><br>Next, it creates an empty ArrayList named s2 using s1.subList(1, 1). The addAll method is called with s2, but since s2 is empty, no elements are added to s1. <br><br>Finally, when the program prints s1, it outputs ["a", "c", "b"]. <br><br>Thus, the printed sequence is a, c, b.`,
  },
  {
    question:
      "Which two lines can be inserted at locations marked //1 and //2? <br><br>(Choose 1 answer)",
    code: `//1
//2
public class TestClass {
  public static void main(String[] args) {
    double d = Math.random();
    System.out.println(d);
  }
}`,
    answers: [
      { text: "import java.lang.*;  at //1", correct: false },
      { text: "import java.util.*;  at //1", correct: false },
      { text: "package test;  at //1", correct: true },
      { text: "package a.b;  at //2", correct: false },
      { text: "import java.*;  at //2", correct: false },
      { text: "import java.lang.*;  at //2", correct: false },
    ],
    explanation:
      "A package statement can be placed at the top of the file. Import statements are not needed for java.lang classes.",
  },
  {
    question: "Which of these are keywords in Java? <br><br>(Choose 4 answers)",
    code: ``,
    answers: [
      { text: "default", correct: true },
      { text: "null", correct: false },
      { text: "String", correct: false },
      { text: "throws", correct: true },
      { text: "long", correct: true },
      { text: "strictfp", correct: true },
    ],
    explanation:
      "'default', 'throws', 'long', and 'strictfp' are Java keywords. 'null' is a literal, and 'String' is a class.",
  },
  {
    question:
      "What letters will be printed by this program? <br><br>(Choose 3 answers)",
    code: `public class ForSwitch {
  public static void main(String args[]) {
    char i;
    LOOP: for (i = 0; i < 5; i++) {
      switch (i++) {
      case '0':
        System.out.println("A");
      case 1:
        System.out.println("B");
        break LOOP;
      case 2:
        System.out.println("C");
        break;
      case 3:
        System.out.println("D");
        break;
      case 4:
        System.out.println("E");
      case 'E':
        System.out.println("F");
      }
    }
  }
}`,
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: false },
      { text: "E", correct: true },
      { text: "F", correct: true },
    ],
    explanation: `In the first iteration, i starts at 0. The switch statement evaluates i++, which checks the value of i as 0 before incrementing it to 1. Since none of the cases match, it continues to the next iteration.<br><br>In the second iteration, i is now 1. The switch evaluates i++ again, matching case 1, which prints "B." However, because there is no break statement after this case, the execution continues to case 2, which then prints "C" before breaking out of that case.<br><br>In the third iteration, i becomes 3. The switch checks the value, matches case 3, and prints "D," but again, since there is no further break, it moves to case 4. In this case, it prints "E," and since there is still no break, it falls through to case 'E', printing "F."<br><br>Thus, the final output of the program is "C," "E," and "F," as the fall-through behavior in the switch statement allows the code to execute multiple cases without breaking out immediately.`,
  },
  {
    question:
      "Which of the following operators can be used in conjunction with a String object? <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      { text: "+", correct: true },
      { text: "++", correct: false },
      { text: "+=", correct: true },
      { text: ".", correct: true },
      { text: "*", correct: false },
    ],
    explanation:
      "The '+' and '+=' operators can be used for string concatenation, and the '.' operator is used to call methods on a String object.",
  },
  {
    question:
      "What will the following code snippet print? <br><br>(Choose 1 answer)",
    code: `int count = 0,
sum = 0;
do {
  if (count % 3 == 0) continue;
  sum += count;
} while ( count ++< 11 );
System.out.println(sum);`,
    answers: [
      { text: "49", correct: false },
      { text: "48", correct: true },
      { text: "37", correct: false },
      { text: "36", correct: false },
      { text: "38", correct: false },
    ],
    explanation: "The loop skips numbers divisible by 3, so the sum is 48.",
  },
  {
    question: "What is the result? <br><br>(Choose 1 answer)",
    code: `public static void main(String[] args) {
  int[] balances1 = new int[2];
  balances1[0] = 10;
  balances1[1] = 20;

  int[] balances2 = balances1;
  balances2[0] = 0;

  System.out.print(balances1 == balances2);
}`,
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "compilation failure", correct: false },
      { text: "exception at run time", correct: false },
    ],
    explanation:
      "Both balances1 and balances2 refer to the same array object, so the comparison returns true.",
  },
  {
    question:
      "Which of the following are NOT valid operators in Java? <br><br>(Choose 4 answers)",
    code: ``,
    answers: [
      { text: "sizeof", correct: true },
      { text: "<<<", correct: true },
      { text: "instanceof", correct: false },
      { text: "mod", correct: true },
      { text: "equals", correct: true },
    ],
    explanation:
      "'sizeof', '<<<', 'mod', and 'equals' are not valid operators in Java. 'instanceof' is a valid operator.",
  },
  {
    question:
      "Which statements regarding the following code are correct? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static void main(String args[]) {
    int x = Integer.parseInt(args[0]);
    switch (x) {
    case x < 5 : System.out.println("BIG");
      break;
    case x > 5 : System.out.println("SMALL");
    default:
      System.out.println("CORRECT");
      break;
    }
  }
}`,
    answers: [
      { text: "BIG will never be followed be anything else.", correct: false },
      { text: "SMALL will never follow anything else.", correct: false },
      { text: "SMALL will always be followed be CORRECT.", correct: false },
      { text: "It will not compile.", correct: true },
      { text: "It'll throw an exception at runtime.", correct: false },
    ],
    explanation:
      "The code will not compile because switch cases cannot contain expressions like 'x < 5'.",
  },
  {
    question:
      "Which of the following statements can be inserted successfully at // 1? <br><br>(Choose 3 answers)",
    code: `public class InitTest {
  static int si = 10;
  int i;
  final boolean bool;
  // 1
}`,
    answers: [
      { text: "instance { bool = true; }", correct: false },
      { text: "InitTest() { si += 10; }", correct: true },
      {
        text: "void InitTest(){ si = 5; i = bool ? 1000 : 2000;}",
        correct: false,
      },
      { text: "{ i = 1000; }", correct: true },
      { text: "InitTest(boolean flag) { bool  = flag; }", correct: true },
    ],
    explanation:
      "The constructor InitTest() and the instance initializer block '{ i = 1000; }' are valid. The constructor InitTest(boolean flag) correctly initializes the final variable 'bool'.",
  },
  {
    question:
      "Which of the following code snippets will compile without any errors? <br><br>(Choose 4 answers lol)",
    code: ``,
    answers: [
      { text: "while (false) { x=3; }", correct: true },
      { text: "if (false) { x=3; }", correct: true },
      { text: "do{ x = 3; } while(false);", correct: true },
      { text: "for( int i = 0; i< 0; i++) x = 3;", correct: true },
    ],
    explanation:
      "All the code snippets will compile without errors. The while and if statements with 'false' will not execute their blocks, but they are syntactically correct.",
  },
  {
    question:
      "What will the following program print? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  static int someInt = 10;
  public static void changeIt(int a) {
    a = 20;
  }
  public static void main(String[] args) {
    changeIt(someInt);
    System.out.println(someInt);
  }
}`,
    answers: [
      { text: "10", correct: true },
      { text: "20", correct: false },
      { text: "It will not compile.", correct: false },
      { text: "It will throw an exception at runtime.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The method changeIt() changes the local copy of the variable 'a', not the static variable 'someInt'. Therefore, 'someInt' remains 10.",
  },
  {
    question:
      "Which of the following options, when inserted in the above code, will print 111 222? <br><br>(Choose 1 answer)",
    code: `public class Account {
  int id;
  public Account(int id) {
    this.id = id;
  }

  public static void main(String[] args) {
    List < Account > list = new ArrayList < Account > ();
    list.add(new Account(111));
    list.add(new Account(222));

    //insert code here
  }
}`,
    answers: [
      {
        text: 'for(int id : list.id) System.out.print(id+" ");',
        correct: false,
      },
      {
        text: 'for(Account id : list) System.out.print(id+" ");',
        correct: false,
      },
      {
        text: 'Iterator<Account> it = list.iterator(); while(it.hasNext()) System.out.println(it.next()+" ");',
        correct: false,
      },
      {
        text: 'for(int i = 0; i<list.size(); i++) System.out.print(list.id+" ");',
        correct: false,
      },
      { text: "None of the above.", correct: true },
    ],
    explanation:
      "None of the provided options correctly iterate over the list and print the 'id' field of each Account object.",
  },
  {
    question:
      "What command should be given to compile and run a java source file named TestClass.java (for standard Oracle JDK)? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "javac TestClass and java TestClass.class", correct: false },
      { text: "javac TestClass.java and java TestClass", correct: true },
      { text: "java TestClass.java and java TestClass", correct: false },
      { text: "javac TestClass.java and javac TestClass", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The correct commands are 'javac TestClass.java' to compile the source file and 'java TestClass' to run the compiled class.",
  },
  {
    question:
      "What will the following class print when compiled and run? <br><br>(Choose 1 answer)",
    code: `public class Holder {
  int value = 1;
  Holder link;
  public Holder(int val) {
    this.value = val;
  }
  public static void main(String[] args) {
    Holder a = new Holder(5);
    Holder b = new Holder(10);
    a.link = b;
    setIt(a, b);
    System.out.println(a.link.value + ", " + b.link.value);
  }

  public static void setIt(Holder x, Holder y) {
    y.link = x;
  }
}`,
    answers: [
      { text: "It will print 5, 5.", correct: false },
      { text: "It will print 10, 5.", correct: true },
      { text: "It will print 5, 10.", correct: false },
      { text: "It will print 10, 10.", correct: false },
      { text: "None of these.", correct: false },
    ],
    explanation: `When the program is compiled and run, it creates two instances of the Holder class: a with a value of 5 and b with a value of 10. It links a to b and then calls the method setIt, which links b back to a. <br><br>Consequently, when the program prints a.link.value (which refers to b.value) and b.link.value (which refers to a.value), the output will be "10, 5".
`,
  },
  {
    question:
      "What will be the result of attempting to compile and run the following code? <br><br>(Choose 1 answer)",
    code: `class TestClass {
  public static void main(String args[]) {
    String str1 = "str1";
    String str2 = "str2";
    System.out.println(str1.concat(str2));
    System.out.println(str1);
  }
}`,
    answers: [
      { text: "The code will fail to compile.", correct: false },
      { text: "The program will print str1 and str1.", correct: false },
      { text: "The program will print str1 and str1str2", correct: false },
      { text: "The program will print str1str2 and str1", correct: true },
      { text: "The program will print str1str2 and str1str2", correct: false },
    ],
    explanation:
      "The concat() method returns a new string, so the first print statement outputs 'str1str2'. The second print statement outputs 'str1' because str1 is unchanged.",
  },
  {
    question:
      "How many objects and reference variables are created by the following code? <br><br>(Choose 1 answer)",
    code: `TestClass t1, t2, t3, t4;
t1 = t2 = new TestClass();
t3 = new TestClass();`,
    answers: [
      { text: "2 Objects, 3 references.", correct: false },
      { text: "2 Objects, 4 references.", correct: true },
      { text: "3 Objects, 2 references.", correct: false },
      { text: "2 Objects, 2 references.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Two objects are created, and four reference variables are declared. t1 and t2 refer to the same object, and t3 refers to another object.",
  },
  {
    question:
      "What will the following class print when compiled and run? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public int methodA(int a) {
    return a * 2;
  } //1
  public long methodA(int a) {
    return a;
  } //2
  public static void main(String[] args) {
    int i = 0;
    i = new TestClass().methodA(2);
    System.out.println(i);
  }
}`,
    answers: [
      {
        text: "Line 2 correctly overrides the method at line 1.",
        correct: false,
      },
      {
        text: "Line 2 correctly overloads the method at line 1.",
        correct: false,
      },
      {
        text: "There is neither overloading nor overriding happening in the given code but the program will compile fine.",
        correct: false,
      },
      { text: "The program will not compile.", correct: true },
      { text: "The program will compile and print 4.", correct: false },
    ],
    explanation:
      "The program will not compile because methodA is declared twice with the same parameter list, which is not allowed.",
  },
  {
    question: "Which lines will print true? <br><br>(Choose 2 answers)",
    code: `String s1 = "java";
String s2 = "java";
String s3 = new String("java");
System.out.println(s1 == s2); //1
System.out.println(s1 == s3); //2
System.out.println(s1.equals(s2)); //3
System.out.println(s2.equals(s3)); //4`,
    answers: [
      { text: "1, 2, 4", correct: false },
      { text: "1, 4", correct: false },
      { text: "3, 4", correct: true },
      { text: "1, 2, 3, 4", correct: false },
      { text: "1, 2", correct: false },
      { text: "1, 2, 3", correct: false },
      { text: "1, 3, 4", correct: true },
    ],
    explanation:
      "Lines 1 and 3 print true because s1 and s2 refer to the same string literal, and equals() checks for value equality. Line 4 also prints true because equals() checks for value equality.",
  },
  {
    question:
      "Which of the following declarations are valid? <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      { text: "float f1 = 1.0;", correct: false },
      { text: "float f = 43e1;", correct: true },
      { text: "float f = -1;", correct: true },
      { text: "float f = 0x0123;", correct: false },
      { text: "float f = 4;", correct: true },
    ],
    explanation:
      "A float literal must have an 'f' or 'F' suffix unless it is a whole number or in scientific notation. '43e1' and '-1' are valid float declarations.",
  },
  {
    question:
      "What will the following program print? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static void main(String[] args) {
    int x = 1;
    int y = 0;
    if (x / y) System.out.println("Good");
    else System.out.println("Bad");
  }
}`,
    answers: [
      { text: "Good", correct: false },
      { text: "Bad", correct: false },
      { text: "Exception at runtime saying division by Zero.", correct: true },
      { text: "It will not compile.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The program will throw an ArithmeticException at runtime due to division by zero.",
  },
  {
    question:
      "Which of the following statements are correct? <br><br>(Choose 1 answer)",
    code: `class A {
  public void doA(int k) throws Exception { // 0
    for (int i = 0; i < 10; i++) {
      if (i == k) throw new Exception("Index of k is " + i); // 1
    }
  }
  public void doB(boolean f) { //2
    if (f) {
      doA(15); //3
    }
    else return;
  }
  public static void main(String[] args) { //4
    A a = new A();
    a.doB(args.length > 0); //5
  }
}`,
    answers: [
      {
        text: "This will compile and run without any errors or exception.",
        correct: false,
      },
      {
        text: "This will compile if 'throws Exception' is added at line //2",
        correct: false,
      },
      {
        text: "This will compile if 'throws Exception' is added at line //4",
        correct: true,
      },
      {
        text: "This will compile if 'throws Exception' is added at line //2 as well as //4",
        correct: false,
      },
      {
        text: "This will compile if  line marked // 1 is enclosed in a try - catch block.",
        correct: false,
      },
    ],
    explanation:
      "The method doB() calls doA(), which throws an exception. The main method must declare 'throws Exception' to handle this.",
  },
  {
    question:
      "Which of the following statements will print YES? <br><br>(Choose 2 answers)",
    code: `String a = "aAaA", b = "bbBB";`,
    answers: [
      {
        text: 'if(a.endsWith("aa") || b.startsWith("BB")) System.out.println("YES");',
        correct: false,
      },
      {
        text: 'if( (a.substring(1,2) + b.substring(2)).startsWith("AB") ) System.out.println("YES");',
        correct: true,
      },
      {
        text: "if(a.length() == b.replace('x', 'y').length()) System.out.println(\"YES\");",
        correct: true,
      },
      {
        text: 'if( (a+b).charAt(4) != b.charAt(0)) System.out.println("YES");',
        correct: false,
      },
    ],
    explanation:
      "The second statement prints YES because 'a.substring(1,2)' is 'A' and 'b.substring(2)' is 'BB', forming 'ABB'. The third statement prints YES because both strings have the same length.",
  },
  {
    question:
      "Which of the following statements are true? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      {
        text: "The modulus operator % can only be used with integral operands.",
        correct: false,
      },
      {
        text: "&& can have integral as well as boolean operands.",
        correct: false,
      },
      {
        text: "The arithmetic operators *, / and % have the same level of precedence.",
        correct: true,
      },
      {
        text: "+= can have integral as well as String operands.",
        correct: true,
      },
    ],
    explanation:
      "The modulus operator can be used with both integral and floating-point operands. The && operator only works with boolean operands. The operators *, /, and % have the same precedence level, and the += operator can be used with both integral and String operands.",
  },
  {
    question:
      "What will the following program print? <br><br>(Choose 1 answer)",
    code: `class LoopTest {
  public static void main(String args[]) {
    int counter = 0;
    outer: for (int i = 0; i < 3; i++)
    middle: for (int j = 0; j < 3; j++)
    inner: for (int k = 0; k < 3; k++) {
      if (k - j > 0) break middle;
      counter++;
    }
    System.out.println(counter);
  }
}`,
    answers: [
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "9", correct: false },
    ],
    explanation:
      "The loop increments the counter 7 times before breaking out of the middle loop when k-j>0.",
  },
  {
    question:
      "The following method will compile and run without any problems. <br><br>(Choose 1 answer)",
    code: `public void switchTest(byte x) {
  switch (x) {
  case 'b':
    // 1
  default:
    // 2
  case - 2 : // 3
  case 80:
    // 4
  }
}`,
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
    explanation:
      "The switch statement is valid. The case labels are within the range of a byte, and the method will compile and run without issues.",
  },
  {
    question:
      "How many string objects are created in the following code fragment? <br><br>(Choose 1 answer)",
    code: `String a, b, c;
a = new String("hello");
b = a;
c = a + b;`,
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: false },
    ],
    explanation:
      "Three string objects are created: one for 'new String(\"hello\")', and two for the concatenation 'a + b'.",
  },
  {
    question:
      "What will the following class print when compiled and run? <br><br>(Choose 1 answer)",
    code: `class Holder {
  int value = 1;
  Holder link;
  public Holder(int val) {
    this.value = val;
  }
  public static void main(String[] args) {
    final Holder a = new Holder(5);
    Holder b = new Holder(10);
    a.link = b;
    b.link = setIt(a, b);
    System.out.println(a.link.value + " " + b.link.value);
  }

  public static Holder setIt(final Holder x, final Holder y) {
    x.link = y.link;
    return x;
  }
}`,
    answers: [
      { text: "It will not compile because 'a' is final.", correct: false },
      {
        text: "It will not compile because method setIt() cannot change x.link.",
        correct: false,
      },
      { text: "It will print 5, 10.", correct: false },
      { text: "It will print 10, 10.", correct: false },
      { text: "It will throw an exception when run.", correct: true },
    ],
    explanation:
      "When the Holder class is compiled and run, it will throw a NullPointerException at runtime. This occurs because the a.link is set to null within the setIt method, and the program attempts to access a.link.value in the print statement. Since a.link is null, this results in the exception.",
  },
  {
    question:
      "Which of the following method declarations correctly declares a method named sum that takes an array of integers and returns the sum of the values in that array? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "sum(int[] : array) : int { // code here }", correct: false },
      { text: "int sum(int[] : array)  { // code here }", correct: false },
      { text: "sum(int[] array) : int { // code here }", correct: false },
      { text: "int : sum(integer[] array) { // code here }", correct: false },
      { text: "int sum(int array[]) { // code here }", correct: true },
    ],
    explanation:
      "The correct method declaration is 'int sum(int array[]) { // code here }'. The other options have incorrect syntax.",
  },
  {
    question:
      "Which of these expressions will obtain the substring '456' from a string defined by String str = '01234567'? <br><br>(Choose 1 answer)",
    code: `
  String str = "01234567";
  `,
    answers: [
      { text: "str.substring(4, 7)", correct: true },
      { text: "str.substring(4)", correct: false },
      { text: "str.substring(3, 6)", correct: false },
      { text: "str.substring(4, 6)", correct: false },
      { text: "str.substring(4, 3)", correct: false },
    ],
    explanation:
      "The method str.substring(4, 7) returns the substring starting at index 4 and ending before index 7, which is '456'.",
  },
  {
    question:
      "What will be the output of the following lines? <br><br>(Choose 1 answer)",
    code: `System.out.println("" + 5 + 6); //1
System.out.println(5 + "" + 6); //2
System.out.println(5 + 6 + ""); //3
System.out.println(5 + 6); //4`,
    answers: [
      { text: "56, 56, 11, 11", correct: false },
      { text: "11, 56, 11, 11", correct: false },
      { text: "56, 56, 56, 11", correct: true },
      { text: "56, 56, 56, 56", correct: false },
      { text: "56, 56, 11, 56", correct: false },
    ],
    explanation:
      "The first two lines concatenate strings, resulting in '56'. The third line adds numbers first, resulting in '11'. The fourth line adds numbers, resulting in '11'.",
  },
  {
    question:
      "Consider the following method. Which of the following methods correctly overload the above method? <br><br>(Choose 2 answers)",
    code: `public int setVar(int a, int b, float c) {
  //valid code not shown
}`,
    answers: [
      {
        text: "public int setVar(int a, float b, int c) { return setVar(a, c, b); }",
        correct: true,
      },
      {
        text: "public int setVar(int a, float b, int c) { return this(a, c, b); }",
        correct: false,
      },
      {
        text: "public int setVar(int x, int y, float z) { return x+y; }",
        correct: false,
      },
      {
        text: "public float setVar(int a, int b, float c) { return c*a; }",
        correct: false,
      },
      { text: "public float setVar(int a) { return a; }", correct: true },
    ],
    explanation:
      "Overloading requires different parameter lists. The first and last options have different parameter lists from the original method.",
  },
  {
    question:
      "Given the code fragment, what is the result? <br><br>(Choose 1 answer)",
    code: `int[] balances1 = new int[] {
  10,
  20
};
int[] balances2 = {
  100
};
balances2 = balances1;
System.out.print(balances1.length + " " + balances2.length);`,
    answers: [
      { text: "2 1", correct: false },
      { text: "2 2", correct: true },
      { text: "1 2", correct: false },
      { text: "1 1", correct: false },
      { text: "Exception at run time.", correct: false },
    ],
    explanation:
      "Both balances1 and balances2 refer to the same array after the assignment, so both have a length of 2.",
  },
  {
    question:
      "Given the following line of code, identify the correct statement. <br><br>(Choose 1 answer)",
    code: `
  List students = new ArrayList();
  `,
    answers: [
      {
        text: "The reference type is List and the object type is ArrayList.",
        correct: true,
      },
      {
        text: "The reference type is ArrayList and the object type is ArrayList.",
        correct: false,
      },
      {
        text: "The reference type is ArrayList and the object type is List.",
        correct: false,
      },
      {
        text: "The reference type is List and the object type is List.",
        correct: false,
      },
    ],
    explanation:
      "The reference type is List, and the object type is ArrayList, as indicated by the instantiation.",
  },
  {
    question: "What will the following code print? <br><br>(Choose 1 answer)",
    code: `int i = 0;
int j = 1;
if ((i++==0) && (j++==2)) {
  i = 12;
}
System.out.println(i + " " + j);`,
    answers: [
      { text: "1 2", correct: true },
      { text: "2 3", correct: false },
      { text: "12 2", correct: false },
      { text: "12 1", correct: false },
      { text: "It will not compile.", correct: false },
    ],
    explanation:
      "The first condition is true, so i is incremented to 1. The second condition is false, so j is incremented to 2, and i is not set to 12.",
  },
  {
    question:
      "Which of the following are correct ways to initialize the static variables MAX and CLASS_GUID? <br><br>(Choose 2 answers)",
    code: `class Widget {
  static int MAX; //1
  static final String CLASS_GUID; //2
  Widget() {
    //3
  }
  Widget(int k) {
    //4
  }
}`,
    answers: [
      {
        text: "Modify lines //1 and //2 as: static int MAX = 111; static final String CLASS_GUID = 'XYZ123';",
        correct: true,
      },
      {
        text: "Add the following line just after //2: static { MAX = 111; CLASS_GUID = 'XYZ123'; }",
        correct: true,
      },
      {
        text: "Add the following line just before //1: { MAX = 111; CLASS_GUID = 'XYZ123'; }",
        correct: false,
      },
      {
        text: "Add the following line at //3 as well as //4: MAX = 111; CLASS_GUID = 'XYZ123';",
        correct: false,
      },
      { text: "Only option 3 is valid.", correct: false },
    ],
    explanation:
      "Static variables can be initialized directly or in a static block. The other options are incorrect for initializing static variables.",
  },
  {
    question:
      "Which of these assignments are valid? <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      { text: "short s = 12;", correct: true },
      { text: "long g = 012;", correct: true },
      { text: "int i = (int) false;", correct: false },
      { text: "float f = -123;", correct: true },
      { text: "float d = 0 * 1.5;", correct: false },
    ],
    explanation:
      "The assignments to short, long, and float are valid. The assignment to int from a boolean is invalid, and the float assignment is incorrect due to the double literal.",
  },
  {
    question:
      "Consider the following program. Identify the correct statements. <br><br>(Choose 2 answers)",
    code: `class Test {
  public static void main(String[] args) {
    short s = 10; // 1
    char c = s; // 2
    s = c; // 3
  }
}`,
    answers: [
      { text: "Line 3 is not valid.", correct: true },
      { text: "Line 2 is not valid.", correct: true },
      {
        text: "It will compile because both short and char can hold 10.",
        correct: false,
      },
      { text: "None of the lines 1, 2 and 3 is valid.", correct: false },
    ],
    explanation:
      "Line 2 is invalid because a char cannot be directly assigned from a short. Line 3 is invalid because a short cannot be directly assigned from a char.",
  },
  {
    question:
      "Which line will print the string 'MUM'? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static void main(String args[]) {
    String s = "MINIMUM";
    System.out.println(s.substring(4, 7)); //1
    System.out.println(s.substring(5)); //2
    System.out.println(s.substring(s.indexOf('I', 3))); //3
    System.out.println(s.substring(s.indexOf('I', 4))); //4
  }
}`,
    answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "None of these.", correct: false },
    ],
    explanation: "The substring from index 4 to 7 is 'MUM'.",
  },
  {
    question:
      "While compiling a java file you want the compiler to generate the class file in a particular directory. Which javac option will you use? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "-dest", correct: false },
      { text: "-d", correct: true },
      { text: "-target", correct: false },
      { text: "-output", correct: false },
    ],
    explanation:
      "The '-d' option is used with javac to specify the destination directory for class files.",
  },
  {
    question:
      "What will be the result of attempting to compile and run the following class? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static void main(String args[]) {
    int i = 1;
    int[] iArr = {
      1
    };
    incr(i);
    incr(iArr);
    System.out.println("i = " + i + "  iArr[0] = " + iArr[0]);
  }

  public static void incr(int n) {
    n++;
  }

  public static void incr(int[] n) {
    n[0]++;
  }
}`,
    answers: [
      { text: "The code will print i = 1 iArr[0] = 1", correct: false },
      { text: "The code will print i = 1 iArr[0] = 2", correct: true },
      { text: "The code will print i = 2 iArr[0] = 1", correct: false },
      { text: "The code will print i = 2 iArr[0] = 2", correct: false },
      { text: "The code will not compile.", correct: false },
    ],
    explanation:
      "The integer 'i' is passed by value, so it remains 1. The array 'iArr' is passed by reference, so its first element is incremented to 2.",
  },
  {
    question:
      "Which of the following is correct about Java byte code? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "It can run on any OS and chip architecture.", correct: false },
      {
        text: "It can run on any OS and chip architecture if there is a JRE available for that OS and chip architecture.",
        correct: true,
      },
      {
        text: "It can run only any OS and chip architecture if that platform has a JRE built for it and the Java code was compiled ON that platform.",
        correct: false,
      },
      {
        text: "It can run only any OS and chip architecture if that platform has a JRE built for it and the Java code was compiled FOR that platform.",
        correct: false,
      },
    ],
    explanation:
      "Java byte code can run on any OS and architecture as long as there is a compatible JRE available.",
  },
  {
    question:
      "Java ME can be used to develop applications for: <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      {
        text: "Desktop applications that can handle human interaction.",
        correct: false,
      },
      { text: "Embedded applications for Raspberry Pi.", correct: true },
      { text: "Personalized applications for smart phones.", correct: true },
      { text: "Back end/server side.", correct: false },
    ],
    explanation:
      "Java ME is designed for embedded systems and mobile devices, such as smartphones and Raspberry Pi.",
  },
  {
    question:
      "Given the following declaration, select the correct way to get the size of the array, assuming that the array has been initialized. <br><br>(Choose 1 answer)",
    code: `
  int[] intArr;
  `,
    answers: [
      { text: "intArr[].length()", correct: false },
      { text: "intArr.length()", correct: false },
      { text: "intArr.length", correct: true },
      { text: "intArr[].size()", correct: false },
      { text: "intArr.size()", correct: false },
    ],
    explanation:
      "The correct way to get the size of an array in Java is using 'intArr.length'.",
  },
  {
    question:
      "Which of these expressions will return true? <br><br>(Choose 4 answers)",
    code: ``,
    answers: [
      { text: '"hello world".equals("hello world")', correct: true },
      { text: '"HELLO world".equalsIgnoreCase("hello world")', correct: true },
      {
        text: '"hello".concat(" world").trim().equals("hello world")',
        correct: true,
      },
      { text: '"hello world".compareTo("Hello world") < 0', correct: false },
      {
        text: '"Hello world".toLowerCase().equals("hello world")',
        correct: true,
      },
    ],
    explanation:
      "The first, second, third, and fifth expressions evaluate to true. The fourth expression is false because 'compareTo' is case-sensitive.",
  },
  {
    question: "Given the code, what is the result? <br><br>(Choose 1 answer)",
    code: `
  int a = 5, b = 2, c = 30;
  System.out.println(a-- * c / b);
  `,
    answers: [
      { text: "50", correct: false },
      { text: "60", correct: false },
      { text: "75", correct: true },
      { text: "0", correct: false },
      { text: "Compilation failure", correct: false },
      { text: "Exception at run time", correct: false },
    ],
    explanation:
      "The given code initializes three variables: a with a value of 5, b with 2, and c with 30. The expression a-- * c / b uses the current value of a, which is 5, before it is decremented. This results in 5 * 30, giving 150. <br><br>When divided by b (which is 2), the final result is 75. Therefore, the output will be 75.",
  },
  {
    question:
      "You are writing a class that represents the equation of a straight line: y = mx + c. This class has only one method named calcY that takes the value of x and returns the value of y. Which variable scopes will you use to store the values of m and c in an instance of this class? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "global variables", correct: false },
      { text: "static variables", correct: false },
      { text: "instance variables", correct: true },
      { text: "local variables", correct: false },
    ],
    explanation:
      "Instance variables are used to store values that are specific to an instance of a class, such as 'm' and 'c' in this case.",
  },
  {
    question: "What will the following code print? <br><br>(Choose 1 answer)",
    code: `public class BreakTest {
  public static void main(String[] args) {
    int i = 0, j = 5;
    lab1: for (;; i++) {
      for (;; --j) if (i > j) break lab1;
    }
    System.out.println("i = " + i + " , j = " + j);
  }
}`,
    answers: [
      { text: "i = 1, j = -1", correct: false },
      { text: "i = 1, j = 4", correct: false },
      { text: "i = 0, j = 4", correct: false },
      { text: "i = 0, j = -1", correct: true },
      { text: "It will not compile.", correct: false },
    ],
    explanation:
      `The output of the given code will be "i = 6 , j = -1". The outer loop increments i indefinitely, while the inner loop decrements j from 5 down to -1. When i reaches 6, it becomes greater than j, which triggers the break statement to exit the outer loop. As a result, the program prints the final values of i and j, leading to the output "i = 6 , j = -1".`,
  },
  {
    question:
      "What is the result of executing the following fragment of code? <br><br>(Choose 1 answer)",
    code: `boolean b1 = false;
boolean b2 = false;
if (b2 = b1 == false) {
  System.out.println("true");
} else {
  System.out.println("false");
}`,
    answers: [
      { text: "Compile time error.", correct: false },
      { text: "It will print true.", correct: true },
      { text: "It will print false.", correct: false },
      { text: "Runtime error.", correct: false },
      { text: "It will print nothing.", correct: false },
    ],
    explanation:
      "The expression 'b1 == false' evaluates to true, and 'b2 = true' assigns true to b2, so the if condition is true, printing 'true'.",
  },
  {
    question:
      "Given the code, what will it print when compiled and run? <br><br>(Choose 1 answer)",
    code: `package strings;
public class StringFromChar {
  public static void main(String[] args) {
    String myStr = "good";
    char[] myCharArr = {
      'g',
      'o',
      'o',
      'd'
    };

    String newStr = null;
    for (char ch: myCharArr) {
      newStr = newStr + ch;
    }

    System.out.println((newStr == myStr) + " " + (newStr.equals(myStr)));
  }
}`,
    answers: [
      { text: "true true", correct: false },
      { text: "true false", correct: false },
      { text: "false true", correct: true },
      { text: "false false", correct: false },
    ],
    explanation:
      "The '==' operator compares references, which are different, so it prints 'false'. The 'equals' method compares values, which are the same, so it prints 'true'.",
  },
  {
    question:
      "Which of the following correctly declare a variable which can hold an array of 10 integers? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "int[] iA", correct: true },
      { text: "int[10] iA", correct: false },
      { text: "int iA[]", correct: true },
      { text: "Object[] iA", correct: false },
      { text: "Object[10] iA", correct: false },
    ],
    explanation:
      "The correct syntax for declaring an array in Java is 'int[] iA' or 'int iA[]'.",
  },
  {
    question:
      "What is the effect of compiling and running this class? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static void main(String args[]) {
    int sum = 0;
    for (int i = 0, j = 10; sum > 20; ++i, --j) { // 1
      sum = sum + i + j;
    }
    System.out.println("Sum = " + sum);
  }
}`,
    answers: [
      { text: "Compile time error at line 1.", correct: false },
      { text: "It will print Sum = 0", correct: true },
      { text: "It will print Sum = 20", correct: false },
      { text: "Runtime error.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The loop condition 'sum > 20' is false initially, so the loop body is never executed, and 'Sum = 0' is printed.",
  },
  {
    question:
      "What will the following statement print? <br><br>(Choose 1 answer)",
    code: `
  System.out.printf("This is %s %s", "what", "it", "is");
  `,
    answers: [
      { text: "This is what it", correct: true },
      { text: "This is it is", correct: false },
      {
        text: "Exception will be thrown at run time because the number of arguments and the number of format specifiers in the input string do not match.",
        correct: false,
      },
      { text: "Compilation failure", correct: false },
    ],
    explanation:
      "The printf method uses the first two format specifiers '%s' with the first two arguments, resulting in 'This is what it'.",
  },
  {
    question:
      "Which of the following statements are valid? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "String[] sa = new String[3]{ 'a', 'b', 'c'};", correct: false },
      { text: "String sa[] = { 'a', 'b', 'c'};", correct: true },
      { text: "String sa = new String[]{'a', 'b', 'c'};", correct: false },
      { text: "String sa[] = new String[]{'a', 'b', 'c'};", correct: true },
      { text: "String sa[] = new String[]{'a' 'b' 'c'};", correct: false },
    ],
    explanation:
      "The correct syntax for array initialization is 'String sa[] = { 'a', 'b', 'c'};' or 'String sa[] = new String[]{'a', 'b', 'c'};'.",
  },
  {
    question:
      "What is the result of executing the following code when the value of i is 5? <br><br>(Choose 1 answer)",
    code: `switch (i) {
default:
case 1:
  System.out.println(1);
case 0:
  System.out.println(0);
case 2:
  System.out.println(2);
  break;
case 3:
  System.out.println(3);
}`,
    answers: [
      { text: "It will print 1 0 2", correct: true },
      { text: "It will print 1 0 2 3", correct: false },
      { text: "It will print 1 0", correct: false },
      { text: "It will print 1", correct: false },
      { text: "Nothing will be printed.", correct: false },
    ],
    explanation:
      "The default case is executed, printing '1', then '0', and '2'. The break statement stops further execution.",
  },
  {
    question:
      "What will the following code print when run? <br><br>(Choose 1 answer)",
    code: `public class Mambo {
  static int m = 10,
  n = 20;
  public static void main(String args[]) {
    int m = 0,
    n = 10;
    Mambo mb = new Mambo();
    while (m < 3) {
      m++;
      n--;
    }
    System.out.println(m + ", " + n);
  }
}`,
    answers: [
      { text: "10, 20", correct: false },
      { text: "9, 19", correct: false },
      { text: "3, 7", correct: true },
      { text: "None of these.", correct: false },
    ],
    explanation:
      "The local variables 'm' and 'n' are used in the loop, resulting in 'm = 3' and 'n = 7'.",
  },
  {
    question:
      "What will the following program print? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static void main(String[] args) {
    unsigned byte b = 0;
    b--;
    System.out.println(b);
  }
}`,
    answers: [
      { text: "0", correct: false },
      { text: "-1", correct: false },
      { text: "255", correct: false },
      { text: "-128", correct: false },
      { text: "It will not compile.", correct: true },
    ],
    explanation:
      "The code will not compile because 'unsigned' is not a valid keyword in Java.",
  },
  {
    question:
      "Which of the following are valid operators in Java? <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      { text: "!", correct: true },
      { text: "!!", correct: false },
      { text: "&&", correct: true },
      { text: "%=", correct: true },
      { text: "$", correct: false },
    ],
    explanation:
      "The valid operators in Java are '!', '&&', and '%='. The '!!' and '$' are not valid operators.",
  },
  {
    question:
      "Consider the following code snippet. Which of the following will produce the same result? <br><br>(Choose 1 answer)",
    code: `for (int i = INT1; i < INT2; i++) {
  System.out.println(i);
}`,
    answers: [
      {
        text: "for (int i = INT1; i < INT2; System.out.println(++i));",
        correct: false,
      },
      {
        text: "for (int i = INT1; i++ < INT2; System.out.println(i));",
        correct: false,
      },
      {
        text: "int i = INT1; while (i++ < INT2) { System.out.println(i); }",
        correct: false,
      },
      {
        text: "int i = INT1; do { System.out.println(i); } while (i++ < INT2);",
        correct: true,
      },
      { text: "None of these.", correct: false },
    ],
    explanation:
      "The do-while loop prints the same sequence of numbers as the for loop.",
  },
  {
    question:
      "Which of the following four constructs are valid? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "1, 3", correct: false },
      { text: "1, 2, 3", correct: false },      
      { text: "3, 4", correct: false },
      { text: "1, 2, 4.", correct: false },
      { text: "All are valid.", correct: true },
    ],
    explanation:
      "All the switch constructs are valid, even if they do not contain any case labels.",
  },
  {
    question:
      "What will the following program print? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  static int someInt = 10;
  public static void changeIt(int a) {
    a = 20;
  }
  public static void main(String[] args) {
    changeIt(someInt);
    System.out.println(someInt);
  }
}`,
    answers: [
      { text: "10", correct: true },
      { text: "20", correct: false },
      { text: "It will not compile.", correct: false },
      { text: "It will throw an exception at runtime.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The method changeIt() changes the local copy of the variable 'a', not the static variable 'someInt'. Therefore, 'someInt' remains 10.",
  },
  {
    question:
      "Which of the following features are provided by the JDK? <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      { text: "A Java Runtime Environment (JRE).", correct: true },
      { text: "Machine learning", correct: false },
      { text: "API for Java SE Standard", correct: true },
      { text: "Database engine", correct: false },
      { text: "Integration libraries", correct: true },
    ],
    explanation:
      "The JDK provides a JRE, APIs for Java SE, and integration libraries. It does not include machine learning or a database engine.",
  },
  {
    question:
      "Which of the following expressions correctly implement the following equation:<br><br> y = 10x² + 20x + 30? <br><br>Assume that all variables are of type ints. <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "y = 10**x + 20*x + 30;", correct: false },
      { text: "y = x*(10*x + 20) + 30;", correct: true },
      { text: "y = 10*x^2 + 20*x +20;", correct: false },
      { text: "y = 10*x*x + 20*x + 30;", correct: true },
      { text: "y = 10*x** + 20*x + 30;", correct: false },
    ],
    explanation:
      "The correct expressions are 'y = x*(10*x + 20) + 30;' and 'y = 10*x*x + 20*x + 30;'. The '**' operator is not valid in Java.",
  },
  {
    question:
      "What will the following statement print? <br><br>(Choose 1 answer)",
    code: `int marks = 90;
String exam = "OCFA";
System.out.printf("I scored %d marks in the %s exam!", exam, marks);`,
    answers: [
      {
        text: "I scored 90 marks in the OCFA exam!",
        correct: false,
      },
      { text: "I scored OCFA marks in the 90 exam!", correct: false },
      { text: "An exception will be thrown at run time.", correct: true },
      { text: "Compilation error", correct: false },
    ],
    explanation:
      "The printf method expects a format specifier for each argument. The mismatch in the number of format specifiers and arguments causes a runtime exception.",
  },
  {
    question:
      "Which of the following statements concerning the switch construct are true? <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      {
        text: "A character literal can be used as a value for a case label.",
        correct: true,
      },
      { text: "A 'long' cannot be used as a switch variable.", correct: true },
      { text: "An empty switch block is a valid construct.", correct: true },
      { text: "A switch block must have a default label.", correct: false },
      {
        text: "If present, the default label must be the last of all the labels.",
        correct: false,
      },
    ],
    explanation:
      "Character literals can be used as case labels, a 'long' cannot be used as a switch variable, and an empty switch block is valid. A default label is optional and can be placed anywhere.",
  },
  {
    question:
      "What will happen when the following program is compiled and run? <br><br>(Choose 1 answer)",
    code: `public class SM {
  public String checkIt(String s) {
    if (s.length() == 0 || s == null) {
      return "EMPTY";
    } else return "NOT EMPTY";
  }

  public static void main(String[] args) {
    SM a = new SM();
    a.checkIt(null);
  }
}`,
    answers: [
      { text: "It will print EMPTY.", correct: false },
      { text: "It will print NOT EMPTY.", correct: false },
      { text: "It will throw NullPointerException.", correct: true },
      { text: "It will print EMPTY if || is replaced with |.", correct: false },
    ],
    explanation:
      "The method checkIt() will throw a NullPointerException when trying to call length() on a null reference.",
  },
  {
    question: "Which of these statements are true? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      {
        text: "All classes must explicitly define a constructor.",
        correct: false,
      },
      { text: "A constructor can be declared private.", correct: true },
      { text: "A constructor can declare a return value.", correct: false },
      {
        text: "A constructor must initialize all the member variables of a class.",
        correct: false,
      },
      {
        text: "A constructor can access the non-static members of a class.",
        correct: true,
      },
    ],
    explanation:
      "A constructor can be private and can access non-static members. Constructors do not declare return values, and not all classes need to explicitly define a constructor.",
  },
  {
    question:
      "Which of the following features are provided by a JDK? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "Networking protocols", correct: false },
      { text: "Versioning control system", correct: false },
      { text: "Development tools", correct: true },
      { text: "IDE", correct: false },
    ],
    explanation:
      "The JDK provides development tools such as the compiler and debugger. It does not include networking protocols, version control, or an IDE.",
  },
  {
    question:
      "Given the following class, which statements can be inserted at line 1 without causing the code to fail compilation? <br><br>(Choose 4 answers)",
    code: `public class TestClass {
  int a;
  int b = 0;
  static int c;
  public void m() {
    int d;
    int e = 0;
    // Line 1
  }
}`,
    answers: [
      { text: "a++;", correct: true },
      { text: "b++;", correct: true },
      { text: "c++;", correct: true },
      { text: "d++;", correct: false },
      { text: "e++;", correct: true },
    ],
    explanation:
      "The variables 'a', 'b', 'c', and 'e' are initialized and can be incremented. The variable 'd' is not initialized, so it cannot be incremented.",
  },
  {
    question:
      "Which of the following statements are used to implement a boolean conditional statement in Java? <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      { text: "if", correct: true },
      { text: "else-if", correct: false },
      { text: "else", correct: false },
      { text: "if-then-else", correct: true },
      { text: "switch", correct: true },
      { text: "for", correct: false },
    ],
    explanation:
      "The 'if' and 'switch' statements are used to implement boolean conditional logic in Java.",
  },
  {
    question:
      "Which of the following statements are true? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      {
        text: "A static method can call other non-static methods in the same class by using the 'this' keyword.",
        correct: false,
      },
      {
        text: "A class may contain both static and non-static variables and both static and non-static methods.",
        correct: true,
      },
      {
        text: "Every object of a class has its own instance of each non-static member variable.",
        correct: true,
      },
      {
        text: "Instance methods may access local variables of static methods.",
        correct: false,
      },
      {
        text: "All methods in a class are implicitly passed a 'this' parameter when called.",
        correct: false,
      },
    ],
    explanation:
      "A class can have both static and non-static members. Each object has its own instance of non-static variables. Static methods cannot use 'this', and instance methods cannot access local variables of static methods.",
  },
  {
    question:
      "What will the following code snippet print? <br><br>(Choose 1 answer)",
    code: `int index = 1;
String[] strArr = new String[5];
String myStr = strArr[index];
System.out.println(myStr);`,
    answers: [
      { text: "It will print nothing.", correct: false },
      { text: "It will print null.", correct: true },
      {
        text: "It will throw ArrayIndexOutOfBoundsException at runtime.",
        correct: false,
      },
      { text: "It will print some junk value.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The array 'strArr' is initialized with null values, so 'myStr' is null, and 'null' is printed.",
  },
  {
    question:
      "Which line, if any, will give a compile time error? <br><br>(Choose 1 answer)",
    code: `void test(byte x) {
  switch (x) {
  case 'a':
    // 1
  case 256:
    // 2
  case 0:
    // 3
  default:
    // 4
  case 80:
    // 5
  }
}`,
    answers: [
      { text: "Line 1 as 'a' is not compatible with byte.", correct: false },
      { text: "Line 2 as 256 cannot fit into a byte.", correct: true },
      {
        text: "No compile time error but a run time error at line 2.",
        correct: false,
      },
      {
        text: "Line 3 as the default label must be the last label in the switch statement.",
        correct: false,
      },
      { text: "There is nothing wrong with the code.", correct: false },
    ],
    explanation:
      "The value 256 is out of range for a byte, causing a compile-time error.",
  },
  {
    question:
      "Consider the following code. Which of the following lines can be added independently to the above class so that it will run without any errors or exceptions? <br><br>(Choose 2 answers)",
    code: `public class Varargs {
  public void test() {
    test1(10); //1
    test1(10, 20); //2
  }

  public static void main(String[] args) {
    new Varargs().test();
  }

  //insert method here.
}`,
    answers: [
      { text: "public void test1(int i, int j){}", correct: true },
      { text: "public void test1(int i, int... j){}", correct: true },
      { text: "public void test1(int... i){}", correct: false },
      { text: "public void test1(int i...){ }", correct: false },
      { text: "public void test1(int[] i){ }", correct: false },
    ],
    explanation:
      "The first and second options correctly define methods that match the calls in the test method.",
  },
  {
    question: "Which package contains Random class? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "java.lang", correct: false },
      { text: "java.util", correct: true },
      { text: "java.math", correct: false },
      { text: "java.net", correct: false },
    ],
    explanation: "The Random class is part of the java.util package.",
  },
  {
    question:
      "Given the following LOCs, which of the following will put correct integer value of the char variable ch into the int variable i? <br><br>(Choose 3 answers)",
    code: `
  int i = 0;
  char ch = 'a';
  `,
    answers: [
      { text: "i = ch;", correct: true },
      { text: "i = (int) ch;", correct: true },
      { text: "i << ch;", correct: false },
      { text: "i <<< ch", correct: false },
      { text: "i += ch;", correct: true },
      { text: "i := ch;", correct: false },
    ],
    explanation:
      "The correct ways to assign the integer value of 'ch' to 'i' are 'i = ch;', 'i = (int) ch;', and 'i += ch;'.",
  },
  {
    question:
      "Which of the lines will cause a compile time error in the following program? <br><br>(Choose 1 answer)",
    code: `public class MyClass {
  public static void main(String args[]) {
    char c;
    int i;
    c = 'a'; //1
    i = c; //2
    i++; //3
    c = i; //4
    c++; //5
  }
}`,
    answers: [
      { text: "The line 1", correct: false },
      { text: "The line 2", correct: false },
      { text: "The line 3", correct: false },
      { text: "The line 4", correct: true },
      { text: "The line 5", correct: false },
    ],
    explanation:
      "Line 4 causes a compile-time error because an int cannot be directly assigned to a char without casting.",
  },
  {
    question:
      "Which of the following classes are from java.util package? <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      { text: "String", correct: false },
      { text: "ArrayList", correct: true },
      { text: "Collection", correct: true },
      { text: "Math", correct: false },
      { text: "Random", correct: true },
    ],
    explanation:
      "ArrayList, Collection, and Random are part of the java.util package. String is part of java.lang, and Math is also part of java.lang.",
  },
  {
    question:
      "What will be the result of attempting to compile and run the following code? <br><br>(Choose 1 answer)",
    code: `class SwitchTest {
  public static void main(String args[]) {
    for (int i = 0; i < 3; i++) {
      boolean flag = false;
      switch (i) {
        flag = true;
      }
      if (flag) System.out.println(i);
    }
  }
}`,
    answers: [
      { text: "It will print 0, 1 and 2.", correct: false },
      { text: "It will not print anything.", correct: false },
      { text: "Compilation error.", correct: true },
      { text: "Runtime error.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The code will not compile because the switch statement is missing case labels, and the assignment 'flag = true;' is not valid within a switch block.",
  },
  {
    question:
      "Which of the following statements correctly use the float data type? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "var float x = 10.0;", correct: false },
      { text: "float x : 10.0;", correct: false },
      { text: "float x = 10.0F;", correct: true },
      { text: "float x : 10.0F;", correct: false },
      { text: "var float f = 10.0f;", correct: false },
    ],
    explanation:
      "The correct way to declare a float variable is 'float x = 10.0F;'. The 'F' suffix indicates a float literal.",
  },
  {
    question:
      "What will the following program print? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static void main(String[] args) {
    String str = "111";
    boolean[] bA = new boolean[1];
    if (bA[0]) str = "222";
    System.out.println(str);
  }
}`,
    answers: [
      { text: "111", correct: true },
      { text: "222", correct: false },
      {
        text: "It will not compile as bA[0] is uninitialized.",
        correct: false,
      },
      { text: "It will throw an exception at runtime.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The boolean array 'bA' is initialized with false values, so the if condition is false, and '111' is printed.",
  },
  {
    question: "Given the code, what is the result? <br><br>(Choose 1 answer)",
    code: `class Node {
  int id;
  Node node;
  public static void main(String[] args) {
    Node n = new Node();
    System.out.println(n.id);
    System.out.println(n.node.id);
  }
}`,
    answers: [
      { text: "null", correct: false },
      { text: "0", correct: false },
      { text: "exception at runtime", correct: true },
      { text: "Compilation failure", correct: false },
    ],
    explanation:
      "The code will throw a NullPointerException at runtime when trying to access 'n.node.id' because 'n.node' is null.",
  },
  {
    question:
      "Consider the following two java files. What should be inserted at //1 so that TestClass will compile and run? <br><br>(Choose 2 answers)",
    code: `//in file SM.java
package x.y;
public class SM {
  public static void foo() {}
}

//in file TestClass.java
//insert import statement here //1
public class TestClass {
  public static void main(String[] args) {
    foo();
  }
}`,
    answers: [
      { text: "import static x.y.*;", correct: false },
      { text: "import static x.y.SM;", correct: false },
      { text: "import static x.y.SM.foo;", correct: true },
      { text: "import static x.y.SM.foo();", correct: false },
      { text: "import static x.y.SM.*;", correct: true },
    ],
    explanation:
      "To use the static method 'foo' without qualification, you need to import it using 'import static x.y.SM.foo;' or 'import static x.y.SM.*;'.",
  },
  {
    question:
      "Which of the given options can be successfully inserted at line 1? <br><br>(Choose 3 answers)",
    code: `
  //line 1
  public class A {
  }
  `,
    answers: [
      { text: "import java.lang.*;", correct: true },
      { text: "package p.util;", correct: true },
      { text: "public class MyClass{ }", correct: false },
      { text: "class MyClass{ }", correct: false },
    ],
    explanation:
      "The 'import java.lang.*;' statement is valid, and a package declaration is valid at the top of the file. The class declarations are not valid at line 1.",
  },
  {
    question:
      "What can be inserted in the following code so that it will print exactly 2345 when compiled and run? <br><br>(Choose 1 answer1)",
    code: `public class FlowTest {
  static int[] data = { 1, 2, 3, 4, 5 };
  public static void main(String[] args) {
    for (int i: data) {
      if (i < 2) {
        //insert code1 here
      }
      System.out.print(i);
      if (i == 3) {
        //insert code2 here
      }
    }
  }
}`,
    answers: [
      { text: "break; and //nothing is required", correct: false },
      { text: "continue; and //nothing is required", correct: true },
      { text: "continue; and continue;", correct: false },
      { text: "break; and continue;", correct: false },
      { text: "break; and break;", correct: false },
    ],
    explanation:
      "Inserting 'continue;' at code1 skips printing '1', and no action is needed at code2 to achieve the desired output.",
  },
  {
    question:
      "Given the following code, which statements can be placed at the indicated position without causing compile and run time errors? <br><br>(Choose 2 answers)",
    code: `public class Test {
  int i1;
  static int i2;
  public void method1() {
    int i;
    // ... insert statements here
  }
}`,
    answers: [
      { text: "i = this.i1;", correct: true },
      { text: "i = this.i2;", correct: false },
      { text: "this = new Test();", correct: false },
      { text: "this.i = 4;", correct: false },
      { text: "this.i1 = i2;", correct: true },
    ],
    explanation:
      "The statement 'i = this.i1;' is valid because 'i1' is an instance variable. 'this.i1 = i2;' is valid because 'i2' is a static variable. 'this = new Test();' and 'this.i = 4;' are invalid because 'this' cannot be assigned a new value and 'i' is a local variable.",
  },
  {
    question:
      "Which of the following are benefits of polymorphism? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "It makes the code more reusable.", correct: true },
      { text: "It makes the code more efficient.", correct: false },
      { text: "It protects the code by preventing extension.", correct: false },
      { text: "It makes the code more dynamic.", correct: true },
    ],
    explanation:
      "Polymorphism allows for code reusability and makes the code more dynamic by allowing objects to be treated as instances of their parent class.",
  },
  {
    question:
      "What can you do to make the following code print a number between 0 and 10? <br><br>(Choose 3 answers)",
    code: `
  int x = 10;
  //insert code here
  System.out.println(d);
  `,
    answers: [
      {
        text: "Random r = new Random(x); int d = r.nextInt();",
        correct: false,
      },
      { text: "Random r = new Random(); int d = r.nextInt(x);", correct: true },
      {
        text: "Random r = new Random(x); int d = r.nextInt(x);",
        correct: true,
      },
      {
        text: "Random r = new Random(x); int d = (int) r.next()*10;",
        correct: false,
      },
      {
        text: "Random r = new Random(); r.setSeed(x); int d = (int) r.next()*10;",
        correct: false,
      },
      {
        text: "Random r = new Random(x); r.setSeed(x); int d = r.nextInt(x);",
        correct: true,
      },
    ],
    explanation:
      "Using 'r.nextInt(x)' generates a random number between 0 (inclusive) and x (exclusive). Setting the seed does not affect the range of numbers generated.",
  },
  {
    question:
      "What will happen when the following code is compiled? <br><br>(Choose 1 answer)",
    code: `public class FooBar {
  private int FooBar; //1
  public FooBar(int FooBar) {
    this.FooBar = FooBar;
  } //2
  public void FooBar() {} //3
}`,
    answers: [
      { text: "Compilation error at //1.", correct: false },
      { text: "Compilation error at //2.", correct: false },
      { text: "Compilation error at //3.", correct: false },
      { text: "Compiles without any error.", correct: true },
    ],
    explanation:
      "The code compiles without error. The constructor and method names are valid, and the instance variable name is allowed to be the same as the class name.",
  },
  {
    question:
      "Which of the following statements declares a valid null reference? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "String str : null;", correct: false },
      { text: "Object obj = NULL;", correct: false },
      { text: "Date d(null);", correct: false },
      { text: "File f = null;", correct: true },
    ],
    explanation:
      "The statement 'File f = null;' correctly declares a null reference. 'NULL' is not a valid keyword in Java, and 'Date d(null);' is not a valid declaration.",
  },
  {
    question:
      "Under what situations does a class get a default constructor? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      {
        text: "All classes in Java get a default constructor.",
        correct: false,
      },
      {
        text: "You have to define at least one constructor to get the default constructor.",
        correct: false,
      },
      {
        text: "If the class does not define any constructors explicitly.",
        correct: true,
      },
      {
        text: "All classes get default constructor from Object class.",
        correct: false,
      },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "A class gets a default constructor only if no constructors are explicitly defined.",
  },
  {
    question:
      "What will be the output if you run the following program? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static void main(String args[]) {
    int i;
    int j;
    for (i = 0, j = 0; j < 1; ++j, i++) {
      System.out.println(i + " " + j);
    }
    System.out.println(i + " " + j);
  }
}`,
    answers: [
      { text: "0 0 will be printed twice.", correct: false },
      { text: "1 1 will be printed once.", correct: false },
      { text: "0 1 will be printed followed by 1 2.", correct: false },
      { text: "0 0 will be printed followed by 1 1.", correct: true },
      { text: "It will print 0 0 and then 0 1.", correct: false },
    ],
    explanation:
      "The loop runs once, printing '0 0'. After the loop, 'i' is incremented to 1 and 'j' to 1, so '1 1' is printed.",
  },
  {
    question:
      "What will be the result of attempting to compile and run the following program? <br><br>(Choose 1 answer)",
    code: `class TestClass {
  public static void main(String args[]) {
    int i = 0;
    for (i = 1; i < 5; i++) continue; //1
    for (i = 0;; i++) break; //2
    for (; i < 5 ? false: true;); //3
  }
}`,
    answers: [
      {
        text: "The code will compile without error and will terminate without problems when run.",
        correct: false,
      },
      {
        text: "The code will fail to compile, since the 'continue' can't be used this way.",
        correct: false,
      },
      {
        text: "The code will fail to compile, since the 'break' can't be used this way",
        correct: false,
      },
      {
        text: "The code will fail to compile, Since the for statement in the line 2 is invalid.",
        correct: false,
      },
      {
        text: "The code will compile without error but will never terminate.",
        correct: true,
      },
    ],
    explanation:
      "The code compiles, but the third for loop has a condition that always evaluates to true, causing an infinite loop.",
  },
  {
    question:
      "Which of the following comments are valid? <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      { text: "// /* ..... */", correct: true },
      { text: "/* /*  .... // */", correct: false },
      { text: "/* ..... //  */", correct: true },
      { text: "/* //.... */", correct: true },
      { text: "/*  */  */", correct: false },
    ],
    explanation:
      "The first, third, and fourth options are valid comments. The second and fifth options are invalid due to incorrect nesting or termination.",
  },
  {
    question:
      "Which of the following are benefits of an array over an ArrayList? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "It consumes less memory.", correct: true },
      {
        text: "Accessing an element in an array is faster than in ArrayList.",
        correct: true,
      },
      { text: "You do not have to worry about thread safety.", correct: false },
      {
        text: "It implements Collection interface and can thus be passed where ever a Collection is required.",
        correct: false,
      },
    ],
    explanation:
      "Arrays consume less memory and provide faster access compared to ArrayLists. ArrayLists offer more flexibility and are part of the Collections framework.",
  },
  {
    question:
      "How can you declare a method someMethod() such that an instance of the class is not needed to access it and all the members of the same package have access to it? <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      { text: "public static void someMethod()", correct: true },
      { text: "static void someMethod()", correct: true },
      { text: "protected static void someMethod()", correct: false },
      { text: "void someMethod()", correct: false },
      { text: "protected void someMethod()", correct: false },
      { text: "public abstract static void someMethod()", correct: false },
    ],
    explanation:
      "A static method can be accessed without an instance. The default access modifier allows package-level access.",
  },
  {
    question:
      "What will the following code print when run? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static long main(String[] args) {
    System.out.println("Hello");
    return 10L;
  }
}`,
    answers: [
      { text: "Hello", correct: false },
      { text: "It will print nothing.", correct: false },
      { text: "It will not compile", correct: true },
      { text: "It generate an error at run time.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The code will not compile because the main method must have a void return type.",
  },
  {
    question:
      "Which of the following statements regarding 'break' and 'continue' are true? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      {
        text: "break without a label, can occur only in a switch, while, do, or for statement.",
        correct: true,
      },
      {
        text: "continue without a label, can occur only in a switch, while, do, or for statement.",
        correct: false,
      },
      { text: "break can never occur without a label.", correct: false },
      { text: "continue can never occur WITH a label.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The 'break' statement can be used without a label in switch, while, do, or for statements. 'continue' cannot be used in a switch statement.",
  },
  {
    question:
      "Given the following code fragment, which of the following lines would be a part of the output? <br><br>(Choose 3 answers)",
    code: `outer: for (int i = 0; i < 3; i++) {
  for (int j = 0; j < 2; j++) {
    if (i == j) {
      continue outer;
    }
    System.out.println("i=" + i + " , j=" + j);
  }
}`,
    answers: [
      { text: "i = 1, j = 0", correct: true },
      { text: "i = 0, j = 1", correct: false },
      { text: "i = 1, j = 2", correct: false },
      { text: "i = 2, j = 0", correct: true },
      { text: "i = 2, j = 1", correct: true },
      { text: "i = 2, j = 2", correct: false },
    ],
    explanation:
      "The 'continue outer;' statement skips the current iteration of the outer loop when i equals j. The lines 'i = 1, j = 0', 'i = 2, j = 0', and 'i = 2, j = 1' are printed.",
  },
  {
    question:
      "Which integral type in Java has a range from -2^31 to 2^31-1? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "char", correct: false },
      { text: "int", correct: true },
      { text: "long", correct: false },
      { text: "double", correct: false },
      { text: "byte", correct: false },
    ],
    explanation: "The 'int' type in Java has a range from -2^31 to 2^31-1.",
  },
  {
    question:
      "What will it print when the following code compiled and run? <br><br>(Choose 1 answer)",
    code: `public class TestClass {
  public static int switchTest(int k) {
    int j = 1;
    switch (k) {
    case 1:
      j++;
    case 2:
      j++;
    case 3:
      j++;
    case 4:
      j++;
    case 5:
      j++;
    default:
      j++;
    }
    return j + k;
  }
  public static void main(String[] args) {
    System.out.println(switchTest(4));
  }
}`,
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
    ],
    explanation:
      "The switch statement does not have break statements, so it falls through all cases starting from case 4, incrementing j five times. The result is 8.",
  },
  {
    question:
      "Which of the following are true about accessor methods? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      {
        text: "They allow setting and retrieval of private data elements of an instance.",
        correct: true,
      },
      { text: "They should be private.", correct: false },
      { text: "They can be overloaded.", correct: true },
      { text: "They inherit members from the base class.", correct: false },
    ],
    explanation:
      "Accessor methods allow setting and retrieval of private data elements and can be overloaded.",
  },
  {
    question:
      "What would be the result of trying to compile and run the following program? <br><br>(Choose 1 answer)",
    code: `public class Test {
  int[] ia = new int[1];
  Object oA[] = new Object[1];
  boolean bool;
  public static void main(String args[]) {
    Test test = new Test();
    System.out.println(test.ia[0] + "  " + test.oA[0] + "  " + test.bool);
  }
}`,
    answers: [
      {
        text: "The program will fail to compile, because of uninitialized variable 'bool'.",
        correct: false,
      },
      {
        text: "The program will throw a java.lang.NullPointerException when run.",
        correct: false,
      },
      { text: "The program will print '0 null false'.", correct: true },
      { text: "The program will print '0 null true'.", correct: false },
      {
        text: "The program will print null and false but will print junk value for ia[0].",
        correct: false,
      },
    ],
    explanation:
      "The array 'ia' is initialized with default values of 0, 'oA' with null, and 'bool' with false.",
  },
  {
    question:
      "Given the following pairs of method declarations, which of the statements are true? <br><br>(Choose 2 answers)",
    code: `1.
void perform_work(int time) {}
int perform_work(int time, int speed) {
  return time * speed;
}

2.
void perform_work(int time) {}
int perform_work(int speed) {
  return speed;
}

3.
void perform_work(int time) {}
void Perform_work(int time) {}`,
    answers: [
      {
        text: "The first pair of methods will compile correctly and overload the method 'perform_work'.",
        correct: true,
      },
      {
        text: "The second pair of methods will compile correctly and overload the method 'perform_work'.",
        correct: false,
      },
      {
        text: "The third pair of methods will compile correctly and overload the method 'perform_work'.",
        correct: false,
      },
      {
        text: "The second pair of methods will not compile correctly.",
        correct: true,
      },
      {
        text: "The third pair of methods will not compile correctly.",
        correct: true,
      },
    ],
    explanation:
      "The first pair correctly overloads the method. The second pair has the same parameter list, causing a compilation error. The third pair has a case-sensitive name difference, which is not allowed.",
  },
  {
    question:
      "Is it possible to create arrays of length zero? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      {
        text: "Yes, you can create arrays of any type with length zero.",
        correct: true,
      },
      { text: "Yes, but only for primitive datatypes.", correct: false },
      {
        text: "Yes, but only for arrays of object references.",
        correct: false,
      },
      { text: "Yes, and it is same as a null array.", correct: false },
      {
        text: "No, arrays of length zero do not exist in Java.",
        correct: false,
      },
    ],
    explanation: "Arrays of length zero can be created for any type in Java.",
  },
  {
    question:
      "What will be the result of compiling and running the following program? <br><br>(Choose 1 answer)",
    code: `public class ExceptionTest {
  public static void main(String[] args) throws Exception {
    try {
      m2();
    }
    finally {
      m3();
    }
    catch(Exception e) {}
  }

  public static void m2() throws Exception {
    throw new Exception("from m2");
  }

  public static void m3() throws Exception {
    throw new Exception("from m3");
  }

}`,
    answers: [
      {
        text: "It will print an exception stack trace with message from m2 when run.",
        correct: false,
      },
      {
        text: "It will print an exception stack trace with message 'from m3' when run.",
        correct: false,
      },
      { text: "It will not print anything when run.", correct: false },
      { text: "It will not compile.", correct: true },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The code will not compile because the catch block is incorrectly placed after the finally block.",
  },
  {
    question: "What is meant by 'encapsulation'? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "There is no way to access member variables.", correct: false },
      { text: "There are no member variables.", correct: false },
      {
        text: "Member fields are declared private and public accessor/mutator methods are provided to access and change their values if needed.",
        correct: true,
      },
      {
        text: "Data fields are declared public and accessor methods are provided to access and change their values.",
        correct: false,
      },
    ],
    explanation:
      "Encapsulation involves declaring member fields as private and providing public accessor and mutator methods to access and modify them.",
  },
  {
    question:
      "What will the following code print when compiled and run? <br><br>(Choose 1 answer)",
    code: `public class Account {
  double balance;
  public void update(int[] balances2) {
    balances2[0] = 100;
    balances2[1] = 200;
  }

  public static void main(String[] args) {
    int[] balances1 = new int[2];
    balances1[0] = 10;
    balances1[1] = 20;
    for (int bal: balances1) {
      System.out.print(bal + " ");
    }
    Account a = new Account();
    a.update(balances1);
    for (int bal: balances1) {
      System.out.print(bal + " ");
    }
  }
}`,
    answers: [
      { text: "10 20 100 200", correct: true },
      { text: "10 20 10 20", correct: false },
      { text: "Compilation failure", correct: false },
      { text: "An exception will be thrown at run time.", correct: false },
    ],
    explanation:
      "The update method modifies the elements of the array, so the output is '10 20 100 200'.",
  },
  {
    question:
      "What will be the result of attempting to compile and run the following code? <br><br>(Choose 1 answer)",
    code: `public class PromotionTest {
  public static void main(String args[]) {
    int i = 5;
    float f = 5.5f;
    double d = 3.8;
    char c = 'a';
    if (i == f) c++;
    if (((int)(f + d)) == ((int) f + (int) d)) c += 2;
    System.out.println(c);
  }
}`,
    answers: [
      { text: "The code will fail to compile.", correct: false },
      { text: "It will print d.", correct: false },
      { text: "It will print c.", correct: false },
      { text: "It will print b", correct: true },
      { text: "It will print a.", correct: false },
    ],
    explanation:
      "The condition 'i == f' is false, so c is not incremented. The second condition is true, so c is incremented by 2, resulting in 'b'.",
  },
  {
    question: "What is meant by 'encapsulation'? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "There is no way to access member variable.", correct: false },
      { text: "There are no member variables.", correct: false },
      {
        text: "Member fields are declared private and public accessor/mutator methods are provided to access and change their values if needed.",
        correct: true,
      },
      {
        text: "Data fields are declared public and accessor methods are provided to access and change their values.",
        correct: false,
      },
    ],
    explanation:
      "Encapsulation involves declaring member fields as private and providing public accessor and mutator methods to access and modify them.",
  },
  {
    question:
      "Assuming that the following are the complete contents of TestClass.java file, what will be result of attempting to compile this file? <br><br>(Choose 1 answer)",
    code: `import java.util. * ;
package test;
public class TestClass {
  public OtherClass oc = new OtherClass();
}
class OtherClass {
  int value;
}`,
    answers: [
      {
        text: "The class will fail to compile, since the class OtherClass is used before it is defined.",
        correct: false,
      },
      { text: "There is no problem with the code.", correct: false },
      {
        text: "The class will fail to compile, since the class OtherClass must be defined in a file called OtherClass.java",
        correct: false,
      },
      { text: "The class will fail to compile.", correct: true },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The code will not compile because the package statement must be the first statement in the file.",
  },
  {
    question:
      "In which of these variable declarations, will the variable remain uninitialized unless explicitly initialized? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      {
        text: "Declaration of an instance variable of type int.",
        correct: false,
      },
      {
        text: "Declaration of a static class variable of type float.",
        correct: false,
      },
      { text: "Declaration of a local variable of type float.", correct: true },
      {
        text: "Declaration of a static class variable of class Object",
        correct: false,
      },
      {
        text: "Declaration of an instance variable of class Object.",
        correct: false,
      },
    ],
    explanation:
      "Local variables must be explicitly initialized before use, unlike instance and static variables which have default values.",
  },
  {
    question:
      "You have been given an array of objects and you need to process this array as follows - 1. Call a method on each object from first to last one by one. 2. Call a method on each object from last to first one by one. 3. Call a method on only those objects at even index (0, 2, 4, 6, etc.) Which of the following are correct? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      {
        text: "Enhanced for loops can be used for all the three tasks.",
        correct: false,
      },
      {
        text: "Enhanced for loop can be used for only the first task. For the rest, standard for loops can be used.",
        correct: true,
      },
      {
        text: "Standard for loops can be used for tasks 1 and 2 but not 3.",
        correct: false,
      },
      {
        text: "All the tasks can be performed either by using only standard for loops or by using only enhanced for loops.",
        correct: false,
      },
      {
        text: "Neither standard for loops nor enhanced for loops can be used for all three tasks.",
        correct: false,
      },
    ],
    explanation:
      "Enhanced for loops can only iterate from first to last. Standard for loops are needed for reverse iteration and accessing specific indices.",
  },
  {
    question:
      "Which of the following will not give any error at compile time and run time? <br><br>(Choose 4 answers)",
    code: ``,
    answers: [
      { text: "if (8 == 81) {}", correct: true },
      {
        text: "if (x = 3) {} // assume that x is defined as an int",
        correct: false,
      },
      { text: "if (true) {}", correct: true },
      {
        text: "if (bool = false) {}  //assume that bool is declared as a boolean",
        correct: true,
      },
      {
        text: "if (x == 10 ? true:false) { } // assume that x is an int",
        correct: true,
      },
    ],
    explanation:
      "The first, third, and fifth statements are valid. The second statement is invalid because it uses assignment instead of comparison.",
  },
  {
    question:
      "What will happen if you try to compile and run the following program? <br><br>(Choose 2 answers)",
    code: `public class TestClass {
  public static void main(String[] args) {
    calculate(2);
  }
  public static void calculate(int x) {
    String val;
    switch (x) {
    case 2:
    default:
      val = "def";
    }
    System.out.println(val);
  }
}`,
    answers: [
      {
        text: "It will not compile saying that variable val may not have been initialized..",
        correct: true,
      },
      { text: "It will compile and print def when run.", correct: false },
      {
        text: "As such it will not compile but it will compile if calculate(2); is replaced with calculate(3);",
        correct: false,
      },
      {
        text: "It will compile for any int value passed in the call to calculate() method.",
        correct: false,
      },
    ],
    explanation:
      "The variable 'val' may not be initialized if the switch statement does not execute any case, leading to a compilation error.",
  },
  {
    question:
      "Consider the following TestClass.java file in the current directory. Which of the following command lines should be used for compiling if the generated class file is to be executed using the following command line: java -classpath . a.a.a.TestClass <br><br>(Choose 1 answer)",
    code: `package a.a.a;
public class TestClass {
  public static void main(String[] args) {
    System.out.println("Good!!!");
  }
}`,
    answers: [
      { text: "java TestClass.java", correct: false },
      { text: "javac -d  a.a.a  TestClass.java", correct: false },
      { text: "javac -d . TestClass.java", correct: true },
      { text: "javac -d ../a  TestClass.java", correct: false },
      { text: "java -d TestClass.java", correct: false },
    ],
    explanation:
      "The '-d .' option specifies the root directory for the package structure, allowing the class to be executed with the specified command.",
  },
  {
    question: "What will the following code print? <br><br>(Choose 1 answer)",
    code: `void crazyLoop() {
  int c = 0;
  JACK: while (c < 8) {
    JILL: System.out.println(c);
    if (c > 3) break JACK;
    else c++;
  }
}`,
    answers: [
      { text: "It will not compile.", correct: false },
      { text: "It will throw an exception at runtime.", correct: false },
      { text: "It will print numbers from 0 to 8", correct: false },
      { text: "It will print numbers from 0 to 3", correct: false },
      { text: "It will print numbers from 0 to 4", correct: true },
    ],
    explanation:
      "The loop prints numbers from 0 to 4. When c becomes 4, the condition 'c > 3' is true, and the loop breaks.",
  },
  {
    question:
      "Which of the following are char literals? <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      { text: "'a'", correct: true },
      { text: "'\\n'", correct: true },
      { text: "'\\uDEAF'", correct: true },
      { text: "/a/", correct: false },
      { text: '"a"', correct: false },
    ],
    explanation:
      "The first three options are valid char literals. '/a/' is not a valid char literal, and '\"a\"' is a String literal.",
  },
  {
    question:
      "What will the following program snippet print? <br><br>(Choose 1 answer)",
    code: `int i = 0,
j = 11;
do {
  if (i > j) {
    break;
  }
  j--;
} while (++ i < 5 );
System.out.println(i + "  " + j);`,
    answers: [
      { text: "5 5", correct: false },
      { text: "5 6", correct: true },
      { text: "6 6", correct: false },
      { text: "6 5", correct: false },
      { text: "4 5", correct: false },
    ],
    explanation:
      "The loop runs until i is 5. At that point, j is decremented to 6, and the loop exits, printing '5 6'.",
  },
  {
    question:
      "Consider the following method... Which of the following statements are correct? <br><br>(Choose 3 answers)",
    code: `public void ifTest(boolean flag)
{
   if (flag)   //1
   if (flag)   //2
   System .out.println("True False");
   else        // 3
   System.out.println("True True");
   else        // 4
   System.out.println("False False");
}`,
    answers: [
      {
        text: "If run with an argument of 'false', it will print 'False False'",
        correct: true,
      },
      {
        text: "If run with an argument of 'false', it will print 'True True'",
        correct: false,
      },
      {
        text: "If run with an argument of 'true', it will print 'True False'",
        correct: true,
      },
      { text: "It will never print 'True True'", correct: true },
      { text: "It will not compile.", correct: false },
    ],
    explanation:
      "The nested if-else structure is not properly aligned. The 'else' at line 3 is associated with the second 'if' at line 2, not the first 'if' at line 1. Therefore, if the method is called with 'false', the outer 'if' is false, and 'False False' is printed. If called with 'true', the inner 'if' is true, and 'True False' is printed. The 'True True' statement is unreachable.",
  },
  {
    question:
      "What is the result of the following code snippet? <br><br>(Choose 1 answer)",
    code: `int a = 5,  b = 2, c = 30;
  System.out.println( (a + b)-- * c  );`,
    answers: [
      { text: "180", correct: false },
      { text: "210", correct: false },
      { text: "Compilation failure", correct: true },
      { text: "Exception at run time", correct: false },
    ],
    explanation:
      "The code will not compile because the post-decrement operator '--' cannot be applied to the result of an expression.",
  },
  {
    question: "What happens when calling the following method with a non?null and non?empty array? <br><br>(Choose 1 answer)",
    code: `public static void addStationName(String[] names) {
    names[names.length] = "Times Square";
}`,
    answers: [
      { text: "It adds an element to the array the value of which is Times Square.", correct: false },
      { text: "It replaces the last element in the array with the value Times Square.", correct: false },
      { text: "It does not compile.", correct: false },
      { text: "It throws an exception.", correct: true },
      { text: "None of the above.", correct: false },
    ],
    explanation: "The code snippet you provided will throw an ArrayIndexOutOfBoundsException. This happens because the array names has a fixed size determined when it was created, and you are trying to access an index that is outside of its bounds.",
  },
  {
    question: "Which is not a true statement about an array? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "An array expands automatically when it is full.", correct: true },
      { text: "An array is allowed to contain duplicate values.", correct: false },
      { text: "An array understands the concept of ordered elements.", correct: false },
      { text: "An array uses a zero index to reference the first element.", correct: false },
      { text: "None of the above", correct: false },
      { text: "All of the above", correct: false },
    ],
    explanation: "",
  },
  {
    question: "How many lines does the following code output? <br><br>(Choose 1 answer)",
    code: `var days = new String[] { "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday" };
for (int 1 = 1; 1 <= days.length; 1++)
        System.out.println(days[i]);`,
    answers: [
      { text: "Six", correct: false },
      { text: "Seven", correct: false },
      { text: "The code does not compile", correct: false },
      { text: "The code compiles but throws an exception at runtime.", correct: true },
      { text: "None of the above", correct: false },
    ],
    explanation: "If the loop condition is set to i <= days.length, it will throw an ArrayIndexOutOfBoundsException at runtime when i equals the length of the array, as that index is out of bounds.",
  },
  {
    question: "What is the output of the following when run as FirstName Wolfie? <br><br>(Choose 2 answers)",
    code: `public class FirstName {
    public static void main(String[] names) {
        System.out.println(names[8]);
        System.out.println(names[1]);

    }
}`,
    answers: [
      { text: "FirstName", correct: false },
      { text: "Wolfie", correct: true },
      { text: "The code throws an ArraylndexOutOfBoundsException", correct: true },
      { text: "The code throws a NullPointerException", correct: false },
      { text: "None", correct: false },
    ],
    explanation: `The names array will only contain one element: names[0], which is "Wolfie". Since there are no elements at indices 1 or 8, the program will throw an ArrayIndexOutOfBoundsException when trying to access names[8]. The output will indicate that index 8 is out of bounds, and the program will terminate before reaching the second print statement.`,
  },
  {
    question: "What will be the output of the following program? <br><br>(Choose 1 answer)",
    code: `public class Test {
    public static void main(String[] args) {
        int val = 10;
        System.out.printf("%d", (val << 2));
    }
}`,
    answers: [
      { text: "32", correct: false },
      { text: "40", correct: true },
      { text: "8", correct: false },
      { text: "45", correct: false },
      { text: "Syntax Error", correct: false },
    ],
    explanation: `The code defines a variable val with a value of 10 and uses the left shift operator (<<) to shift its bits two places to the left. This operation multiplies val by 2^2, resulting in 10*4, which equals 40. The program then prints this result, so the output will be "40".`,
  },
  {
    question: "What are the various methods provided by the String class? <br><br>(Choose all that apply)",
    code: ``,
    answers: [
      { text: "join", correct: true },
      { text: "split", correct: true },
      { text: "length", correct: true },
      { text: "intern", correct: true },
      { text: "substring", correct: true },
    ],
    explanation: "The Join() method in the String class is used to concatenate multiple strings into a single string, using a specified delimiter. It is a useful method for combining string values In Java.<br><br>The split() method in the String class is used to split a string into an array of substrings based on a specified delimiter. It is commonly used for parsing and processing string data in Java.<br><br>The length() method in the String class is used to return the length of the string, which is the number of characters it contains. It is a fundamental method for obtaining information about the size of a string in Java.<br><br>The intern() method in the String class is used to return the canonical representation of the string object. It is typically used for string pooling and memory optimization in Java applications.<br><br>The substring() method in the String class is used to extract a substring from a given string, based on specified starting and ending indexes. It is commonly used for manipulating and extracting portions of string data in Java.",
  },
  {
    question: "What will be the output of the following program? <br><br>(Choose 1 answer)",
    code: `public class Test {
    public static void main(String[] args) {
        int val = 10;
        for (; val > 0; val--) {
            if(val == 1){
                val = 10;
                System.out.println("10 ");
            }
        }
        System.out.println("Value is 10");
    }
}`,
    answers: [
      { text: "Value is 10", correct: false },
      { text: "10", correct: false },
      { text: "infinite loop", correct: true },
      { text: "compile-time error", correct: false },
      { text: "run-time error", correct: false },
      { text: "0", correct: false },
    ],
    explanation: `The code initializes val to 10 and enters a loop that continues while val is greater than 0. When val reaches 1, it resets to 10 and prints "10 ". This creates an infinite loop, so the program will continuously print "10 " without ever terminating or reaching the line that prints "Value is 10."`,
  },
  {
    question: "What will be returned by the following method? <br><br>(Choose 1 answer)",
    code: `String joinStr(){
    String str = "";
    int index = 0;
    ArrayList<Character> arrayList = new ArrayList<>(Arrays.asList('h', 'e', 'l', 'l', 'o'));

    for (char ele: arrayList) {
        if(index %2 == 0) {
            str += ele;
        }
        index++;
    }
    return str;
}`,
    answers: [
      { text: "olh", correct: false },
      { text: "olleh", correct: false },
      { text: "el", correct: false },
      { text: "heo", correct: false },
      { text: "hello", correct: false },
      { text: "hlo", correct: true },
    ],
    explanation: `The method joinStr initializes an empty string str and an index variable set to 0. It creates an ArrayList with the characters 'h', 'e', 'l', 'l', and 'o'. As it iterates through the list, it appends characters to str only when the index is even. This results in the inclusion of 'h', 'l', and 'o', while 'e' and the second 'l' are excluded. Therefore, the method returns the string "hlo".`,
  },
  {
    question: "Which of the following methods is not part of the Math class? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "exp()", correct: false },
      { text: "cosh()", correct: false },
      { text: "signum()", correct: false },
      { text: "calculate()", correct: true },
      { text: "negateExact()", correct: false },
      { text: "hypot()", correct: false },
    ],
    explanation: "",
  },
  {
    question: "Which of them is not a primitive data type in Java? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "Integer", correct: false },
      { text: "Strings", correct: true },
      { text: "Float", correct: false },
      { text: "Character", correct: false },
      { text: "Boolean", correct: false },
      { text: "Arrays", correct: true },
    ],
    explanation: "",
  },
  {
    question: "What will be the output of the following program? <br><br>(Choose 1 answer)",
    code: `public class Test{
    public static void  main(String[] args) {
        int a = 1;
        if (a++ == 1) {
            a -= 1;
        }
        System.out.println(a);
    }
}`,
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "-1", correct: false },
      { text: "-2", correct: false },
      { text: "11", correct: false },
    ],
    explanation: `In this code, the variable a is initialized to 1. The condition in the if statement checks a++ == 1, which evaluates to true because a is 1 before it increments. As a result, the code inside the if block executes, decrementing a back to 1. Therefore, when the program prints the value of a, the output will be "1".`,
  },
  {
    question: "Static methods can be overridden.",
    code: ``,
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
    explanation: "Static methods cannot be overridden in Java. They belong to the class itself rather than to instances, so they can only be hidden if a subclass defines a static method with the same name and signature. This is different from overriding, which applies to instance methods. When calling a static method, the version that executes is determined by the reference type, not the object type.",
  },
  {
    question: "What are the different types of typecasting available in Java? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "linear", correct: false },
      { text: "implicit", correct: true },
      { text: "ordered", correct: false },
      { text: "unordered", correct: false },
      { text: "binary", correct: false },
      { text: "explicit", correct: true },
    ],
    explanation: "In Java, there are two types of typecasting for primitive types. The first is widening casting, also known as implicit casting, which occurs when converting a smaller primitive type to a larger one, such as converting an int to a long or a float to a double. This process happens automatically without the need for explicit casting, as there is no risk of data loss.<br><br>The second type is narrowing casting, or explicit casting, which involves converting a larger primitive type to a smaller one, such as converting a double to an int or a long to a short. This type of casting requires explicit notation to indicate the desired target type, as it may result in data loss.",
  },
  {
    question: "Private access modifier is applicable only within a same class.",
    code: ``,
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
    explanation: "The private access modifier in Java restricts access to the members (fields, methods, and constructors) of a class so that they can only be accessed within that same class. This means that private members are not accessible from outside the class, including from subclasses or other classes in the same package. This encapsulation helps to protect the internal state of an object and ensures that the implementation details are hidden from other classes.",
  },
  {
    question: "What will be the output of the following code? <br><br>(Choose 1 answer)",
    code: `public class Test {

    public static void main(String[] args) {
        String[] arr = {"Abc", "e", "fhl", "mnop"};
        String str = "";

        for(int i = 0; i < arr.length; i++){
            if (i/2 == 0){
                str = str + " ";
            }
            else {
                str = str + arr[i];
            }
        }
        System.out.println(str.charAt(5));
    }
}`,
    answers: [
      { text: "blank space", correct: false },
      { text: "A", correct: false },
      { text: "f", correct: false },
      { text: "p", correct: false },
      { text: "e", correct: false },
      { text: "m", correct: true },
    ],
    explanation: `The code initializes an array arr with the values {"Abc", "e", "fhl", "mnop"} and creates an empty string str. It iterates through the array, appending a space for index 0 and adding elements for indices 1, 2, and 3.<br><br>By the end of the loop, str contains " efhlmnop". The program then prints the character at index 5, which is 'm'. Thus, the output of the program will be "m".`,
  },
  {
    question: "What will be the output of the following code? <br><br>(Choose 1 answer)",
    code: `public class Test {

    public static void main(String[] args) {
        String str1 = "mnop";
        String str2 = "mop";

        for(int i = 0; i < str1.length() - 1; i++){
            if (str1.charAt(i) != str2.charAt(i)) {
                System.out.print(str1.charAt(i));
            }
        }
    }
}`,
    answers: [
      { text: "no", correct: true },
      { text: "mn", correct: false },
      { text: "op", correct: false },
      { text: "mop", correct: false },
      { text: "mo", correct: false },
      { text: "mp", correct: false },
    ],
    explanation: `The code initializes two strings, str1 with the value "mnop" and str2 with the value "mop". It then uses a for loop to iterate over the indices of str1 up to its length minus one.<br><br>During the iteration, at index 0, the characters from both strings are 'm', so nothing is printed. At index 1, the characters are 'n' from str1 and 'o' from str2, which are not equal, leading to the printing of 'n'. At index 2, the characters are 'o' from str1 and 'p' from str2, which are also not equal, resulting in the printing of 'o'.<br><br>Consequently, the characters printed are 'n' and 'o', and the output of the program will be "no".`,
  },
  {
    question: "Which of the following data structure is used to store data in key-value format? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "Trees", correct: false },
      { text: "Graphs", correct: false },
      { text: "Hashmap", correct: true },
      { text: "LinkedList", correct: false },
      { text: "Queue", correct: false },
      { text: "Stack", correct: false },
    ],
    explanation: "A HashMap allows you to associate unique keys with values, enabling efficient retrieval of values based on their corresponding keys. The other options listed—Trees, Graphs, LinkedList, Queue, and Stack—do not store data in a key-value format.",
  },
  {
    question: "What will be the output of the following code? <br><br>(Choose 1 answer)",
    code: `public class Test {

    public static void main(String[] args) {

        int b = 5;
        final int a = --b + b--;
        b--;
        System.out.println(a);
    }
}`,
    answers: [
      { text: "6", correct: false },
      { text: "2", correct: false },
      { text: "7", correct: false },
      { text: "5", correct: false },
      { text: "0", correct: false },
      { text: "8", correct: true },
    ],
    explanation: "In the code, the variable b is initialized to 5. The expression --b + b-- is evaluated, where --b decrements b to 4 and evaluates to 4, while b-- evaluates to 4 before decrementing b to 3. This results in the expression equaling 8, which is assigned to the final variable a. After this, b is decremented to 2, but this does not affect a. <br><br>Therefore, the program prints the value of a, which is 8.",
  },
  {
    question: "The final keyword in Java can be used with which of the following in Java?",
    code: ``,
    answers: [
      { text: "variables", correct: false },
      { text: "objects", correct: false },
      { text: "methods", correct: false },
      { text: "classes", correct: false },
      { text: "All of the above", correct: true },
      { text: "None of the above", correct: false },
    ],
    explanation: "The final keyword in Java can be used with all of the above options: variables, objects, methods, and classes.<br><br>When a variable is declared as final, it cannot be reassigned after initialization. Although you cannot make an object itself final, you can declare a reference to an object as final, meaning that reference cannot point to a different object. Additionally, a final method cannot be overridden by subclasses, and a final class cannot be subclassed. Therefore, the final keyword serves multiple purposes in Java.",
  },
  {
    question: "What will be the outpouf tth e following code? <br><br>(Choose 1 answer)",
    code: `import java.util.Arrays;

public class Test {
    public static void main(String[] args){

        int[] arr = {5, 6, 5, 20, 50, 23, 45};
        Arrays.fill(arr, 2);

        System.out.print(arr[4]);
    }
}`,
    answers: [
      { text: "23", correct: false },
      { text: "6", correct: false },
      { text: "50", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "20", correct: false },
    ],
    explanation: `In this code, an integer array arr is initialized with the values {5, 6, 5, 20, 50, 23, 45}. The Arrays.fill(arr, 2); method fills the entire array with the value 2, resulting in {2, 2, 2, 2, 2, 2, 2}. The code then prints the value at index 4, which is 2. <br><br>Therefore, the output of the program will be "2".`,
  },
  {
    question: "Which of these are features of Java? <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      { text: "Object Oriented", correct: true },
      { text: "Platform Independent", correct: true },
      { text: "Context Independent", correct: false },
      { text: "Single Threaded", correct: false },
      { text: "Multi Threaded", correct: true },
    ],
    explanation: "Object Oriented: Java is designed to support object-oriented programming principles such as encapsulation, inheritance, and polymorphism.<br><br>Platform Independent: Java is platform-independent at the bytecode level, meaning that Java programs can run on any platform that has a Java Virtual Machine (JVM).<br><br>Multi Threaded: Java supports multi-threading, allowing concurrent execution of two or more threads, which helps in efficient use of resources.",
  },
  {
    question: "In Object-Oriented Programming, what is the blueprint, or prototype of from which objects are created? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "Class", correct: true },
      { text: "Instance", correct: false },
      { text: "Struct", correct: false },
      { text: "Type", correct: false },
      { text: "Variable", correct: false },
    ],
    explanation: "A class defines the properties and behaviors (methods) that the objects instantiated from it will have. Instances of the class represent specific objects created based on that blueprint.",
  },
  {
    question: "Consider the following code snippet.Which Object-Oriented Programming concept is this an example of? <br><br>(Choose 1 answer)",
    code: `class MountainBike extends Bicycle {
}`,
    answers: [
      { text: "Composition", correct: false },
      { text: "Encapsulation", correct: false },
      { text: "Idempotency", correct: false },
      { text: "Inheritance", correct: true },
    ],
    explanation: "The provided code snippet is an example of inheritance in Object-Oriented Programming (OOP). In this case, MountainBike is a subclass (or derived class) that inherits properties and behaviors from the Bicycle superclass (or base class). This allows MountainBike to reuse and extend the functionality of Bicycle.",
  },
  {
    question: "Fill in the blank:<br><br>A ______ is a namespace for organizing classes an CORRECT interfaces in a logical manner. <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "Container", correct: false },
      { text: "Dependency", correct: false },
      { text: "JAR File", correct: false },
      { text: "Package", correct: true },
    ],
    explanation: "A package in programming serves as a namespace that organizes related classes and interfaces in a logical manner. By grouping them into packages, it helps avoid naming conflicts and improves code modularity and readability. <br><br>For example, in Java, packages can contain multiple classes and interfaces, making it easier to manage large codebases. This concept is fundamental in structuring software projects efficiently.",
  },
  {
    question: "You have created a simple Java program in a file called hellojava With the following code. Which command can be used to compile this program, converting it into bytecodes, which are platformindependent instructions for the Java VM? <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args){
        System.out.println("Hello Java");
    }
}`,
    answers: [
      { text: "java hello.java", correct: false },
      { text: "java -c hello.java", correct: false },
      { text: "java -jar hello.java", correct: false },
      { text: "javac hello.java", correct: true },
    ],
    explanation: "This command uses the Java compiler (javac) to compile the Java source code in hello.java into bytecode, which can then be executed by the Java Virtual Machine (JVM).",
  },
  {
    question: "Following the Java naming conventions, which of the following should begin with an upper case letter? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "classes", correct: true },
      { text: "interfaces", correct: true },
      { text: "local variables", correct: false },
      { text: "packages", correct: false },
      { text: "private methods", correct: false },
      { text: "public methods", correct: false },
    ],
    explanation: "Classes and interfaces are typically named using CamelCase, starting with an uppercase letter. Local variables, packages, private methods, and public methods usually start with a lowercase letter.",
  },
  {
    question: "Which of these is NOT a Java reserved word? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "default", correct: false },
      { text: "object", correct: true },
      { text: "import", correct: false },
      { text: "new", correct: false },
      { text: "All of these are Java reserved words", correct: false },
    ],
    explanation: `In Java, "default," "import," and "new" are all reserved words (keywords) with specific meanings in the language, while "object" is not a reserved word in Java.`,
  },
  {
    question: "Which of the following statements are TRUE about the javalang package? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "It provides classes that are fundamental to the design of the Java programming language, like Object, Class, and primitive wrapper classes like Boolean, Integer, and Float.", correct: true },
      { text: "It provides classes that enable Java programs to provide localization of text for multi-language support", correct: false },
      { text: "It provides classes that allow Java to call functions exported by programs written in other languages and provides the capability to export Java program functions for use by programs written in other programming languages.", correct: false },
      { text: "None of these statements are true", correct: false },
    ],
    explanation: "The other options refer to functionalities provided by different packages, such as java.util for localization or JNI for calling functions from other languages.",
  },
  {
    question: "You are writing a Java program and need to declare a variable called 'myvar' that can store an integer value, and you also want to assign to it the value of '5'. Which line of code should you use? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "int myvar = 5;", correct: true },
      { text: "integer myvar = 5;", correct: false },
      { text: "myvar int = 5;", correct: false },
      { text: "myvar integer = 5;", correct: false },
    ],
    explanation: "",
  },
  {
    question: "You are working on a Java project and see the following line of code within a function:<br><br>final int rate = 5;<br><br>What does the keyword 'final' do? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "A compile-time error will occur if another line of code attempts to assign a value to the rate variable.", correct: true },
      { text: "A compile-time warning will occur if another line of code attempts to assign a value to the rate variable.", correct: false },
      { text: "A runtime error will occur if another line of code attempts to assign a value to the rate variable.", correct: false },
      { text: "A runtime warning will occur if another line of code attempts to assign a value to the rate variable.", correct: false },
    ],
    explanation: "When a variable is declared as final, it means that its value cannot be changed after it has been initialized. Any attempt to reassign a value to that variable will result in a compile-time error.",
  },
  {
    question: "Which of the following are primitive datatypes in Java? <br><br>(Choose 5 answers)",
    code: ``,
    answers: [
      { text: "bool", correct: false },
      { text: "boolean", correct: true },
      { text: "byte", correct: true },
      { text: "char", correct: true },
      { text: "date", correct: false },
      { text: "double", correct: true },
      { text: "int", correct: true },
    ],
    explanation: "",
  },
  {
    question: "Which of the following lists arrange data types from smallest capacity to largest capacity? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "short, byte, int, long", correct: false },
      { text: "byte, short, long, int", correct: false },
      { text: "byte, int, short, long", correct: false },
      { text: "byte, short, int, long", correct: true },
    ],
    explanation: "This arrangement correctly reflects the increasing capacity of these data types in Java, where:<br><br>byte: 8 bits<br><br>short: 16 bits<br><br>int: 32 bits<br><br>long: 64 bits",
  },
  {
    question: "You need to store the value of 128 in a variable. Which data type can be used? <br><br>(Choose 3 answers)",
    code: ``,
    answers: [
      { text: "boolean", correct: false },
      { text: "byte", correct: false },
      { text: "short", correct: true },
      { text: "int", correct: true },
      { text: "long", correct: true },
    ],
    explanation: "boolean can only store true or false<br><br>byte has a minimum value of -128 and a maximum value of 127 (inclusive)<br><br>short has a minimum value of -32,768 and a maximum value of 32,767 (inclusive)<br><br>int has a minimum value of -2^31 and a maximum value of 2^31 - 1<br><br>long can hold values from -2^63 to 2^63 - 1.",
  },
  {
    question: "You are writing a Java function that has the following code:<br><br>short a = 1;<br>short b = 2;<br>// Line 3<br><br>What can you put at //Line 3 to add the two variables a and b and store the result in another variable c? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "A) short c = a + b;", correct: false },
      { text: "B) int c = a + b;", correct: true },
      { text: "C) short c = (short)(a + b);", correct: true },
      { text: "D) short c = (short)a + (short)b;", correct: false },
    ],
    explanation: "B) uses an int for c, which can hold the result without any issues, as the addition of two short values is promoted to int.<br><br>C) explicitly casts the result of the addition back to short, which is safe because the sum of 1 and 2 will not exceed the range of a short",
  },
  {
    question: "What will be the output of the following Java program? <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args) {
        int a = 5;
        int b = a++;
        System.out.println(b);
    }
}`,
    answers: [
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false },
      { text: "This programm will not compile", correct: false },
      { text: "This program will fail witha runtime error", correct: false },
    ],
    explanation: "In the code, the variable a is initialized with the value 5. When the statement int b = a++; is executed, the post-increment operator (++) is used. This means that the current value of a (which is 5) is assigned to the variable b first. After this assignment, the value of a is then incremented by 1, resulting in a becoming 6.<br><br>As a result, when the program executes the line System.out.println(b);, it prints the value of b, which is 5.",
  },
  {
    question: "What will be the output of the following Java program? <br><br>(Choose 2 answers)",
    code: `class ExamPrep {
    public static void main(String[] args) {
        int a = 5;
        int b = ++a;
        System.out.println(b);
    }
}`,
    answers: [
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: true },
      { text: "This programm will not compile", correct: false },
      { text: "This program will fail witha runtime error", correct: false },
    ],
    explanation: "In the code, the variable a is initialized with the value 5. When the statement int b = ++a; is executed, the pre-increment operator (++) is used. This means that a is incremented by 1 before its value is assigned to b. As a result, a becomes 6, and then this value is assigned to b.<br><br>Therefore, when the program reaches the line System.out.println(b);, it prints the value of b, which is 6.",
  },
  {
    question: "Which code block will print ves if the value of a and v are equal? <br><br>(Choose 1 answer)",
    code: `A)
if (a=b){
    System.out.println("Yes");
}

B)
if (a==b){
    System.out.println("Yes");
}

C)
if (a===b){
    System.out.println("Yes");
}

D)
if (a instanceof b){
    System.out.println("Yes");
}`,
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "C", correct: false },
      { text: "D", correct: false },
    ],
    explanation: `Code block B uses the double equals sign (==) to compare the values of a and b. If they are equal, it will print "Yes".<br><br>The other options are incorrect because they either use an assignment operator, a non-existent comparison operator, or check types instead of values.`,
  },
  {
    question: "You have a variable : defined like this:<br><br>int a = 5;<br><br>Which lines of code can you use to decrement a by 1? <br><br>(Choose all that apply)",
    code: ``,
    answers: [
      { text: "--a;", correct: true },
      { text: "a--;", correct: true },
      { text: "a -= 1;", correct: true },
      { text: "a =- 1;", correct: false },
      { text: "a = a - 1", correct: true },
    ],
    explanation: "",
  },
  {
    question: "What is the output of the following program? <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args){
        int a = 4;
        int b = 3;
        int result = a < b ? 1 : 2;
        System.out.println(result);
    }
}`,
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "This code will not compile", correct: false },
      { text: "This code will fail with an exception at runtime", correct: false },
    ],
    explanation: "In this code, the variables a and b are initialized with the values 4 and 3, respectively. The expression a < b ? 1 : 2 is a ternary conditional operator that evaluates whether a is less than b. Since 4 is not less than 3, the condition evaluates to false, and the expression returns 2.",
  },
  {
    question: "What is the output of the following program? <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args){
        int a = 1;
        int b = 2;
        int c = 3;
        boolean result = a < b && b > c;
        System.out.println(result);
    }
}`,
    answers: [
      { text: "true", correct: false },
      { text: "false", correct: true },
      { text: "This code will not compile", correct: false },
      { text: "This code will fail with an exception at runtime", correct: false },
    ],
    explanation: "In the code, a is 1, b is 2, and c is 3. The expression a < b && b > c evaluates two conditions: a < b is true, but b > c is false. Since both conditions must be true for the entire expression to be true, the result is false.",
  },
  {
    question: "What is the output of the following program? <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args){
        int a = 1;
        int b = 2;
        int c = 3;
        boolean result = a < b || b > c;
        System.out.println(result);
    }
}`,
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "This code will not compile", correct: false },
      { text: "This code will fail with an exception at runtime", correct: false },
    ],
    explanation: "In this code, the variables are initialized as follows: a is 1, b is 2, and c is 3. The expression a < b || b > c uses the logical OR operator (||).<br><br>The first condition, a < b, evaluates to true because 1 is less than 2. The second condition, b > c, evaluates to false because 2 is not greater than 3. Since the logical OR operator only requires one of the conditions to be true for the entire expression to be true, the result is true",
  },
  {
    question: "What can you put at line 4 so that the output of the program will be 10? <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args){
        int a = 3;
        // LINE 4
        System.out.println(result);
    }
}`,
    answers: [
      { text: "A) int result = a + 2 * a - 1;", correct: false },
      { text: "B) int result = (a + 2) * (a - 1);", correct: true },
      { text: "C) int result = (a + 2 * a) - 1;", correct: false },
      { text: "D) int result = a + (2 * a - 1);", correct: false },
    ],
    explanation: "To ensure that the output of the program is 10, you can use B) as the code at line 4. The expression (a + 2) * (a - 1) evaluates to (3 + 2) * (3 - 1) = 10. Therefore, the output of the program will be 10.",
  },
  {
    question: "What can you put at line 4 so that the output of the program will be 'v'? <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args){
        String s = "Java";
        //LINE 4
        System.out.println(result);
    }
}`,
    answers: [
      { text: "char result = s[2];", correct: false },
      { text: "char result = s[3];", correct: false },
      { text: "char result = s.charAt(2);", correct: true },
      { text: "char result = s.charAt(3);", correct: false },
    ],
    explanation: `In the string s, which is initialized as "Java", the characters are indexed as follows: s.charAt(0) is 'J', s.charAt(1) is 'a', s.charAt(2) is 'v', and s.charAt(3) is 'a'. By using s.charAt(2), you correctly retrieve the character 'v'.`,
  },
  {
    question: "What can you put at line 4 so that the output of the program will be 'av'? <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args){
        String s = "Java";
        //LINE 4
        System.out.println(result);
    }
}`,
    answers: [
      { text: "String result = s.split(1, 2);", correct: false },
      { text: "String result = s.split(1, 3);", correct: false },
      { text: "String result = s.substring(1, 2);", correct: false },
      { text: "String result = s.substring(1, 3);", correct: true },
    ],
    explanation: "This line uses the substring method, where the starting index 1 corresponds to the character 'a', and the ending index 3 corresponds to the character after 'v'. As a result, it retrieves the characters 'a' and 'v', producing the output 'av'.",
  },
  {
    question: "What is the output of the following program?  <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args){
        String s = "Java";
        int result = s.indexOf("a");
        System.out.println(result);
    }
}`,
    answers: [
      { text: "-1", correct: false },
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "This program will not compile", correct: false },
      { text: "This program will fail with an exception at runtime", correct: false },
    ],
    explanation: `In this code, the string s is initialized as "Java". The method s.indexOf("a") searches for the first occurrence of the character 'a' in the string. Since the character 'a' is located at index 1, the indexOf method returns 1.`,
  },
  {
    question: "What is the output of the following program?  <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args){
        String s = "Java";
        int result = s.indexOf("x");
        System.out.println(result);
    }
}`,
    answers: [
      { text: "-1", correct: true },
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "This program will not compile", correct: false },
      { text: "This program will fail with an exception at runtime", correct: false },
    ],
    explanation: `In this code, the string s is initialized as "Java". The method s.indexOf("x") searches for the character 'x' in the string. Since 'x' is not present in "Java", the indexOf method returns -1 to indicate that the character was not found.`,
  },
  {
    question: "What is the output of the following program?  <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args){
        String s = "Java";
        int result = s.lastIndexOf("a");
        System.out.println(result);
    }
}`,
    answers: [
      { text: "-1", correct: false },
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "4", correct: false },
      { text: "This program will not compile", correct: false },
      { text: "This program will fail with an exception at runtime", correct: false },
    ],
    explanation: `In the string s, which is initialized as "Java", the last occurrence of the character 'a' is indeed at index 3. The lastIndexOf("a") method correctly identifies this position.`,
  },
  {
    question: "What is the output of the following program?  <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args) {
        String s = "Java Exam Prep";
        boolean result = s.contains("exam");
        System.out.println(result);
    }
}`,
    answers: [
      { text: "true", correct: false },
      { text: "false", correct: true },
      { text: "-1", correct: false },
      { text: "4", correct: false },
      { text: "This program will not compile", correct: false },
      { text: "This program will fail with an exception at runtime", correct: false },
    ],
    explanation: `In this code, the string s is initialized as "Java Exam Prep". The method s.contains("exam") checks if the string contains the substring "exam". Since the substring is case-sensitive and "exam" does not match the uppercase "Exam" in the string, the method returns false.`,
  },
  {
    question: "Which method of the string class returns a copy of the string converted to lowercase? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "toLower()", correct: false },
      { text: "toLowerCase()", correct: true },
      { text: "asLower()", correct: false },
      { text: "asLowerCase()", correct: false },
      { text: "lower()", correct: false },
    ],
    explanation: "The correct answer is toLowerCase(). This method is commonly used in languages like Java and JavaScript to convert a string to lowercase.",
  },
  {
    question: "Which method of the string class returns a copy of the string with leading and trailing white space removed? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "removeSpace()", correct: false },
      { text: "removeWhiteSpace()", correct: false },
      { text: "split()", correct: false },
      { text: "trim()", correct: true },
      { text: "withoutSpace()", correct: false },
    ],
    explanation: "",
  },
  {
    question: "What can you add at LINE 5 to make the program print 'JavaExam'? <br><br>(Choose 2 answers)",
    code: `class ExamPrep {
    public static void main(String[] args){
        String a = "Java";
        String b = "Exam";
        //LINE 5
        System.out.println(result);
    }
}`,
    answers: [
      { text: "String result = a + b;", correct: true },
      { text: "String result = a & b;", correct: false },
      { text: "String result = a.concat(b);", correct: true },
      { text: "String result = b.concat(a);", correct: false },
      { text: "String result = String.concat(a, b);", correct: false },
    ],
    explanation: "",
  },
  {
    question: "What can you add at LINE 4 to make the program print Percent Complete = 56,797? <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args){
        double a = 56.785;
        //LINE 4
        System.out.println(result);
    }
}`,
    answers: [
      { text: `String result = String.format("Percent Complete = %d", a);`, correct: false },
      { text: `String result = String.format("Percent Complete = %.2d", a);`, correct: false },
      { text: `String result = String.format("Percent Complete = %f", a);`, correct: false },
      { text: `String result = String.format("Percent Complete = %.2f", a);`, correct: true },
      { text: `String result = String.format("Percent Complete = %s", a);`, correct: false },
      { text: `String result = String.format("Percent Complete = %.2s", a);`, correct: false },
    ],
    explanation: "",
  },
  {
    question: "What can you add at LINE 6 to print the values of a, b, and c on separate lines, using the newline character that is appropriate for the platform that is running the application? <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args){
        int a = 1;
        int b = 2;
        int c = 3;
        //LINE 6
        System.out.println(result);
    }
}`,
    answers: [
      { text: `String result = String.format("%d%n%d%n%d%n", a, b, c);`, correct: true },
      { text: `String result = String.format("%d\n%d\n%d\n", a, b, c);`, correct: false },
      { text: `String result = String.concat("%d\r\n%d\r\n%d\r\n", a, b, c);`, correct: false },
      { text: `String result = String.concat(a, b, c).split();`, correct: false },
    ],
    explanation: "The %n format specifier in Java's String.format will automatically use the correct newline character for the operating system.",
  },
  {
    question: "What can you add at LINE 6 so that the program will print 'Java Exam Prep'? <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args){
        String a = "Java";
        String b = "Exam";
        String c = "Prep";
        //LINE 6
        System.out.println(result);
    }
}`,
    answers: [
      { text: `String result = String.format("%d %d %d", a, b, c);`, correct: false },
      { text: `String result = String.format("%s %s %s", a, b, c);`, correct: true },
      { text: `String result = String.format("%n %n %n", a, b, c);`, correct: false },
      { text: `String result = String.format("%a %b %c", a, b, c);`, correct: false },
    ],
    explanation: "This line uses the String.format method, where %s serves as a placeholder for string values. By passing a, b, and c as arguments, the method replaces each placeholder with the corresponding string. The spaces between the placeholders ensure that the words are separated correctly in the final output.",
  },
  {
    question: "You run the following program: The output is 27,48,83. What will the output be if you run it again? <br><br>(Choose 1 answer)",
    code: `import java.util. Random;

class ExamPrep {
    public static void main(String[] args){
        
        Random r = new Random(23);
        int a = r.nextInt(100);
        int b = r.nextInt(100);
        int c = r.nextInt(100);
        
        System.out.printf("%d,%d,%d%n", a, b, c);
    }
}`,
    answers: [
      { text: "27,48,83", correct: true },
      { text: "A different set of three random numbers between 0 (inclusive) and 100 (exclusive)", correct: false },
      { text: "This code will not compile", correct: false },
      { text: "This code will fail with an exception at runtime", correct: false },
    ],
    explanation: "This is because the Random class is initialized with a fixed seed value of 23. Using the same seed ensures that the sequence of random numbers generated will be identical every time the program is executed.",
  },
  {
    question: "You run the following program: The output is 27,48,83. What will the output be if you run it again? <br><br>(Choose 1 answer)",
    code: `import java.util. Random;

class ExamPrep {
    public static void main(String[] args){

        Random r = new Random();
        int a = r.nextInt(100);
        int b = r.nextInt(100);
        int c = r.nextInt(100);

        System.out.printf("%d,%d,%d%n", a, b, c);
    }
}`,
    answers: [
      { text: "27,48,83", correct: false },
      { text: "A different set of three random numbers between 0 (inclusive) and 100 (exclusive)", correct: true },
      { text: "This code will not compile", correct: false },
      { text: "This code will fail with an exception at runtime", correct: false },
    ],
    explanation: "If you run the program again, the output will be different each time.<br><br>This is because the Random class is initialized without a seed (new Random()), which means it uses the current time or system state to generate random numbers. As a result, each execution of the program will produce a different sequence of random values for a, b, and c",
  },
  {
    question: "Which of the following lines of code will get the absolute value of a variable a? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "A) int result = java.lang.Math.abs(x);", correct: true },
      { text: "B) int result = abs(x);", correct: false },
      { text: "C) int result = java.lang.Math.absoluteValue(x);", correct: false },
      { text: "D) int result = absoluteValue(x);", correct: false },
      { text: "E) int result = !x;", correct: false },
    ],
    explanation: "A) uses the Math.abs() method from the java.lang package, which correctly returns the absolute value of a number.",
  },
  {
    question: "You have the following Java program: What can you put at LINE 5 to get the result of a raised to the power of b? <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args){
        double a = 5.0;
        double b = 2.0;
        // LINE 5
        System.out.println(result);
    }
}`,
    answers: [
      { text: "A) double result = a ^ b;", correct: false },
      { text: "B) double result = b ^ a;", correct: false },
      { text: "C) double result = java.lang.Math.exp(a, b);", correct: false },
      { text: "D) double result = java.lang.Math.exp(b, a);", correct: false },
      { text: "E) double result = java.lang.Math.pow(a, b);", correct: true },
    ],
    explanation: "E) correctly computes a^b (5.0 raised to the power of 2.0) and will give you the expected result.",
  },
  {
    question: "Which static function On javalang Math can you use to return the smaller of two values?",
    code: ``,
    answers: [
      { text: "floor", correct: false },
      { text: "lessThan", correct: false },
      { text: "min", correct: true },
      { text: "smallerOf", correct: false },
    ],
    explanation: "",
  },
  {
    question: "TRUE or FALSE: The random() method of java.lang.Math returns an integer value between 0 (inclusive) and 100 (exclusive)?",
    code: ``,
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
    explanation: "'java.lang.Math.random()' returns a double between 0.0 (inclusive) and 1.0 (exclusive). The first time it is called, it creates a new pseudorandom-number generator, using 'new java.util.Random()' and each subsequent call uses this instance of the 'Random' class internally.",
  },
  {
    question: "You have written the following Java program: What is the output? <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args){
        printColor(2);
    }
    private static void printColor(int x) {
        switch (x) {
            case 1:
                System.out.println("red");
            case 2:
                System.out.println("blue");
            case 3:
                System.out.println("green");
            default:
                System.out.println("something else");
        }
    }
}`,
    answers: [
      { text: "red", correct: false },
      { text: "blue", correct: false },
      { text: "green", correct: false },
      { text: "something else", correct: false },
      { text: "blue" + "\n" + "green" + "\n" + "something else", correct: true },
    ],
    explanation: "You need to use the break keyword within each case if you want to prevent fall-through and resume execution outside of the switch statement.",
  },
  {
    question: "What is the output of the following program? <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args){
        String a = new String("Java");
        String b = new String("Java");
        if(a==b){
            System.out.println("They are equal");
        }else {
            System.out.println("They are not equal");
        }
    }
}`,
    answers: [
      { text: "They are equal", correct: false },
      { text: "They are not equal", correct: true },
      { text: "This program will not compile", correct: false },
      { text: "This program will fail with an exception at runtime", correct: false },
    ],
    explanation: `This is because the == operator checks for reference equality, meaning it checks if a and b point to the same object in memory. Even though both strings contain the same value ("Java"), they are two distinct String objects created with new String(), so their references are different.<br><br>If you want to check for value equality (i.e., whether the contents of the strings are the same), you should use the .equals() method.`,
  },
  {
    question: `The following lines are part of the code in your program:<br><br>String a = new String("Java!");<br>String b = new String("Exam.");<br>int result = a.compareTo(b);<br><br>You have determined that the value of result is 5. What does this mean? <br><br>(Choose 1 answer)`,
    code: ``,
    answers: [
      { text: "The String value stored in a is 5 characters different than the String value stored in b.", correct: false },
      { text: "The String value stored in a is lexicographically less than the String value stored in b.", correct: false },
      { text: "The String value stored in a is lexicographically greater than the String value stored in b.", correct: true },
      { text: "Nothing. The compareTo() method does not apply to strings and the return value is inconsistent.", correct: false },
    ],
    explanation: "The compareTo method returns a positive integer when the first string (a) is greater than the second string (b) in lexicographical order. A positive value indicates that a comes after b based on the Unicode values of the characters in the strings. In this case, a result of 5 suggests that the first differing character in a is greater than the corresponding character in b.",
  },
  {
    question: "Which of the following code snippets will print the numbers 1 through 10? <br><br>(Choose 1 answer)",
    code: `A)
for(int i = 0; i < 10; ++i) {
    System.out.println(i);
}

B)
for(int i = 0; i < 11; ++i) {
    System.out.println(i);
}

C)
for(int i = 1; i < 10; i++) {
    System.out.println(i);
}

D)
for(int i = 1; i < 11; i++) {
    System.out.println(i);
}`,
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: true },
    ],
    explanation: "D) starts at 1 and continues until it reaches 10 (it stops when i is 11), thus printing the numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10.",
  },
  {
    question: "Which of the following code snippets will print the numbers 1 through 10? <br><br>(Choose 1 answer)",
    code: `A)
int i = 0;
while(i <= 10) {
    System.out.println(i);
    i++;
}

B)
int i = 1;
while(i <= 10) {
    System.out.println(i);
    i++;
}

C)
int i = 0;
while(i < 10) {
    System.out.println(i);
}

D)
int i = 1;
while(i < 11) {
    System.out.println(i);
}`,
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "C", correct: false },
      { text: "D", correct: false },
    ],
    explanation: "Option B is correct for printing the numbers 1 through 10 because it initializes the variable i to 1. The while loop checks the condition i <= 10, ensuring it runs as long as i is less than or equal to 10. Inside the loop, System.out.println(i); prints the current value of i, and i++ increments it by 1 after each print. <br><br>This process continues until i becomes 11, at which point the loop terminates. ",
  },
  {
    question: "Which of the following code snippets will print the numbers 1 through 10? <br><br>(Choose 1 answer)",
    code: `A)
int i = 0;
do {
    System.out.println(i);
    i++;
} until (i == 10);

B)
int i = 1;
do {
    System.out.println(i);
    i++;
} until (i == 10);

C)
int i = 0;
do {
    System.out.println(i);
    i++;
} while (i < 11);

D)
int i = 1;
do {
    System.out.println(i);
    i++;
} while (i < 11);`,
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: true },
    ],
    explanation: "Snippet D) initializes the variable i to 1 and uses a do-while loop. In this loop, the value of i is printed and then incremented by 1. The loop continues as long as i is less than 11, allowing it to print the numbers from 1 to 10.",
  },
  {
    question: "You are working on a project that has an existing function called getNextid() which returns an int. Which of the following statements are TRUE about this code? <br><br>(Choose 1 answer)",
    code: `while (true) {
    int id = getNextId();
    
    if (id == -1) {
        break;
    }
    
    System.out.println(id);
}

System.out.println("Done");
`,
    answers: [
      { text: "There is no way the code will exit from the loop, and Done will never be printed because the condition is while(true) ", correct: false },
      { text: `If getNextid() returns -1, it will exit the loop (or "break" out of the loop) and print Done`, correct: true },
      { text: "If getNext1id() returns -1, it will throw an exception on the line that says break and Done will not be printed.", correct: false },
      { text: "This code will not compile because of the infinite loop", correct: false },
    ],
    explanation: `If getNextId() returns -1, the break statement will be executed, causing the loop to terminate and allowing the program to print "Done."`,
  },
  {
    question: "You are working on a project that has an existing function called getNextid) which returns an int. Which of the following statements are TRUE about this code? <br><br>(Choose 1 answer)",
    code: `while (true) {
    int id = getNextId();
    
    if (id == -1) {
        break;
    }
    
    if (id % 2 == 0) {
        continue;
    }
    
    System.out.println(id);
}

System.out.println("Done");
`,
    answers: [
      { text: "The code will only print odd numbers", correct: true },
      { text: "The code will only print even numbers", correct: false },
      { text: "The code will print all numbers except -1", correct: false },
      { text: `If id is an odd number, the execution will exit the loop (or "continue" out of the loop) and print Done.`, correct: false },
      { text: `If id is an even number, the execution will exit the loop (or "continue" out of the loop) and print Done.`, correct: false },
    ],
    explanation: `The code continuously retrieves IDs, exiting when it gets -1. It prints only the odd IDs and skips printing even ones. Finally, it outputs "Done" after exiting the loop.`,
  },
  {
    question: "You have a class named Customer with the following definition. What will the output be when you run this program? <br><br>(Choose 1 answer)",
    code: `class Customer {
    private String region = "east";

    public String getRegion() {
        return region;
    }

    public Customer() {
        region = "west";
    }

    public Customer(String r) {
        region = r;
    }
}

class ExamPrep {
    public static void main(String[] args) { 
        Customer c = new Customer();
        System.out.println(c.getRegion());
    }
}
`,
    answers: [
      { text: "null", correct: false },
      { text: "east", correct: false },
      { text: "north", correct: false },
      { text: "west", correct: true },
      { text: "The code will not compile because Customer has two constructors", correct: false },
      { text: "The code will compile, but a runtime error will occur because Customer has two constructors", correct: false },
    ],
    explanation: `The Customer class has a default constructor that sets the region variable to "west". In the main method, a new Customer object is created using this default constructor (new Customer()). When the getRegion() method is called on this object, it returns the value of region, which is now "west" after the constructor has executed. <br><br>Consequently, the program prints "west" to the console.`,
  },
  {
    question: "You have a class named Customer with the following definition. What will the output be when you run this program? <br><br>(Choose 1 answer)",
    code: `class Customer {
    private String region = "east";

    public String getRegion() {
        return region;
    }

    public Customer() {
        region = "west";
    }

    public Customer(String r) {
        region = r;
    }
}

class ExamPrep {
    public static void main(String[] args) {
        Customer c = new Customer("north");
        System.out.println(c.getRegion());
    }
}
`,
    answers: [
      { text: "null", correct: false },
      { text: "east", correct: false },
      { text: "north", correct: true },
      { text: "west", correct: false },
      { text: "The code will not compile because Customer has two constructors", correct: false },
      { text: "The code will compile, but a runtime error will occur because Customer has two constructors", correct: false },
    ],
    explanation: `The Customer class has a constructor that takes a String parameter. In the main method, a new Customer object is created using this constructor with the argument "north" (i.e., new Customer("north")). This constructor sets the region variable to the value of the parameter r, which is "north" in this case. <br><br>Therefore, when the getRegion() method is called on the Customer object, it returns "north", and the program prints this value to the console.`,
  },
  {
    question: "You have a class named Customer with the following definition. What will the output be when you run this program? <br><br>(Choose 1 answer)",
    code: `class Customer {
    private String region = "east";

    public String getRegion() {
        return region;
    }

    public Customer(String r) {
        region = r;
    }
}

class ExamPrep {
    public static void main(String[] args) {
        Customer c = new Customer();
        System.out.println(c.getRegion());
    }
}
`,
    answers: [
      { text: "null", correct: false },
      { text: "east", correct: false },
      { text: "north", correct: false },
      { text: "west", correct: false },
      { text: "The code will not compile because Customer has no constructor that takes zero arguments", correct: true },
      { text: "The code will compile, but a runtime error will occur because Customer has no constructor that takes zero arguments", correct: false },
    ],
    explanation: "It will result in a compilation error.<br><br>The reason for this is that the Customer class does not have a default (no-argument) constructor defined. Instead, it only has a constructor that takes a String parameter (public Customer(String r)). In the main method, when you attempt to create a new Customer object using new Customer(), the compiler cannot find a matching constructor that accepts no arguments. <br><br>Therefore, the program will not compile successfully.",
  },
  {
    question: "Which of the following statements are TRUE about Java methods? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "A method must always return a value", correct: false },
      { text: "A method must always have one or more parameters", correct: false },
      { text: "A method must always be defined within a class", correct: true },
      { text: "All of these are true", correct: false },
      { text: "None of these are true", correct: false },
    ],
    explanation: "In Java, all methods must be defined within a class as part of its structure. Java is an object-oriented programming language, and methods are integral to the behavior of the objects created from classes, meaning they cannot exist independently outside of a class.",
  },
  {
    question: "You have the following Java class. You want to use the object-oriented principle of encapsulation and create an accessor method (or getter) that allows you to read the value of the name field. Which of the following methods can be added to the customer class to allow the value of name to be read? <br><br>(Choose 1 answer)",
    code: `public class Customer {
    private String name;
}



A)
public String getName() {
    return name;
}

B)
private String getName() {
    return Customer.name;
}

C)
public static String getName() {
    return name,;
}

D)
private static String getName() {
    return Customer.name;
}`,
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: false },
    ],
    explanation: "A is the correct accessor method. It is public, allowing access to the name field from outside the class, and it correctly returns the value of the instance variable name.<br><br>B is incorrect because it tries to access name as a static variable on the class Customer, which is not valid since name is an instance variable.<br><br>C is incorrect for two reasons: it is declared as a static method, which cannot access instance variables directly, and there is a syntax error with the comma.<br><br>D is also incorrect for the same reasons as B; it incorrectly tries to access name as a static variable and cannot access instance variables from a static context.",
  },
  {
    question: "In Java, what does the term overloading methods mean? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "A method can replace the implementation of a method in a base class", correct: false },
      { text: "The method has too many lines of code and you must break it down in order for the code to compile", correct: false },
      { text: "Methods within a class can have the same name if they have different return data types", correct: false },
      { text: "Methods within a class can have the same name if they have different parameter lists", correct: true },
    ],
    explanation: "Method overloading in Java allows multiple methods to have the same name within a class as long as they differ in their parameter lists (i.e., the number of parameters, the types of parameters, or the order of parameters). This provides flexibility and allows methods to perform similar functions with different inputs.",
  },
  {
    question: "You are working on a project that has the following class. You want to overload the dosomething method. Which of the following methods can be added to the widget class without causing compilation to fail? <br><br>(Choose 2 answers)",
    code: `public class Widget {
    public void doSomething(int i) {
        // implementation omitted
    }
}



A)
public void doSomething(double i) {
    // implementation omitted
}

B)
public void doSomething(int j) {
    // implementation omitted
}

C)
public int doSomething(int j) {
    // implementation omitted
    return O;
}

D)
public void doSomething(int i, int j) {
    // implementation omitted
}`,
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: true },
    ],
    explanation: "A is valid because it has a different parameter type (double instead of int), which allows for method overloading.<br><br>B is invalid because it has the same parameter type (int) as the existing method, so it does not qualify as an overload.<br><br>C is invalid because it has the same parameter type (int) as the existing method, and changing the return type alone does not allow for overloading.<br><br>D is valid because it has a different parameter list (two int parameters instead of one), which qualifies as method overloading.",
  },
  {
    question: "Which of the following statements are TRUE about Java static methods? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "Can be invoked using the class name, without having to create an instance of the class", correct: true },
      { text: "Can call other static methods directly", correct: true },
      { text: "Can use the this keyword to refer to instance methods and member variables", correct: false },
      { text: "Must be declared as public", correct: false },
    ],
    explanation: "Static methods can be invoked using the class name, allowing you to call them without creating an instance of the class. For example, ClassName.methodName().<br><br>Static methods can call other static methods directly within the same class without needing to create an instance of the class.<br><br>Static methods cannot use the this keyword because this refers to the current instance of the class, and static methods do not belong to any particular instance.<br><br>Static methods do not have to be declared as public. They can have any access modifier (public, private, protected, or package-private).",
  },
  {
    question: "What is the output of the following code? <br><br>(Choose 1 answer)",
    code: `public class Test {
    public static void main(String[] args) {

        int x = 5;
        System.out.println(++x + x++ + --x);
    }
}`,
    answers: [
      { text: "15", correct: false },
      { text: "16", correct: false },
      { text: "17", correct: false },
      { text: "18", correct: true },
      { text: "None of the above", correct: false },
    ],
    explanation: "The output of the code is 18. This occurs because ++x increments x to 6, x++ evaluates to 6 before incrementing x to 7, and --x then decrements it back to 6. <br><br>When summed together, the values yield 6 + 6 + 6, which equals 18.",
  },
  {
    question: "What is the output of the following code? <br><br>(Choose 1 answer)",
    code: `class Test {
    public static void main(String[] args) {
        
    int x = 5;
        System.out.println(++x + ++x + x++ + --x);
    }
}`,
    answers: [
      { text: "26", correct: false },
      { text: "23", correct: false },
      { text: "24", correct: false },
      { text: "27", correct: true },
      { text: "None of the above", correct: false },
    ],
    explanation: "Initially, x is set to 5. The first ++x increments x to 6, the second ++x raises it to 7, and x++ evaluates to 7 before incrementing x to 8. Finally, --x decrements it back to 7. Adding these values together results in 6 + 7 + 7 + 7, which equals 27.",
  },
  {
    question: "An exception is an event, which occurs during the execution of a program, that disrupts the normal flow of the program's instructions.<br><br>Which of the following statements about Java Exceptions are TRUE? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "A) Exceptions can occur in one function, and caught using a try-catch block in a function that called it or any function higher in the call stack.", correct: true },
      { text: "B) Exceptions must be caught using a try-catch block in the function where they occur.", correct: false },
      { text: "C) Creating an exception object and handing it to the runtime system is called raising an exception.", correct: false },
      { text: "D) Creating an exception object and handing it to the runtime system is called throwing an exception.", correct: true },
    ],
    explanation: "A) is true because exceptions can indeed be thrown in one method and caught in a try-catch block in the calling method or any method higher in the call stack, which allows for flexible exception handling.<br><br>B) is false. While exceptions can be caught in the function where they occur, it is not mandatory; they can propagate up the call stack if not caught.<br><br>C) is false as worded. The correct terminology is that creating an exception object and handing it to the runtime system is called throwing an exception, not raising.<br><br>D) is true. Creating an exception object and handing it to the runtime system is correctly referred to as throwing an exception.",
  },
  {
    question: "What will be the output of the following code? <br><br>(Choose 1 answer)",
    code: `class ExamPrep {
    public static void main(String[] args) {
        try {
            doSomething();
            System.out.println("Success");
        } catch (Exception e) {
            System.err.println("Exception");
        } finally {
            System.out.println("Finally");
        }
    }

    static void doSomething() throws Exception {
        throw new Exception("Something unexpected happened");
    }
}
`,
    answers: [
      { text: "Sucess" + "\n" + "Exception" + "\n" + "Finally", correct: false },
      { text: "Sucess" + "\n" + "Finally" + "\n" + "Exception", correct: false },
      { text: "Exception" + "\n" + "Finally", correct: true },
      { text: "Finally" + "\n" + "Exception", correct: false },
      { text: "Exception", correct: false },
    ],
    explanation: `The doSomething() method, when called within the try block, throws a new Exception. As a result, the program skips the line that prints "Success" and jumps to the catch block, where it prints "Exception" to the error output stream. After handling the exception, the finally block is executed, which prints "Finally". <br><br>Therefore, the final output consists of the messages "Exception" followed by "Finally".`,
  },
  {
    question: "You have the following code. What can you add at LINE 5 to declare a variable named a which is an ArrayList Of strings? <br><br>(Choose 1 answer)",
    code: `import java.util.*;
class ExamPrep {
    public static void main(String[] args) {
        //LINE 5
    }
}`,
    answers: [
      { text: "A) List(String) a = new List(String)();", correct: false },
      { text: "B) List<String> a = new List<String>();", correct: false },
      { text: "C) ArrayList(String) a = new ArrayList(String)();", correct: false },
      { text: "D) ArrayList<String> a = new ArrayList<String>();", correct: true },
    ],
    explanation: "A) is incorrect because List is an interface, not a class that can be instantiated directly, and the syntax is incorrect.<br><br>B) is incorrect for the same reason as A; List cannot be instantiated directly.<br><br>C) is incorrect due to the improper syntax; you should use angle brackets (<String>) instead of parentheses.<br><br>D) is correct. It properly declares a as an ArrayList of String objects and instantiates it.",
  },
  {
    question: "What is the correct way to declare a variable named a that is an int array of size 4? <br><br>(Choose 2 answers)",
    code: ``,
    answers: [
      { text: "A) int a[] = new int[4];", correct: true },
      { text: "B) int[] a = new int[4];", correct: true },
      { text: "C) int a[] = new int(4);", correct: false },
      { text: "D) int[] a = new int(4);", correct: false },
    ],
    explanation: "A) is a valid declaration. It declares an integer array a and initializes it with a size of 4.<br><br>B) is also a valid declaration. It uses the more common syntax of placing the brackets next to the type, which is perfectly acceptable in Java.<br><br>C) is incorrect because the syntax for initializing an array requires square brackets [] after new int.<br><br>D) is incorrect for the same reason as C; it uses the wrong syntax for array initialization.",
  },
  {
    question: "You have a variable named a that is an int array of size 4, defined like this:<br><br>int a[] = new int[4];<br><br>How can you assign the value 99 to the first element in the array? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "A) a[0] = 99;", correct: true },
      { text: "B) a[1] = 99;", correct: false },
      { text: "C) a(0) = 99;", correct: false },
      { text: "D) a(1) = 99;", correct: false },
    ],
    explanation: "The correct way to assign the value 99 to the first element of the int array a, which is defined as int a[] = new int[4];, is to use the statement a[0] = 99;. In Java, array indexing starts at 0, so a[0] refers to the first element of the array. <br><br>The other options either reference the wrong index or use incorrect syntax for accessing array elements, making A the only correct choice.",
  },
  {
    question: "You have a variable named a that is an int array of size 4, defined like this:<br><br>int a[] = {99,98,97,96};<br><br>Which line of code will print 96? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "A) System.out.println(a[3]);", correct: true },
      { text: "B) System.out.println(a[4]);", correct: false },
      { text: "C) System.out.println(a[96]);", correct: false },
      { text: "D) None of these. There is a syntax error in the array declaration.", correct: false },
    ],
    explanation: "In the array int a[] = {99, 98, 97, 96};, the elements are indexed starting from 0, so the last element, 96, is located at index 3. <br><br>Therefore, using System.out.println(a[3]); will correctly print 96.",
  },
  {
    question: `You have the following code. What can you add at LINE 6 to add "Java" as the first element in the ArrayList? <br><br>(Choose 1 answer)`,
    code: `import java.util.*;

class ExamPrep {
    public static void main(String[] args) {
        ArrayList<String> a = new ArrayList<String>();
        // LINE 6
    }
}`,
    answers: [
      { text: `A) a[0] = "Java";`, correct: false },
      { text: `B) a[1] = "Java";`, correct: false },
      { text: `C) a.add("Java");`, correct: true },
      { text: `D) a.insert("Java");`, correct: false },
    ],
    explanation: `To add "Java" as the first element in the ArrayList, you should use the add method, which is the proper way to insert elements into an ArrayList`,
  },
  {
    question: `You have the following code. What can you add at LINE 7 to insert "First" as the first element in the ArrayList? <br><br>(Choose 1 answer)`,
    code: `import java.util.*;

class ExamPrep {
    public static void main(String[] args) {
        ArrayList<String> a = new ArrayList<String>();
        a.add("Java");
        // LINE 7
    }
}`,
    answers: [
      { text: `A) a.add("First");`, correct: false },
      { text: `B) a.insert("First");`, correct: false },
      { text: `C) a.add(0, "First");`, correct: true },
      { text: `D) a.insert(0, "First");`, correct: false },
    ],
    explanation: `To insert "First" as the first element in the ArrayList, you can use the add method with an index specified. By using a.add(0, "First");, you are instructing the ArrayList to insert "First" at index 0, which is the first position.`,
  },
  {
    question: `You have the following code. What can you add at LINE 8 to remove "First" from the ArrayList? <br><br>(Choose 2 answers)`,
    code: `import java.util.*;

class ExamPrep {
    public static void main(String[] args) {
        ArrayList<String> a = new ArrayList<String>();
        a.add("Java");
        a.add(0, "First");
        // LINE 8
    }
}`,
    answers: [
      { text: `A) a.delete("First");`, correct: false },
      { text: "B) a.delete(0);", correct: false },
      { text: "C) a.deleteAt(0);", correct: false },
      { text: `D) a.remove("First");`, correct: true },
      { text: "E) a.remove(0);", correct: true },
    ],
    explanation: `Using D), the method a.remove("First"); will remove the first occurrence of the element "First" from the ArrayList, as this method searches for the element by its value.<br><br>Alternatively, E) uses the method a.remove(0);, which removes the element at index 0. Since "First" was added at that index, this will effectively remove "First" as well.<br><br>The other options are incorrect because there is no delete method in the ArrayList class, making options A), B), and C) invalid.`,
  },
  {
    question: "Which arrayList method returns the number of elements in the list? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "A) capacity()", correct: false },
      { text: "B) count()", correct: false },
      { text: "C) length()", correct: false },
      { text: "D) size()", correct: true },
    ],
    explanation: "The correct answer is D) size(), as this method returns the number of elements currently in an ArrayList. In Java, ArrayList uses the size() method to provide this information.<br><br>The other options are incorrect: A) capacity() is associated with the Vector class and does not exist in ArrayList; B) count() is not a method in ArrayList; and C) length() is used for arrays in Java, not for ArrayList. Thus, to determine the number of elements in an ArrayList, you would use the size() method.",
  },
  {
    question: "Which of the following can be defined using the private modifier? <br><br>(Choose all that apply)",
    code: ``,
    answers: [
      { text: "class", correct: true },
      { text: "method", correct: true },
      { text: "class variable", correct: true },
      { text: "instance variable", correct: true },
      { text: "local variable", correct: false },
    ],
    explanation: "In Java, the private modifier can be applied to methods, class variables, instance variables, and nested classes. However, it cannot be used for top-level classes or local variables, as local variables are scoped to the method they are defined in. <br><br>Therefore, while methods and variables can be restricted in access using private, top-level classes and local variables cannot.",
  },
  {
    question: "Which of the following statements are TRUE about Java Arrays and ArrayLists? <br><br>(Choose all that apply)",
    code: ``,
    answers: [
      { text: "A) Arrays can be resized", correct: false },
      { text: "B) ArrayLists can be resized", correct: true },
      { text: "C) Arrays can store either primitives or objects", correct: true },
      { text: "D) ArrayLists can store either primitives or objects", correct: false },
      { text: "E) ArrayList implements the List interface", correct: true },
      { text: "F) Array implements the List interface", correct: false },
    ],
    explanation: "A) is false. In Java, once an array is created, its size is fixed and cannot be changed. If you need a different size, you would have to create a new array and copy the elements over. <br><br>B) is true because ArrayLists dynamically adjust their size as elements are added or removed.<br><br>C) is also true, as arrays can hold both primitive data types (like int or char) and object references.<br><br>D) While ArrayLists cannot directly store primitives, they can store their corresponding wrapper objects (e.g., Integer for int, Double for double). So, it's more accurate to say that ArrayLists can store objects, including wrapper classes for primitives.<br><br>E) is true, as ArrayList is a part of the Java Collections Framework and implements the List interface.<br><br>F) is false because arrays do not implement the List interface; they are a separate data structure.",
  },
  {
    question: "You are working on a Java project and see the following code. What does the private Modifier do? <br><br>(Choose 1 answer)",
    code: `class Customer {
    private int id;
    private String name;
}`,
    answers: [
      { text: "A) id and name are encrypted.", correct: false },
      { text: "B) id and name can only be accessed by methods defined inside the customer class.", correct: true },
      { text: "C) id and name can only be accessed by methods defined inside the customer class or inside any class that inherits from customer.", correct: false },
      { text: "D) id and name can only be accessed by methods defined inside the customer class or inside any class that is defined within the same package.", correct: false },
    ],
    explanation: "The private modifier in Java restricts access to the variables (in this case, id and name) so that they can only be accessed within the class in which they are declared. This means that no other class, including subclasses or classes in the same package, can access these private variables directly.",
  },
  {
    question: "Which type of variable has its value shared by every instance of the class? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "A) class variable", correct: true },
      { text: "B) instance variable", correct: false },
      { text: "C) local variable", correct: false },
      { text: "D) None of these", correct: false },
    ],
    explanation: "A class variable, also known as a static variable, is shared by all instances of a class. This means that if one instance modifies the value of a class variable, that change is reflected across all instances of the class.",
  },
  {
    question: "Which type of variable is defined using the static keyword? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "A) class variable", correct: true },
      { text: "B) instance variable", correct: false },
      { text: "C) local variable", correct: false },
      { text: "D) None of these", correct: false },
    ],
    explanation: "A class variable, also known as a static variable, is defined using the static keyword in Java. This type of variable is shared among all instances of a class, meaning that it has a single copy that all instances can access. <br><br>In contrast, instance variables are specific to each object instance, and local variables are defined within a method and are not accessible outside of it.",
  },
  {
    question: "Which type of variable has its value stored separately by each instance of the class? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "A) class variable", correct: false },
      { text: "B) instance variable", correct: true },
      { text: "C) local variable", correct: false },
      { text: "D) None of these", correct: false },
    ],
    explanation: "An instance variable is a type of variable that has its value stored separately for each instance of a class. This means that each object created from the class has its own copy of the instance variable, allowing it to maintain its own state. <br><br>In contrast, class variables (static variables) are shared among all instances, and local variables exist only within the scope of a method.",
  },
  {
    question: "Which type of variable is defined inside of a method? <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "A) class variable", correct: false },
      { text: "B) instance variable", correct: false },
      { text: "C) local variable", correct: true },
      { text: "D) None of these", correct: false },
    ],
    explanation: "A local variable is defined inside of a method and is only accessible within that method's scope. Local variables are created when the method is called and destroyed when the method completes. In contrast, class variables (static variables) are defined at the class level and shared among all instances, while instance variables are associated with individual instances of a class.",
  },
  {
    question: "TRUE or FALSE: A Java class can have only one constructor. <br><br>(Choose 1 answer)",
    code: ``,
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
    explanation: "A Java class can have multiple constructors, a feature known as constructor overloading. This allows a class to have more than one constructor with different parameter lists, enabling the creation of objects in various ways. Each constructor can initialize the object's fields differently based on the parameters provided.",
  },
  {
    question: "What is the expected output when you run this program? <br><br>(Choose 1 answer)",
    code: `public class ExamPrep {
    public static void main(String[] args) {
        String[] flowers = {"lotus","lilly","rose","jasmine"};
        for (String c: flowers) {
            if (c.length() < 4) {
                continue;
            }
            System.out.print(c + " ");
            if (c.length() == 4) {
                break;
            }
        }
    }
}`,
    answers: [
      { text: "lotus jasmine", correct: false },
      { text: "lotus", correct: false },
      { text: "A compilation error occurs", correct: false },
      { text: "lotus lilly rose", correct: true },
    ],
    explanation: `The output of the provided code is "lotus lilly rose ". The program defines an array called flowers containing four flower names. As it iterates through the array, it checks the length of each flower name. When it encounters "lotus" (5 characters), it prints it, followed by "lilly" (5 characters), which is also printed. Upon reaching "rose" (4 characters), it prints this name and then exits the loop due to the break statement. The flower "jasmine" is never reached because the loop terminates after printing "rose." <br><br>Thus, the final output consists of the names "lotus," "lilly," and "rose," each followed by a space.`,
  },
  {
    question: "Given the code fragment below, what is the output? <br><br>(Choose 1 answer)",
    code: `int a = 3;
a = ++a + a++;
a = --a - a--;

System.out.println(a);`,
    answers: [
      { text: "8", correct: false },
      { text: "3", correct: false },
      { text: "0", correct: true },
      { text: "A compilation error occurs", correct: false },
    ],
    explanation: "The output of the code fragment is 0. Initially, a is set to 3. In the first operation, a = ++a + a++, the pre-increment ++a raises a to 4, and then a++ uses the value 4 before incrementing a to 5. This results in a being assigned the value 8. In the second operation, a = --a - a--, the pre-decrement --a decreases a to 7, while a-- uses the value 7 before decrementing it to 6. <br><br>Consequently, the expression evaluates to a = 7 - 7, which sets a to 0.",
  },
  {
    question: "Given the code fragment below, what is the output?",
    code: `int value = 10;
int a = ++value;
int b = value;
int c = value++;

if (a <= b && a <= c) {
    if (b <= c) {
        a = ++b;
    } else {
        a = ++c;
    }
}

System.out.println(a);
`,
    answers: [
      { text: "10", correct: false },
      { text: "11", correct: false },
      { text: "12", correct: true },
      { text: "13", correct: false },
    ],
    explanation: "The output of the given code fragment is 12. Initially, value is set to 10, and a is assigned the incremented value of value, making both value and a equal to 11. The variable b is then set to the current value of value, which is 11, and c is assigned the current value of value before it increments to 12, so c remains 11. <br><br>The condition checks confirm that a is less than or equal to both b and c, leading to the nested condition where b is also less than or equal to c. <br><br>This results in b being incremented to 12, which is then assigned to a.",
  },
  {
    question: "Given the code fragment below, what is the output? <br><br>(Choose 1 answer)",
    code: `int num = 100;
int count = 0;

do {
    num--;
    count++;
} while (count > 1);

System.out.println("num = " + num);
`,
    answers: [
      { text: "num = 100", correct: false },
      { text: "num = 99", correct: true },
      { text: "num = 0", correct: false },
      { text: "The program executes indefinitely", correct: false },
    ],
    explanation: `The output of the given code fragment is num = 99. The variable num starts at 100, and count is initialized to 0. In the do loop, num is decremented by 1 to 99, and count is incremented to 1. After the first iteration, the condition while (count > 1) is checked, and since count is now 1, the loop exits. Consequently, when System.out.println("num = " + num); is executed, it prints num = 99.`,
  },/*
  {
    question: "",
    code: ``,
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    code: ``,
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    code: ``,
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    code: ``,
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    code: ``,
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    code: ``,
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    code: ``,
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    code: ``,
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    code: ``,
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  */

];
