import 'package:flutter/material.dart';

class CounterPage extends StatefulWidget {
  const CounterPage({super.key});

  @override
  State<CounterPage> createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> {
  // variable
  int _counter = 0;
  // method
  void _incrementer() {
    setState(() {
      _counter++;
    });
  }
  // UI
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Counter:'), 
            Text(_counter.toString()),
            ElevatedButton(onPressed: _incrementer, child: Text('Increment'))
          ],
        ),
      ),
    );
  }
}
