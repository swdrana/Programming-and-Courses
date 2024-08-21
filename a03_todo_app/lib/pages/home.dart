import 'package:a03_todo_app/components/todo_tile.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.yellow[200],
        appBar: AppBar(
          title: Text('TO DO'),
          elevation: 0,
          backgroundColor: Colors.yellow,
        ),
        body: ListView(
          children: [TodoTile(), TodoTile(), TodoTile(), TodoTile()]
        ));
  }
}
