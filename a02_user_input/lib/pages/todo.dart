import 'package:flutter/material.dart';

class TodoPage extends StatefulWidget {
  const TodoPage({super.key});

  @override
  State<TodoPage> createState() => _TodoPageState();
}

class _TodoPageState extends State<TodoPage> {
  TextEditingController textController = TextEditingController();
  String userName = '';
  greetUser() {
    setState(() {
      userName =  'Hello, ' + textController.text + '!';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Todo List',
          style: TextStyle(color: Colors.white),
        ),
        backgroundColor: Color(0xFF9257F7),
      ),
      body: Center(
          child: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('$userName'),
            TextField(
              controller: textController,
              decoration: InputDecoration(
                hintText: "Enter your name",
              ),
            ),
            ElevatedButton(
              onPressed: greetUser,
              child: Text(
                'Add',
                style: TextStyle(color: Colors.white),
              ),
              style:
                  ElevatedButton.styleFrom(backgroundColor: Color(0xFF9257F7)),
            ),
          ],
        ),
      )),
    );
  }
}
