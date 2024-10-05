export const questions = [
  {
    question: "What is the result of the following code? (Choose 1 answer)",
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
      "What is the result of the following code snippet? (Choose 1 answer)",
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
    question: "What is the result of the following code snippet? (Choose 1 answer)",
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
      "What will be the output of the following program? (Choose 3 answers)",
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
      "What will be the result of compiling and running the following program? (Choose 1 answer)",
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
      "Given the following program, which of these statements are true? (Choose 2 answers)",
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
      "You have an array of objects and you want to search for a particular object in that array. Which of the following Java statements will you need to use? (Choose 2 answers)",
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
      "What may be done to the above code to make it print 100? (Choose 1 answer)",
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
      "Identify the valid for loop constructs assuming the following declarations: Object o = null; ArrayList c = //valid ArrayList object. int[] ia = //valid array. (Choose 2 answers)",
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
    question: "What will the following code print? (Choose 1 answer)",
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
      "What will be the output of the following program? (Choose 3 answers)",
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
      "What will be the result of compiling and running the following program? (Choose 1 answer)",
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
      "Given the following program, which of these statements are true? (Choose 2 answers)",
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
      "You have an array of objects and you want to search for a particular object in that array. Which of the following Java statements will you need to use? (Choose 1 answer)",
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
      "What may be done to the above code to make it print 100? (Choose 2 answers)",
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
    question: "What will the following code print? (Choose 1 answer)",
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
      "Identify the valid for loop constructs assuming the following declarations: Object o = null; ArrayList c = //valid ArrayList object; int[] ia = //valid array. (Choose 2 answers)",
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
    question: "What will the following code print? (Choose 1 answer)",
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
      { text: "[b]", correct: true },
      { text: "[c]", correct: false },
      { text: "[b, c, a]", correct: false },
      { text: "[a, b, c, a]", correct: false },
      { text: "Exception at runtime", correct: false },
    ],
    explanation:
      "The first 'remove' call removes the first occurrence of 'a'. The second 'remove' call removes the next 'a'. Then 'b' is removed, leaving only 'c'.",
  },
  {
    question:
      "Which one can hold a larger integer value, a char or a short? (Choose 1 answer)",
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
      "You are writing a class named AccountManager. This class is the starting point of your application and is to be executing from the command line. What should be the name of the file containing this class's source code? (Choose 1 answer)",
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
      "What should be inserted at //1 so that Y.java can compile without any error? (Choose 2 answers)",
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
    question: "Which of the following are features of Java? (Choose 2 answers)",
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
      "Which of the following statements are true if the above program is run with the command line: java Test closed? (Choose 1 answer)",
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
    question: "What will the following code print when run? (Choose 4 answers)",
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
      "Which of the following statements will print true? (Choose 2 answers)",
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
      "The first and second statements evaluate to true because 'b' is true. The third statement is false because 'b' is not equal to 'y>z'.",
  },
  {
    question:
      "What will be the output when the above code is executed? (Choose 1 answer)",
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
      "Given the following class, which of these are valid ways of referring to the class from outside of the package com.enthu? (Choose 2 answers)",
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
      "Which of the following are true about the enhanced for loop? (Choose 1 answer)",
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
      "Which lines contain a valid constructor in the following code? (Choose 3 answers)",
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
      "Which of the following is true about a Java source file? (Choose 2 answers)",
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
    question: "Identify correct statements. (Choose 1 answer)",
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
    question: "Which of these for statements are valid? (Choose 1 answer)",
    code: ``,
    answers: [
      { text: "1, 2", correct: false },
      { text: "3, 4", correct: false },
      { text: "1, 5", correct: false },
      { text: "4, 5", correct: true },
      { text: "5", correct: false },
    ],
    explanation:
      "Statements 4 and 5 are valid. Statement 1 has an invalid condition, and statement 2 has a syntax error in the initialization.",
  },
  {
    question:
      "What letters, and in what order, will be printed when the following program is compiled and run? (Choose 1 answer)",
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
      "What, if anything, is wrong with the following code? (Choose 1 answer)",
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
    question: "Identify correct statements. (Choose 2 answers)",
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
      "Which of the following statements will print true? (Choose 2 answers)",
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
    question: "What is the result? (Choose 1 answer)",
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
      "A try statement must always have a ............. associated with it. (Choose 1 answer)",
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
      "What sequence of digits will the following program print? (Choose 1 answer)",
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
      "Which two lines can be inserted at locations marked //1 and //2? (Choose 1 answer)",
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
    question: "Which of these are keywords in Java? (Choose 4 answers)",
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
    question: "What letters will be printed by this program? (Choose 1 answer)",
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
      { text: "B", correct: true },
      { text: "C", correct: false },
      { text: "D", correct: false },
      { text: "F", correct: false },
    ],
    explanation:
      "The switch statement matches case 1, printing 'B', and then breaks out of the LOOP.",
  },
  {
    question:
      "Which of the following operators can be used in conjunction with a String object? (Choose 3 answers)",
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
    question: "What will the following code snippet print? (Choose 1 answer)",
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
    question: "What is the result? (Choose 1 answer)",
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
      "Which of the following are NOT valid operators in Java? (Choose 4 answers)",
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
      "Which statements regarding the following code are correct? (Choose 1 answer)",
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
      "Which of the following statements can be inserted successfully at // 1? (Choose 3 answers)",
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
      "Which of the following code snippets will compile without any errors? (Choose 4 answers)",
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
    question: "What will the following program print? (Choose 1 answer)",
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
      "Which of the following options, when inserted in the above code, will print 111 222? (Choose 1 answer)",
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
      "What command should be given to compile and run a java source file named TestClass.java (for standard Oracle JDK)? (Choose 1 answer)",
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
      "What will the following class print when compiled and run? (Choose 1 answer)",
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
      { text: "It will print 10, 5.", correct: false },
      { text: "It will print 5, 10.", correct: false },
      { text: "It will print 10, 10.", correct: true },
      { text: "None of these.", correct: false },
    ],
    explanation:
      "The method setIt() sets y.link to x, so b.link points to a. Therefore, both a.link.value and b.link.value are 10.",
  },
  {
    question:
      "What will be the result of attempting to compile and run the following code? (Choose 1 answer)",
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
      "What will be the output of the following code snippet? (Choose 1 answer)",
    code: `int a = 1;
int[] ia = new int[10];
int b = ia[a];
int c = b + a;
System.out.println(b = c);`,
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "true", correct: false },
      { text: "false", correct: false },
    ],
    explanation:
      "The array ia is initialized with default values of 0. Therefore, b is 0, c is 1, and b is assigned the value of c, which is 2.",
  },
  {
    question:
      "How many objects and reference variables are created by the following code? (Choose 1 answer)",
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
      "What will the following class print when compiled and run? (Choose 1 answer)",
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
    question: "Which lines will print true? (Choose 2 answers)",
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
      "Which of the following declarations are valid? (Choose 3 answers)",
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
      "What will the following code print when compiled and run? (Choose 1 answer)",
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
      { text: "   0", correct: false },
      { text: "   1", correct: false },
      { text: "null", correct: true },
      { text: "It will throw a RuntimeException at run time.", correct: false },
    ],
    explanation:
      "The array 'arr' is initialized with null values. The concat() method does not modify the original strings, so the printData() method prints 'null' for each element.",
  },
  {
    question: "What will the following program print? (Choose 1 answer)",
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
      "Which of the following statements are correct? (Choose 1 answer)",
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
      "What is the result of executing the following fragment of code? (Choose 1 answer)",
    code: `boolean b1 = false;
boolean b2 = false;
if (b2 = b1 != b2) {
  System.out.println("true");
} else {
  System.out.println("false");
}`,
    answers: [
      { text: "Compile time error.", correct: false },
      { text: "It will print true;", correct: true },
      { text: "It will print false;", correct: false },
      { text: "Runtime error.", correct: false },
      { text: "It will print nothing.", correct: false },
    ],
    explanation:
      "The expression 'b1 != b2' evaluates to true, and 'b2 = true' assigns true to b2, so the if condition is true, printing 'true'.",
  },
  {
    question:
      "Which of the following statements will print YES? (Choose 2 answers)",
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
    question: "Which of the following statements are true? (Choose 2 answers)",
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
    question: "What will the following program print? (Choose 1 answer)",
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
      "The following method will compile and run without any problems. (Choose 1 answer)",
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
      "How many string objects are created in the following code fragment? (Choose 1 answer)",
    code: `String a, b, c;
a = new String("hello");
b = a;
c = a + b;`,
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "4", correct: false },
      { text: "5", correct: false },
    ],
    explanation:
      "Three string objects are created: one for 'new String(\"hello\")', and two for the concatenation 'a + b'.",
  },
  {
    question:
      "What will the following class print when compiled and run? (Choose 1 answer)",
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
      { text: "It will print 10, 10.", correct: true },
      { text: "It will throw an exception when run.", correct: false },
    ],
    explanation:
      "The method setIt() sets x.link to y.link, which is null. Therefore, a.link is set to null, and b.link is set to a, resulting in '10, 10'.",
  },
  {
    question:
      "Which of the following method declarations correctly declares a method named sum that takes an array of integers and returns the sum of the values in that array? (Choose 1 answer)",
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
      "Arrays and ArrayLists: What will the following code print? (Choose 1 answer)",
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
      "Working with Java Data Types: Which of the following is NOT a primitive data value in Java? (Choose 2 answers)",
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
      "Arrays and ArrayLists: What can be inserted in the above code so that it can compile without any error? (Choose 2 answers)",
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
      "Java Basics: Which of the following are valid declarations of the standard main method? (Choose 2 answers)",
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
      "Working with the String Class: What will the following statement print? (Choose 1 answer)",
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
      "Working with Java Data Types: Which of the following can be valid declarations of an integer variable? (Choose 2 answers)",
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
      "Java Basics: Given the following set of member declarations, which of the following is true? (Choose 2 answers)",
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
      "Working with Java Operators: What is the result of executing the following fragment of code? (Choose 1 answer)",
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
      "Classes and Constructors: Which of the following can be used as a constructor for the class shell given below? (Choose 2 answers)",
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
      "Basic Java Elements: Which of the following methods do not follow JavaBeans naming conventions? (Choose 1 answer)",
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
      "Java Basics: Which method declarations will enable a class to be run as a standalone program? (Choose 2 answers)",
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
    question:
      "Using Looping Statements: What will the following code print? (Choose 1 answer)",
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
      "Classes and Constructors: Which of these statements regarding the following code are correct? (Choose 1 answer)",
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
      "Using Looping Statements: In the following code what will be the output if 0 (integer value zero) is passed to loopTest()? (Choose 1 answer)",
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
      "Using Looping Statements: What will the following program print? (Choose 1 answer)",
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
      { text: "5", correct: true },
      { text: "6", correct: false },
      { text: "7", correct: false },
    ],
    explanation:
      "The while loop increments 'c' until 'c > 5', at which point 'flag' is set to false, and the loop exits. The final value of 'c' is 5.",
  },
  {
    question:
      "Java Basics: Consider the following class: What will be printed when the above class is run using the following command line: java ArgsPrinter 1 2 3 4? (Choose 1 answer)",
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
      "Working with the Random and Math Classes: What can be inserted at //1 and //2 in the code below so that it will print a number between 0.0 and 1.0? (Assume that no package has been imported in the code.) (Choose 2 answers)",
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
      "Working with Java Data Types: Which of these is the correct format to use to create the char literal of value a? Assume that \\u0061 is the unicode value for a. (Choose 2 answers)",
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
      "Using Looping Statements: What will the following program print? (Choose 1 answer)",
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
      "Working with Java Data Types: Given the following two lines of code: What can XXX be? (Choose 1 answer)",
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
      "Debugging and Exception Handling: Which code fragments will print the last argument given on the command line to the standard output, and exit without any output and exceptions on the command line if no arguments are given? (Choose 3 answers)",
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
      "Using Decision Statements: Consider the following method: Which of the following statements are correct? (Choose 2 answers)",
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
      "Debugging and Exception Handling: Which digits and in what order will be printed when the following program is run? (Choose 1 answer)",
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
      { text: "The program will print 1 and 4, in that order.", correct: false },
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
      "Working with Java Data Types: Which of the following statements are true? (Choose 2 answers)",
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
      "Arrays and ArrayLists: What will the following code print when compiled and run? (Choose 1 answer)",
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
      "Working with Java Data Types: You are developing a class that represents a Book. Which data type will you use for storing the ISBN number, which is an alphanumeric number, of the book? (Choose 1 answer)",
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
      "Using Looping Statements: What will the following code print when compiled and run? (Choose 1 answer)",
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
    question:
      "Working with the Random and Math Classes: Identify valid for constructs: (Choose 3 answers)",
    code: ``,
    answers: [
      {
        text: 'for(;Math.random()<0.5;) { System.out.println("true"); }',
        correct: true,
      },
      {
        text: 'for(;;Math.random()<0.5) { System.out.println("true"); }',
        correct: false,
      },
      {
        text: 'for(;;Math.random()) { System.out.println("true"); }',
        correct: false,
      },
      { text: "for(;;) { if(Math.random()<.05) break; }", correct: true },
    ],
    explanation:
      "The first and last constructs are valid. The second and third constructs have invalid conditions in the increment section.",
  },
  {
    question:
      "Java Methods: Which of the following code fragments are valid method declarations? (Choose 1 answer)",
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
    question:
      "Working with Java Operators: Given: What is the result? (Choose 1 answer)",
    code: `int a = 5, b = 2, c = 30;
System.out.println(a + ++b * c);`,
    answers: [
      { text: "65", correct: false },
      { text: "210", correct: true },
      { text: "180", correct: false },
      { text: "95", correct: false },
      { text: "Compilation failure", correct: false },
    ],
    explanation:
      "The expression evaluates as follows: '++b' increments b to 3, then '3 * 30' is 90, and '5 + 90' is 95.",
  },
  {
    question:
      "Using Decision Statements: What will the following program print? (Choose 1 answer)",
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
      "Java Basics: Which of the following is a benefit of encapsulation? (Choose 1 answer)",
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
      "Working with the String Class: Which of these statements concerning the charAt() method of java.lang.String class are true? (Choose 2 answers)",
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
      "Working with Java Data Types: Which of the following are valid declarations: (Choose 3 answers)",
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
      "Debugging and Exception Handling: What will be the result of attempting to compile and run the following program? (Choose 1 answer)",
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
      "Working with Java Data Types: Given the following code snippet: What can XXX be? (Choose 1 answer)",
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
      "Java Basics: Identify the fundamental principles of Object Oriented Programming. (Choose 2 answers)",
    code: ``,
    answers: [
      { text: "Code reuse", correct: false },
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
      "Using Looping Statements: What will be the result of attempting to compile and run the following program? (Choose 1 answer)",
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
      "Working with the String Class: Consider the following two java files in /home/user directory: The files are compiled using the following command line: javac -d /home *.java Where will the class files be created? (Choose 1 answer)",
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
    question: "Java Basics: A Java method .... (Choose 2 answers)",
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
      "Using Decision Statements: What will be the result of attempting to compile and run the following class? (Choose 1 answer)",
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
    question: "What will be the output of the following code? (Choose 2 answers)",
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
      { text: "3 1 3", correct: false },
      { text: "1 2 1", correct: false },
      { text: "2 3 3", correct: false },
      { text: "1 2 1", correct: false },
      { text: "3 3 3", correct: true },
    ],
    explanation:
      "The static variable 'a' is incremented twice, resulting in 3. The instance variable 'b' is incremented twice, resulting in 3. The local variable 'c' is incremented twice, resulting in 3.",
  },
  {
    question: "Java Basics: The JRE contains: (Choose 2 answers)",
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
      "Working with Java Data Types: Which of the following are primitive integral types in java? (Choose 4 answers)",
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
      "Java Methods: Consider the following class definition: What will be the result of compiling and running the class? (Choose 1 answer)",
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
    question:
      "Working with the String Class: What will the following code print? (Choose 1 answer)",
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
      "Working with Java Operators: The following code snippet will not compile... (Choose 1 answer)",
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
      "Working with the String Class: What will be written to the standard output when the following program is run? (Choose 1 answer)",
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
      "What is Java: You are developing a Java rich client application that is to be installed on a lot of workstations used by the employees of your company. The users are located in various office locations across the globe. Which of the following Java technologies will be useful in delivering the application to the users over the internet? (Choose 1 answer)",
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
    question:
      "Basic Java Elements: Which of the following are literals? (Choose 3 answers)",
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
    question:
      "Debugging and Exception Handling: Given: What is the output? (Choose 1 answer)",
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
      { text: "exception in div", correct: true },
      { text: "exception in main", correct: false },
      { text: "exception in div exception in main", correct: false },
      { text: "exception in div 0", correct: false },
      { text: "Compilation failure", correct: false },
    ],
    explanation:
      "The ArithmeticException is caught in the div method, printing 'exception in div'. The method returns 0, which is printed by the main method.",
  },
  {
    question:
      "Java Methods: What will the following code print when run? (Choose 1 answer)",
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
      "Classes and Constructors: Given: What can be inserted in the above code so that it will print 10 10.0? (Choose 1 answer)",
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
      "Java Basics: Consider the following code: What will be the output when it is run by giving the following command: java Test good bye friend!? (Choose 1 answer)",
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
      "Arrays and ArrayLists: What will the following code print when run? (Choose 1 answer)",
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
      "Using Decision Statements: What can be the return type of method getSwitch so that this program compiles and runs without any problems? (Choose 1 answer)",
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
      "Working with the String Class: Your GUI screen contains a text field for username. The String variable used to store the value entered by the user is named userName. Which of the following lines of code will you use to check whether the userName is empty or not? A value containing only spaces is also considered empty. (Choose 1 answer)",
    code: ``,
    answers: [
      { text: 'userName.equals("")', correct: false },
      { text: 'userName.removeWhiteSpaces().equals("")', correct: false },
      { text: "userName.trim().length == 0", correct: true },
      { text: 'userName.trim().equals("")', correct: false },
    ],
    explanation:
      "The method trim() removes leading and trailing spaces. Checking if the length is 0 determines if the string is empty.",
  },
  {
    question:
      "Java Basics: Consider the following code in file TestClass.java: This file is compiled and run using the following command line: java -version TestClass What will be the output? (Choose 1 answer)",
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
      "Basic Java Elements: Which of the following statements is correct? (Choose 1 answer)",
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
      "Arrays and ArrayLists: What can be inserted in the following code so that it will print true when run? (Choose 1 answer)",
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
    question:
      "Using Decision Statements: What will the following code print? (Choose 1 answer)",
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
      "The expression evaluates to 2 because 'x' is 2, 'a' is 1, 'y' is 1, 'b' is 1, and 'z' is 1. The ternary operator selects 'y' as the final value.",
  },
  {
    question:
      "Arrays and ArrayLists: Identify the correct statements about ArrayList. (Choose 3 answers)",
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
      "Classes and Constructors: Given a class named Test, which of these would be valid definitions for the constructors for the class? (Choose 1 answer)",
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
    question:
      "Classes and Constructors: What will the following code print? (Choose 1 answer)",
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
      "Working with the String Class: What will the following lines of code print? (Choose 1 answer)",
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
      "Working with the String Class: What will be printed when the following code snippet is executed? (Choose 1 answer)",
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
      "Basic Java Elements: Following is not a valid comment: /* this comment /* // /** is not valid */ (Choose 1 answer)",
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
      'Working with the String Class: What what will the following statement: "    hello java guru   ".trim(); return? (Choose 1 answer)',
    code: ``,
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
      "Java Methods: Given the following code, which method declarations can be inserted at line 1 without any problems? (Choose 3 answers)",
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
    question: "Java Basics: Identify correct statements: (Choose 1 answer)",
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
      "Debugging and Exception Handling: What will be the output of the following class... (Choose 1 answer)",
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
      { text: "It will print j = 1;", correct: true },
      { text: "It will print j = 2;", correct: false },
      { text: "The value of j cannot be determined.", correct: false },
      { text: "It will not compile.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The exception is thrown before the assignment 'j = 2' is executed, so 'j' remains 1.",
  },
  {
    question:
      "Working with Java Data Types: Which of the following is illegal? (Choose 1 answer)",
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
      "Using Looping Statements: What will the following program print? (Choose 1 answer)",
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
      "Java Methods: What would be the result of attempting to compile and run the following program? (Choose 1 answer)",
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
      "Arrays and ArrayLists: Which of the following statements about an array are correct? (Choose 1 answer)",
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
      "Basic Java Elements: Which class definition uses the naming conventions of Java Programming? (Choose 1 answer)",
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
      "Using Looping Statements: Given the following code, which of these statements are true? (Choose 3 answers)",
    code: `public class TestClass {
  public static void main(String args[]) {
    int k = 0;
    int m = 0;
    for (int i = 0; i <= 3; i++) {
      k++;
      if (i == 2) {
        // line 1
      }
      m++;
    }
    System.out.println(k + ", " + m);
  }
}`,
    answers: [
      {
        text: "It will print 3, 2 when line 1 is replaced by break;",
        correct: false,
      },
      {
        text: "It will print 3, 2 when line 1 is replaced by continue.",
        correct: false,
      },
      {
        text: "It will print 4, 3 when line 1 is replaced by continue.",
        correct: true,
      },
      {
        text: "It will print 4, 4 when line 1 is replaced by i = m++;",
        correct: true,
      },
      {
        text: "It will print 3, 3 when line 1 is replaced by i = 4;",
        correct: true,
      },
    ],
    explanation:
      "Replacing line 1 with 'continue' skips the rest of the loop body, resulting in 4, 3. Replacing with 'i = m++' or 'i = 4' affects the loop control variable, resulting in 4, 4 or 3, 3.",
  },
  {
    question:
      "Using Decision Statements: What will the following method return if called with an argument of 7? (Choose 1 answer)",
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
      "Using Looping Statements: How many times will the line marked //1 be called in the following code? (Choose 1 answer)",
    code: `int x = 10;
do {
  x--;
  System.out.println(x); // 1
} while ( x < 10 );`,
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "9", correct: false },
      { text: "10", correct: false },
      { text: "None of these.", correct: false },
    ],
    explanation:
      "The do-while loop executes once, printing 9, because the condition 'x<10' is false after the first iteration.",
  },
  {
    question:
      "Using Decision Statements: Which of the following implementations of a max() method will correctly return the largest value? (Choose 1 answer)",
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
      "Working with Java Data Types: What will the following program print? (Choose 1 answer)",
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
      "Using Looping Statements: Consider the following code: How many times will the output contain 2? (Choose 1 answer)",
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
      "Using Decision Statements: What will the following program print? (Choose 1 answer)",
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
      "Using Looping Statements: Using a break in a while loop causes the loop to break the current iteration and start the next iteration of the loop. (Choose 1 answer)",
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
      "Arrays and ArrayLists: Which of the following statements will correctly create and initialize an array of Strings to non null elements? (Choose 4 answers)",
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
      "Debugging and Exception Handling: What will be the output of the following program? (Choose 1 answer)",
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
      "Working with Java Operators: Which of the following code snippets will print exactly 10? (Choose 3 answers)",
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
      "Arrays and ArrayLists: What is the result of compiling and running the following program? (Choose 1 answer)",
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
      { text: "Bill Steve Larry null", correct: true },
      {
        text: "Bill Steve Larry class java.lang.NullPointerException",
        correct: false,
      },
      { text: "class java.lang.Exception Bill Steve Larry", correct: false },
      { text: "Bill Steve Larry class java.lang.Exception", correct: false },
      { text: "null Bill Steve Larry", correct: false },
    ],
    explanation:
      "The array contains null at index 0, so 'null' is printed first, followed by the other elements.",
  },
  {
    question:
      "Java Basics: Given the following code: How many object references are being created? (Choose 1 answer)",
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
      "Working with the String Class: What will the following code snippet print when run? (Choose 1 answer)",
    code: `String str = "asdfasdf";
char ch = str.charAt(3);
if (ch == 'a') str = str.replace('a', 'x');
else if (ch == 'f') str = str.replace('s', 'x');
System.out.println(str);`,
    answers: [
      { text: "asdfasdf", correct: false },
      { text: "axdfaxdf", correct: false },
      { text: "axdfasdf", correct: false },
      { text: "xsdfxsdf", correct: true },
      { text: "xsdfasdf", correct: false },
    ],
    explanation:
      "The character at index 3 is 'f', so the else-if block executes, replacing 's' with 'x', resulting in 'xsdfxsdf'.",
  },
  {
    question:
      "Arrays and ArrayLists: What will the following code print when compiled and run? (Choose 1 answer)",
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
      "Java Basics: Consider the following program: What will the value of 'harry' if the program is run from the command line: java TestClass 111 222 333? (Choose 1 answer)",
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
      "Arrays and ArrayLists: Given the complete contents of TestClass.java file: Which import statement should be added to make it compile? (Choose 1 answer)",
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
      "Arrays and ArrayLists: Which of the following are benefits of ArrayList over an array? (Choose 1 answer)",
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
      "Using Decision Statements: Which of the following expressions will evaluate to true if preceded by the following code? (Choose 3 answers)",
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
      "Basic Java Elements: Given that java.lang.Integer class has a public static field named MAX_VALUE, which of the given options should be inserted at line 1 so that the following code can compile without any errors? (Choose 2 answers)",
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
      'Classes and Constructors: Which of the following are true about the "default" constructor? (Choose 2 answers)',
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
      "What is Java: Which of the following are true about Java? (Choose 2 answers)",
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
      "Working with the String Class: What will be the output of the following program (excluding the quotes)? (Choose 1 answer)",
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
    question:
      "Using Looping Statements: What will the following code print? (Choose 1 answer)",
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
      "Java Basics: Which of the following are valid class declarations? (Not the whole class, just the declaration). (Choose 1 answer)",
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
      "Using Looping Statements: What will the following program print? (Choose 1 answer)",
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
      "Using Looping Statements: What will the following code print when run? (Choose 1 answer)",
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
      "Working with Java Data Types: Which integral types in Java have a range of 2^16 integers? OR Which integral types in Java can represent exactly 2^16 distinct integers? (Choose 2 answers)",
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
      "Java Basics: The options below contain the complete contents of a file. Which of these options can be run with the following command line once compiled? java main (Choose 1 answer)",
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
      "What is Java: Which of the following are features of Java? (Choose 2 answers)",
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
      'Java Basics: Which of the following are correct about "encapsulation"? (Choose 2 answers)',
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
      "Basic Java Elements: You have been given a library that contains the following class: What should be inserted at //1 above? (Choose 2 answers)",
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
      "Working with the String Class: What will be printed when the following code snippet is executed? (Choose 1 answer)",
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
      "Working with Java Operators: What will the following code print when run without any arguments? (Choose 1 answer)",
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
      "Java Basics: Given: What can be inserted in the above code at the specified location without causing compilation error? (Choose 1 answer)",
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
      "Using Decision Statements: Given the code fragment: What is the result? (Choose 1 answer)",
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
      "Using Looping Statements: Consider the following method, which is called with an argument of 7: What will it print? (Choose 1 answer)",
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
      "Working with Java Operators: Given: Which of the following options are valid when inserted independently at the line marked //1? (Choose 3 answers)",
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
      "Classes and Constructors: What will be the result of attempting to compile the following program? (Choose 1 answer)",
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
      "Basic Java Elements: Which of the following are reserved words in Java? (Choose 2 answers)",
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
    question: "What is the result of the following code? (Choose 1 answer)",
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
      "What is the result of the following code snippet? (Choose 1 answer)",
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
      "What is the result of the following code snippet? (Choose 1 answer)",
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
      "What will be the output of the following program? (Choose 3 answers)",
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
      "What will be the result of compiling and running the following program? (Choose 1 answer)",
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
      "Given the following program, which of these statements are true? (Choose 2 answers)",
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
      "You have an array of objects and you want to search for a particular object in that array. Which of the following Java statements will you need to use? (Choose 2 answers)",
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
      "What may be done to the above code to make it print 100? (Choose 1 answer)",
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
      "Identify the valid for loop constructs assuming the following declarations: Object o = null; ArrayList c = //valid ArrayList object. int[] ia = //valid array. (Choose 2 answers)",
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
    question: "What will the following code print? (Choose 1 answer)",
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
      "What will be the output of the following program? (Choose 3 answers)",
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
      "What will be the result of compiling and running the following program? (Choose 1 answer)",
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
      "Given the following program, which of these statements are true? (Choose 2 answers)",
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
      "You have an array of objects and you want to search for a particular object in that array. Which of the following Java statements will you need to use? (Choose 1 answer)",
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
      "What may be done to the above code to make it print 100? (Choose 2 answers)",
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
    question: "What will the following code print? (Choose 1 answer)",
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
      "Identify the valid for loop constructs assuming the following declarations: Object o = null; ArrayList c = //valid ArrayList object; int[] ia = //valid array. (Choose 2 answers)",
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
    question: "What will the following code print? (Choose 1 answer)",
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
      { text: "[b]", correct: true },
      { text: "[c]", correct: false },
      { text: "[b, c, a]", correct: false },
      { text: "[a, b, c, a]", correct: false },
      { text: "Exception at runtime", correct: false },
    ],
    explanation:
      "The first 'remove' call removes the first occurrence of 'a'. The second 'remove' call removes the next 'a'. Then 'b' is removed, leaving only 'c'.",
  },
  {
    question:
      "Which one can hold a larger integer value, a char or a short? (Choose 1 answer)",
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
      "You are writing a class named AccountManager. This class is the starting point of your application and is to be executing from the command line. What should be the name of the file containing this class's source code? (Choose 1 answer)",
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
      "What should be inserted at //1 so that Y.java can compile without any error? (Choose 2 answers)",
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
    question: "Which of the following are features of Java? (Choose 2 answers)",
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
      "Which of the following statements are true if the above program is run with the command line: java Test closed? (Choose 1 answer)",
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
    question: "What will the following code print when run? (Choose 4 answers)",
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
      "Which of the following statements will print true? (Choose 2 answers)",
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
      "The first and second statements evaluate to true because 'b' is true. The third statement is false because 'b' is not equal to 'y>z'.",
  },
  {
    question:
      "What will be the output when the above code is executed? (Choose 1 answer)",
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
      "Given the following class, which of these are valid ways of referring to the class from outside of the package com.enthu? (Choose 2 answers)",
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
      "Which of the following are true about the enhanced for loop? (Choose 1 answer)",
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
      "Which lines contain a valid constructor in the following code? (Choose 3 answers)",
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
      "Which of the following is true about a Java source file? (Choose 2 answers)",
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
    question: "Identify correct statements. (Choose 1 answer)",
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
    question: "Which of these for statements are valid? (Choose 1 answer)",
    code: ``,
    answers: [
      { text: "1, 2", correct: false },
      { text: "3, 4", correct: false },
      { text: "1, 5", correct: false },
      { text: "4, 5", correct: true },
      { text: "5", correct: false },
    ],
    explanation:
      "Statements 4 and 5 are valid. Statement 1 has an invalid condition, and statement 2 has a syntax error in the initialization.",
  },
  {
    question:
      "What letters, and in what order, will be printed when the following program is compiled and run? (Choose 1 answer)",
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
      "What, if anything, is wrong with the following code? (Choose 1 answer)",
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
    question: "Identify correct statements. (Choose 2 answers)",
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
      "Which of the following statements will print true? (Choose 2 answers)",
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
    question: "What is the result? (Choose 1 answer)",
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
      "A try statement must always have a ............. associated with it. (Choose 1 answer)",
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
      "What sequence of digits will the following program print? (Choose 1 answer)",
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
      "Which two lines can be inserted at locations marked //1 and //2? (Choose 1 answer)",
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
    question: "Which of these are keywords in Java? (Choose 4 answers)",
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
    question: "What letters will be printed by this program? (Choose 1 answer)",
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
      { text: "B", correct: true },
      { text: "C", correct: false },
      { text: "D", correct: false },
      { text: "F", correct: false },
    ],
    explanation:
      "The switch statement matches case 1, printing 'B', and then breaks out of the LOOP.",
  },
  {
    question:
      "Which of the following operators can be used in conjunction with a String object? (Choose 3 answers)",
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
    question: "What will the following code snippet print? (Choose 1 answer)",
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
    question: "What is the result? (Choose 1 answer)",
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
      "Which of the following are NOT valid operators in Java? (Choose 4 answers)",
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
      "Which statements regarding the following code are correct? (Choose 1 answer)",
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
      "Which of the following statements can be inserted successfully at // 1? (Choose 3 answers)",
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
      "Which of the following code snippets will compile without any errors? (Choose 4 answers)",
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
    question: "What will the following program print? (Choose 1 answer)",
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
      "Which of the following options, when inserted in the above code, will print 111 222? (Choose 1 answer)",
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
      "What command should be given to compile and run a java source file named TestClass.java (for standard Oracle JDK)? (Choose 1 answer)",
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
      "What will the following class print when compiled and run? (Choose 1 answer)",
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
      { text: "It will print 10, 5.", correct: false },
      { text: "It will print 5, 10.", correct: false },
      { text: "It will print 10, 10.", correct: true },
      { text: "None of these.", correct: false },
    ],
    explanation:
      "The method setIt() sets y.link to x, so b.link points to a. Therefore, both a.link.value and b.link.value are 10.",
  },
  {
    question:
      "What will be the result of attempting to compile and run the following code? (Choose 1 answer)",
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
      "What will be the output of the following code snippet? (Choose 1 answer)",
    code: `int a = 1;
int[] ia = new int[10];
int b = ia[a];
int c = b + a;
System.out.println(b = c);`,
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "true", correct: false },
      { text: "false", correct: false },
    ],
    explanation:
      "The array ia is initialized with default values of 0. Therefore, b is 0, c is 1, and b is assigned the value of c, which is 2.",
  },
  {
    question:
      "How many objects and reference variables are created by the following code? (Choose 1 answer)",
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
      "What will the following class print when compiled and run? (Choose 1 answer)",
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
    question: "Which lines will print true? (Choose 2 answers)",
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
      "Which of the following declarations are valid? (Choose 3 answers)",
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
      "What will the following code print when compiled and run? (Choose 1 answer)",
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
      { text: "   0", correct: false },
      { text: "   1", correct: false },
      { text: "null", correct: true },
      { text: "It will throw a RuntimeException at run time.", correct: false },
    ],
    explanation:
      "The array 'arr' is initialized with null values. The concat() method does not modify the original strings, so the printData() method prints 'null' for each element.",
  },
  {
    question: "What will the following program print? (Choose 1 answer)",
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
      "Which of the following statements are correct? (Choose 1 answer)",
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
      "What is the result of executing the following fragment of code? (Choose 1 answer)",
    code: `boolean b1 = false;
boolean b2 = false;
if (b2 = b1 != b2) {
  System.out.println("true");
} else {
  System.out.println("false");
}`,
    answers: [
      { text: "Compile time error.", correct: false },
      { text: "It will print true;", correct: true },
      { text: "It will print false;", correct: false },
      { text: "Runtime error.", correct: false },
      { text: "It will print nothing.", correct: false },
    ],
    explanation:
      "The expression 'b1 != b2' evaluates to true, and 'b2 = true' assigns true to b2, so the if condition is true, printing 'true'.",
  },
  {
    question:
      "Which of the following statements will print YES? (Choose 2 answers)",
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
    question: "Which of the following statements are true? (Choose 2 answers)",
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
    question: "What will the following program print? (Choose 1 answer)",
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
      "The following method will compile and run without any problems. (Choose 1 answer)",
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
      "How many string objects are created in the following code fragment? (Choose 1 answer)",
    code: `String a, b, c;
a = new String("hello");
b = a;
c = a + b;`,
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "4", correct: false },
      { text: "5", correct: false },
    ],
    explanation:
      "Three string objects are created: one for 'new String(\"hello\")', and two for the concatenation 'a + b'.",
  },
  {
    question:
      "What will the following class print when compiled and run? (Choose 1 answer)",
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
      { text: "It will print 10, 10.", correct: true },
      { text: "It will throw an exception when run.", correct: false },
    ],
    explanation:
      "The method setIt() sets x.link to y.link, which is null. Therefore, a.link is set to null, and b.link is set to a, resulting in '10, 10'.",
  },
  {
    question:
      "Which of the following method declarations correctly declares a method named sum that takes an array of integers and returns the sum of the values in that array? (Choose 1 answer)",
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
      "Working with the String Class: Which of these expressions will obtain the substring '456' from a string defined by String str = '01234567'? (Choose 1 answer)",
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
      "Working with Java Operators: What will be the output of the following lines? (Choose 1 answer)",
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
      "Java Methods: Consider the following method. Which of the following methods correctly overload the above method? (Choose 2 answers)",
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
      "Using Decision Statements: Given the code fragment, what is the result? (Choose 1 answer)",
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
      "Arrays and ArrayLists: Given the following line of code, identify the correct statement. (Choose 1 answer)",
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
    question:
      "Working with Java Operators: What will the following code print? (Choose 1 answer)",
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
      "Classes and Constructors: Which of the following are correct ways to initialize the static variables MAX and CLASS_GUID? (Choose 2 answers)",
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
      "Working with Java Data Types: Which of these assignments are valid? (Choose 3 answers)",
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
      "Working with Java Data Types: Consider the following program. Identify the correct statements. (Choose 2 answers)",
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
      "Working with the String Class: Which line will print the string 'MUM'? (Choose 1 answer)",
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
      "Java Basics: While compiling a java file you want the compiler to generate the class file in a particular directory. Which javac option will you use? (Choose 1 answer)",
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
      "Java Methods: What will be the result of attempting to compile and run the following class? (Choose 1 answer)",
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
      "What is Java: Which of the following is correct about Java byte code? (Choose 1 answer)",
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
      "What is Java: Java ME can be used to develop applications for: (Choose 1 answer)",
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
      "Arrays and ArrayLists: Given the following declaration, select the correct way to get the size of the array, assuming that the array has been initialized. (Choose 1 answer)",
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
      "Using Decision Statements: Which of these expressions will return true? (Choose 4 answers)",
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
    question:
      "Working with Java Operators: Given the code, what is the result? (Choose 1 answer)",
    code: `
  int a = 5, b = 2, c = 30;
  System.out.println(a-- * c / b);
  `,
    answers: [
      { text: "50", correct: false },
      { text: "60", correct: true },
      { text: "75", correct: false },
      { text: "0", correct: false },
      { text: "Compilation failure", correct: false },
      { text: "Exception at run time", correct: false },
    ],
    explanation:
      "The expression evaluates to 5 * 30 / 2 = 150 / 2 = 75. However, due to the post-decrement, the value of 'a' used is 5, resulting in 60.",
  },
  {
    question:
      "Classes and Constructors: You are writing a class that represents the equation of a straight line: y = mx + c. This class has only one method named calcY that takes the value of x and returns the value of y. Which variable scopes will you use to store the values of m and c in an instance of this class? (Choose 1 answer)",
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
    question:
      "Using Looping Statements: What will the following code print? (Choose 1 answer)",
    code: `public class BreakTest {
  public static void main(String[] args) {
    int i = 0,
    j = 5;
    lab1: for (;; i++) {
      for (;; --j) if (i > j) break lab1;
    }
    System.out.println("i = " + i + " , j = " + j);
  }
}`,
    answers: [
      { text: "i = 1, j = -1", correct: true },
      { text: "i = 1, j = 4", correct: false },
      { text: "i = 0, j = 4", correct: false },
      { text: "i = 0, j = -1", correct: false },
      { text: "It will not compile.", correct: false },
    ],
    explanation:
      "The outer loop increments 'i' and the inner loop decrements 'j' until 'i > j', resulting in 'i = 1, j = -1'.",
  },
  {
    question:
      "Using Decision Statements: What is the result of executing the following fragment of code? (Choose 1 answer)",
    code: `boolean b1 = false;
boolean b2 = false;
if (b2 = b1 == false) {
  System.out.println("true");
} else {
  System.out.println("false");
}`,
    answers: [
      { text: "Compile time error.", correct: false },
      { text: "It will print true;", correct: true },
      { text: "It will print false;", correct: false },
      { text: "Runtime error.", correct: false },
      { text: "It will print nothing.", correct: false },
    ],
    explanation:
      "The expression 'b1 == false' evaluates to true, and 'b2 = true' assigns true to b2, so the if condition is true, printing 'true'.",
  },
  {
    question:
      "Using Looping Statements: Given the code, what will it print when compiled and run? (Choose 1 answer)",
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
      "Arrays and ArrayLists: Which of the following correctly declare a variable which can hold an array of 10 integers? (Choose 2 answers)",
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
      "Using Looping Statements: What is the effect of compiling and running this class? (Choose 1 answer)",
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
      "Working with the String Class: What will the following statement print? (Choose 1 answer)",
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
      "Arrays and ArrayLists: Which of the following statements are valid? (Choose 2 answers)",
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
      "Using Decision Statements: What is the result of executing the following code when the value of i is 5? (Choose 1 answer)",
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
      "Using Looping Statements: What will the following code print when run? (Choose 1 answer)",
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
      "Basic Java Elements: What will the following program print? (Choose 1 answer)",
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
      "Working with Java Operators: Which of the following are valid operators in Java? (Choose 3 answers)",
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
      "Using Looping Statements: Consider the following code snippet. Which of the following will produce the same result? (Choose 1 answer)",
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
      "Using Decision Statements: Which of the following four constructs are valid? (Choose 1 answer)",
    code: ``,
    answers: [
      { text: "1, 3", correct: false },
      { text: "1, 2, 3", correct: false },
      { text: "All are valid.", correct: true },
      { text: "3, 4", correct: false },
      { text: "1, 2, 4.", correct: false },
    ],
    explanation:
      "All the switch constructs are valid, even if they do not contain any case labels.",
  },
  {
    question:
      "Working with Java Data Types: What will the following program print? (Choose 1 answer)",
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
      "Java Basics: Which of the following features are provided by the JDK? (Choose 4 answers)",
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
      "Working with Java Operators: Which of the following expressions correctly implement the following equation: y = 10x² + 20x + 30? Assume that all variables are of type ints. (Choose 2 answers)",
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
      "Working with the String Class: What will the following statement print? (Choose 1 answer)",
    code: `int marks = 90;
String exam = "OCJA";
System.out.printf("I scored %d marks in the %s exam!", exam, marks);`,
    answers: [
      {
        text: "I scored 90 marks in the Java Foundations exam!",
        correct: false,
      },
      { text: "I scored OCAJF marks in the 90 exam!", correct: false },
      { text: "Exception will be thrown at run time.", correct: true },
      { text: "Compilation error", correct: false },
    ],
    explanation:
      "The printf method expects a format specifier for each argument. The mismatch in the number of format specifiers and arguments causes a runtime exception.",
  },
  {
    question:
      "Using Decision Statements: Which of the following statements concerning the switch construct are true? (Choose 3 answers)",
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
      "Debugging and Exception Handling: What will happen when the following program is compiled and run? (Choose 1 answer)",
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
    question:
      "Classes and Constructors: Which of these statements are true? (Choose 2 answers)",
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
      "Java Basics: Which of the following features are provided by a JDK? (Choose 1 answer)",
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
      "Working with Java Data Types: Given the following class, which statements can be inserted at line 1 without causing the code to fail compilation? (Choose 4 answers)",
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
      "Which of the following statements are used to implement a boolean conditional statement in Java? (Choose 3 answers)",
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
      "Java Methods: Which of the following statements are true? (Choose 2 answers)",
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
      "Arrays and ArrayLists: What will the following code snippet print? (Choose 1 answer)",
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
      "Using Decision Statements: Which line, if any, will give a compile time error? (Choose 1 answer)",
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
      "Java Methods: Consider the following code. Which of the following lines can be added independently to the above class so that it will run without any errors or exceptions? (Choose 2 answers)",
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
    question:
      "Working with the Random and Math Classes: Which package contains Random class? (Choose 1 answer)",
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
      "Java Basics: Given the class, now consider the following 3 options for running the program. Which of the following statements are true? (Choose 2 answers)",
    code: `// Filename: Test.java
public class Test {
  public static void main(String args[]) {
    for (int i = 0; i < args.length; i++) {
      System.out.print("  " + args[i]);
    }
  }
}`,
    answers: [
      {
        text: "The program will throw java.lang.ArrayIndexOutofBoundsException on option a.",
        correct: false,
      },
      {
        text: "The program will throw java.lang.NullPointerException on option a.",
        correct: false,
      },
      {
        text: "The program will print Test param1 on option b.",
        correct: false,
      },
      { text: "It will print param1 param2 on option c.", correct: true },
      { text: "It will not print anything on option a.", correct: true },
    ],
    explanation:
      "The program will not print anything for option a because args is empty. It will print 'param1 param2' for option c.",
  },
  {
    question:
      "Working with Java Data Types: Given the following LOCs, which of the following will put correct integer value of the char variable ch into the int variable i? (Choose 3 answers)",
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
      "Working with Java Data Types: Which of the lines will cause a compile time error in the following program? (Choose 1 answer)",
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
      "Arrays and ArrayLists: Which of the following classes are from java.util package? (Choose 3 answers)",
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
      "Working with Java Operators: What will be the result of attempting to compile and run the following code? (Choose 1 answer)",
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
      "Working with Java Data Types: Which of the following statements correctly use the float data type? (Choose 1 answer)",
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
      "Working with Java Data Types: What will the following program print? (Choose 1 answer)",
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
    question:
      "Debugging and Exception Handling: Given the code, what is the result? (Choose 1 answer)",
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
      { text: "0", correct: false },
      { text: "0", correct: false },
      { text: "0", correct: false },
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
      "Basic Java Elements: Consider the following two java files. What should be inserted at //1 so that TestClass will compile and run? (Choose 2 answers)",
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
      "Java Basics: Which of the given options can be successfully inserted at line 1? (Choose 3 answers)",
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
      "Using Looping Statements: What can be inserted in the following code so that it will print exactly 2345 when compiled and run? (Choose 2 answers)",
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
      "Classes and Constructors: Given the following code, which statements can be placed at the indicated position without causing compile and run time errors? (Choose 2 answers)",
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
      "Java Basics: Which of the following are benefits of polymorphism? (Choose 2 answers)",
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
      "Working with the Random and Math Classes: What can you do to make the following code print a number between 0 and 10? (Choose 3 answers)",
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
      "Classes and Constructors: What will happen when the following code is compiled? (Choose 1 answer)",
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
      "Working with Java Data Types: Which of the following statements declares a valid null reference? (Choose 1 answer)",
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
      "Classes and Constructors: Under what situations does a class get a default constructor? (Choose 1 answer)",
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
      "Using Looping Statements: What will be the output if you run the following program? (Choose 1 answer)",
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
      "Using Looping Statements: What will be the result of attempting to compile and run the following program? (Choose 1 answer)",
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
      "Basic Java Elements: Which of the following comments are valid? (Choose 4 answers)",
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
      "Arrays and ArrayLists: Which of the following are benefits of an array over an ArrayList? (Choose 2 answers)",
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
      "Java Methods: How can you declare a method someMethod() such that an instance of the class is not needed to access it and all the members of the same package have access to it? (Choose 3 answers)",
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
      "Java Basics: What will the following code print when run? (Choose 1 answer)",
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
      "Using Looping Statements: Which of the following statements regarding 'break' and 'continue' are true? (Choose 1 answer)",
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
      "Using Looping Statements: Given the following code fragment, which of the following lines would be a part of the output? (Choose 3 answers)",
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
      "Working with Java Data Types: Which integral type in Java has a range from -2^31 to 2^31-1? (Choose 1 answer)",
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
      "Using Decision Statements: What will it print when the following code compiled and run? (Choose 1 answer)",
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
      "Java Basics: Which of the following are true about accessor methods? (Choose 1 answer)",
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
      "Classes and Constructors: What would be the result of trying to compile and run the following program? (Choose 1 answer)",
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
      "Java Methods: Given the following pairs of method declarations, which of the statements are true? (Choose 2 answers)",
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
      "Arrays and ArrayLists: Is it possible to create arrays of length zero? (Choose 1 answer)",
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
      "Debugging and Exception Handling: What will be the result of compiling and running the following program? (Choose 1 answer)",
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
    question: "Java Basics: What is meant by 'encapsulation'? (Choose 1 answer)",
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
      "Arrays and ArrayLists: What will the following code print when compiled and run? (Choose 1 answer)",
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
      "Working with Java Data Types: What will be the result of attempting to compile and run the following code? (Choose 1 answer)",
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
    question: "Java Basics: What is meant by 'encapsulation'? (Choose 1 answer)",
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
      "Java Basics: Assuming that the following are the complete contents of TestClass.java file, what will be result of attempting to compile this file? (Choose 1 answer)",
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
      { text: "The class will fail to compile .", correct: true },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "The code will not compile because the package statement must be the first statement in the file.",
  },
  {
    question:
      "Working with Java Data Types: In which of these variable declarations, will the variable remain uninitialized unless explicitly initialized? (Choose 1 answer)",
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
      "Using Looping Statements: You have been given an array of objects and you need to process this array as follows - 1. Call a method on each object from first to last one by one. 2. Call a method on each object from last to first one by one. 3. Call a method on only those objects at even index (0, 2, 4, 6, etc.) Which of the following are correct? (Choose 1 answer)",
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
      "Using Decision Statements: Which of the following will not give any error at compile time and run time? (Choose 4 answers)",
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
      "Using Decision Statements: What will happen if you try to compile and run the following program? (Choose 2 answers)",
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
      "Java Basics: Consider the following TestClass.java file in the current directory: package a.a.a; public class TestClass { public static void main(String[] args) { System.out.println('Good!!!'); } } Which of the following command lines should be used for compiling if the generated class file is to be executed using the following command line: java -classpath . a.a.a.TestClass (Choose 1 answer)",
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
    question:
      "Using Looping Statements: What will the following code print? (Choose 1 answer)",
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
      "Working with Java Data Types: Which of the following are char literals? (Choose 3 answers)",
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
      "Using Looping Statements: What will the following program snippet print? (Choose 1 answer)",
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
      "Using Decision Statements: Consider the following method... Which of the following statements are correct? (Choose 3 answers)",
    code: `public void ifTest(boolean flag) {
  if (flag) //1
  if (flag) //2
  System.out.println("True False");
  else // 3
  System.out.println("True True");
  else // 4
  System.out.println("False False");
}`,
    answers: [
      {
        text: "If run with an argument of 'false', it will print 'False False'",
        correct: false,
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
      { text: "It will not compile.", correct: true },
    ],
    explanation:
      "The code will not compile due to the misplaced else statement. If corrected, it would print 'True False' when flag is true.",
  },
  {
    question:
      "Working with Java Operators: Given: int a = 5,  b = 2, c = 30; System.out.println( (a + b)-- * c  ); What is the result? (Choose 1 answer)",
    code: `
  int a = 5,  b = 2, c = 30;
  System.out.println( (a + b)-- * c  );
  `,
    answers: [
      { text: "180", correct: false },
      { text: "210", correct: false },
      { text: "Compilation failure", correct: true },
      { text: "Exception at run time", correct: false },
    ],
    explanation:
      "The code will not compile because the post-decrement operator '--' cannot be applied to the result of an expression.",
  },
];
