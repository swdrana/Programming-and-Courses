import 'package:flutter/material.dart';

class TodoTile extends StatelessWidget {
  const TodoTile({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(15.0),
      child: Container(
        padding: EdgeInsets.all(20.0),
        child: Row(
          children: [
            // Checkbox(value: value, onChanged: onChanged),
            Text('TODO'),
          ],
        ),
        decoration: BoxDecoration(
          color: Colors.yellow,
          borderRadius: BorderRadius.circular(10.0),
        ),
      ),
    );
  }
}
