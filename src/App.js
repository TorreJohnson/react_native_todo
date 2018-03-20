import React, { Component } from 'react';
import { StyleSheet, View, Text, CheckBox, TextInput, Button, Switch } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'black'
  },
  header: {
    fontSize: 34,
    color: 'white',
    textAlign: 'center'
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  button: {
    width: 50
  },
  todo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  checkbox: {
    marginRight: 10
  },
  label: {
    fontSize: 28
  }
})

class App extends Component {
  state = {
    todos: [
      {
        task: 'Code',
        completed: false,
      },
      {
        task: 'Eat Lunch',
        completed: false,
      },
      {
        task: 'Write a Blog',
        completed: false,
      },
    ],
  }

  onSubmit = () => {
    this.setState(prevState => ({
      value: '',
      todos: [...prevState.todos, {task: this.state.value, completed: false}]
    }))
  }

  render() {
    return (
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>TODO App</Text>
        </View>
        <TextInput styles={styles.input} value={this.state.value}
          onChangeText={value => {
            this.setState({ value })
          }}
          onSubmitEditing={this.onSubmit} />
        <Button onPress={this.onSubmit} title="Add" styles={styles.button} />
        <View>
          {this.state.todos.map((todo, index) => {
            return (
              <View style={styles.todo}>
                <CheckBox style={styles.checkbox} value={todo.completed} onValueChange={() => {
                    let todos = [...this.state.todos];
                    todos[index].completed = !todos[index].completed
                    this.setState({ todos })
                  }} />
                <Text style={styles.label}>{todo.task}</Text>
              </View>
            )
          })}
        </View>
        <Switch activeThumbColor={color = #009688}>
          Hide Completed Tasks
        </Switch>
      </View>
    );
  }
}

export default App;
