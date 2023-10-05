import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { easy, medium, hard } from 't-sudoku-generator';
import { EventEmitter } from 'events';

import Square from '../game-square/sudoku-square';
import ButtonBar from '../button/button-bar';

import { Main, Board } from './sudoku.styled';

import { Reset } from '../reset';
import { Validate } from '../validate';

export const _events = new EventEmitter();

const BOARD_GETTERS = {
  easy,
  medium,
  hard,
};

const defaultState = {
  startDate: Date.now(),
  selectedBoardIndex: null,
  values: {},
  board: [],
  done: false,
  selectedRowIndex: null,
  selectedIndex: null,
  openDialog: false,
  notes: {},
  noteEnabled: false,
  history: [],
  moveCount: 0,
  showReset: false,
  showValidate: false,
  hasValidated: false,
};

class Sudoku extends React.Component {
  static propTypes = {
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
    onComplete: PropTypes.func,
    CustomResetModal: PropTypes.oneOfType([PropTypes.symbol, PropTypes.func]),
    CustomValidateModal: PropTypes.oneOfType([
      PropTypes.symbol,
      PropTypes.func,
    ]),
  };
  static defaultProps = { difficulty: 'easy', onComplete: () => null };

  state = {
    ...defaultState,
    difficulty: this.props.difficulty,
    noteDone: false,
  };
  getNotes(boardIndex, notes) {
    var r = boardIndex / 9;
    var c = boardIndex % 9;
    // update boardindex row/col
    var nums = Object.keys(this.state.values);
    if (nums.length < 81) return [];
    if (typeof this.state.values == 'undefined') return [];
    // console.log(nums.length);
    var col = -1;
    var row = 0;
    var data = nums.reduce((prev, curr, idx) => {
      col++;
      if (col == 9) {
        col = 0;
        row++;
      }
      var v = this.state.values[curr];
      prev[row] = prev[row] || [];
      // debugger;
      prev[row].push(v.value);
      return prev;
    }, []);
    // debugger;
    // for (var i = 0; i < 9; i++) {
    //   // debugger;
    //   data.push(this.state.board.get(i).map(o => o.value));
    // }
    function getCols(col) {
      var cs = [];
      for (var i = 0; i < 9; i++) {
        cs.push(data[i][col]);
      }
      return cs;
    }
    // var notes = {};
    var iel = 0;
    // debugger;
    for (var i = 0; i < 9; i++) {
      // iel=iel+1;
      var k = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      var rows = data[i].filter(o => o != null);
      k = k.filter(el => !rows.includes(el));
      // var cols=[];

      for (var j = 0; j < 9; j++) {
        iel = iel + 1;
        var cols = getCols(j);
        // console.log(rows,cols)
        var nt = k.filter(el => !cols.includes(el));
        // debugger;
        if (data[i][j] == null) {
          notes[iel] = (notes[iel]||[]).filter(x => nt.includes(x));
          // debugger;
        }

        // rows.push(m);
      }

      // debugger;
    }
    return notes;
  }

  componentDidMount() {
    document.addEventListener('keyup', this.onKeypress);

    _events.on('reset', difficulty => {
      var data = {
        ...defaultState,
        startDate: Date.now(),
        board: BOARD_GETTERS[difficulty](),
        difficulty,
        // notes:{
        //   // 0:[1,2,3,4,5,6,7,8,9],
        //   1:[1,2,3],
        //   2:[1,2,3,4,5,6,7,8,9],
        //   3:[1,2,3,4,5,6,7,8,9],
        //   4:[1,2,3,4,5,6,7,8,9]
        // }
      };
      function get(r, c) {
        return data.board.get(r - 1)[c - 1];
      }
      function getCols(col) {
        var c = [];
        for (var i = 0; i < 9; i++) {
          c.push(data.board.get(i)[col].value);
        }
        return c;
      }
      // calculate board notes
      var notes = {};
      var iel = 0;
      // debugger;
      for (var i = 0; i < 9; i++) {
        // iel=iel+1;
        var k = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        var rows = data.board
          .get(i)
          .map(o => o.value)
          .filter(o => o != null);
        k = k.filter(el => !rows.includes(el));
        // var cols=[];

        for (var j = 0; j < 9; j++) {
          iel = iel + 1;
          var cols = getCols(j);
          // console.log(rows,cols)
          var nt = k.filter(el => !cols.includes(el));
          if (get(i + 1, j + 1).value == null) {
            notes[iel] = nt;
            // debugger;
          }

          // rows.push(m);
        }

        // debugger;
      }
      // debugger;
      data.notes = notes;
      data.noteDone = true;
      // data.notes[10]=["x","y"]
      // debugger;
      this.setState(data);
    });

    _events.emit('reset', this.props.difficulty);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeypress);
    _events.removeAllListeners('reset');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.difficulty !== this.props.difficulty)
      _events.emit('reset', this.props.difficulty);
  }

  onKeypress = e => {
    const charCode = typeof e.which === 'number' ? e.which : e.keyCode;

    const value = charCode - 48;
    if (value > 0 && value <= 9) this.handleButtonPress(value);

    // if keypress is the escape or delete key, delete the value set
    if (charCode === 27 || charCode === 8) this.handleButtonPress(null);
  };

  setSelectedBoardIndexes = ({ ...indexes }) => this.setState({ ...indexes });

  setValue = (boardIndex, value) => {
    const { values, notes, noteDone } = this.state;

    this.setState({
      values: Object.assign(values, {
        [`${boardIndex}`]: value,
      }),
    });
    if (noteDone) {
      // notes=this.getNotes();
      // debugger;
      // console.log(boardIndex, "=============")
      // debugger;
    }
    // debugger;
    this.setState({
      notes: {
        ...this.getNotes(boardIndex, notes),
        [boardIndex]: [],
      },
    });
    this.isDone();
  };

  isDone = () => {
    const { values } = this.state;
    let done = true;

    if (Object.keys(values).length === 0) return;
    Object.keys(values).forEach(v => {
      if (values[v].value === '' || values[v].value === null) done = false;
    });

    if (done) {
      this.setState({ done }, () => this.validate());
    }
  };

  getBoardIndex = (index, rowIndex) => rowIndex * 9 - (9 - index);

  buildResetModal() {
    const { CustomResetModal } = this.props;

    const props = {
      primaryAction: this.resetBoard,
      cancelAction: this.toggleReset,
    };

    if (!CustomResetModal) return <Reset {...props} />;

    return CustomResetModal(props);
  }

  buildValidateModal() {
    const { CustomValidateModal } = this.props;

    const props = {
      primaryAction: this.validateCurrentBoard,
      cancelAction: this.toggleValidate,
    };

    if (!CustomValidateModal) return <Validate {...props} />;

    return CustomValidateModal(props);
  }

  toggleValidate = () =>
    this.setState({ showValidate: !this.state.showValidate });

  handleButtonPress = value => {
    const {
      selectedBoardIndex,
      values,
      notes,
      noteEnabled,
      history,
      moveCount,
    } = this.state;
    const selectedBoardIndexValue = values[selectedBoardIndex];

    const actionValues = ['notes', 'undo', 'reset', 'validate'];

    if (value === 'undo') this.undoLastMove();
    if (value === 'reset') this.toggleReset();
    if (value === 'validate') this.toggleValidate();

    if (selectedBoardIndex === null) return;
    if (selectedBoardIndexValue.isOriginal) return;

    if (!noteEnabled && !actionValues.includes(value))
      this.setState({
        history: [{ boardIndex: selectedBoardIndex, value }, ...history],
        moveCount: moveCount + 1,
      });
    if (noteEnabled && !actionValues.includes(value)) {
      const existingNotes = value ? notes[selectedBoardIndex] || [] : [];
      this.setState({
        notes: {
          ...notes,
          [selectedBoardIndex]: existingNotes.includes(value)
            ? existingNotes.filter(note => note !== value)
            : [...existingNotes, value].filter(val => val).sort(),
        },
        values: Object.assign(values, {
          [`${selectedBoardIndex}`]: Object.assign(selectedBoardIndexValue, {
            value: null,
          }),
        }),
      });
    } else if (value === 'notes') {
      this.setState({
        noteEnabled: !noteEnabled,
      });
    } else if (!actionValues.includes(value)) {
      const { error, answer } = selectedBoardIndexValue;

      this.setValue(
        selectedBoardIndex,
        Object.assign(selectedBoardIndexValue, {
          value,
          error: error && answer !== value,
        })
      );
    }
  };

  validate = () => {
    const { done, values, startDate, moveCount, hasValidated } = this.state;
    const { onComplete } = this.props;

    let errors = false;
    Object.values(values).forEach(({ value, answer }) => {
      if (value !== answer) errors = true;
    });

    if (done && !errors)
      onComplete({
        moves: moveCount,
        hasValidated,
      });
  };

  getValue = boardIndex => {
    const { values } = this.state;
    const valueForIndex = values[boardIndex];

    return valueForIndex && valueForIndex.value;
  };

  buildRow = rowIndex => ({ value: initialValue, answer }, index) => {
    const { notes, difficulty, values } = this.state;
    const { selectedBoardIndex, selectedIndex, selectedRowIndex } = this.state;
    const { hide } = this.props;
    const boardIndex = this.getBoardIndex(index + 1, rowIndex + 1);
    const value = this.getValue(boardIndex);

    return (
      <Square
        key={`${difficulty}-${(rowIndex + 1) * index + 10}`}
        value={value}
        hasError={(values[boardIndex] || {}).error}
        initialValue={initialValue}
        answer={answer}
        rowIndex={rowIndex + 1}
        boardIndex={boardIndex}
        index={index + 1}
        hide={hide}
        selectedIndex={selectedIndex}
        selectedRowIndex={selectedRowIndex}
        selectedBoardIndex={selectedBoardIndex}
        setSelectedBoardIndexes={this.setSelectedBoardIndexes}
        setValue={this.setValue}
        notes={notes[boardIndex] || []}
      />
    );
  };

  undoLastMove = () => {
    const { history } = this.state;
    if (!history.length) return;
    const moveToUndo = history.shift();

    const { value: newValue } =
      history.find(({ boardIndex }) => boardIndex === moveToUndo.boardIndex) ||
      {};

    this.setState(({ values, moveCount }) => {
      values[moveToUndo.boardIndex] = {
        ...values[moveToUndo.boardIndex],
        value: newValue || null,
      };
      moveCount++;

      return { values, moveCount };
    });
  };

  toggleReset = () => this.setState({ showReset: !this.state.showReset });

  resetBoard = () => {
    const { history, values, moveCount } = this.state;

    if (!history.length) return this.toggleReset();

    const indexesToNull = [
      ...new Set(history.map(({ boardIndex }) => boardIndex.toString())),
    ];

    const newValues = Object.keys(values).reduce((acc, key) => {
      if (indexesToNull.includes(key))
        acc[key] = { ...values[key], value: null };
      else acc[key] = values[key];

      return acc;
    }, {});

    this.setState(
      { values: newValues, moveCount: moveCount + 1, history: [] },
      () => this.toggleReset()
    );
  };

  validateCurrentBoard = () => {
    const { values } = this.state;

    const validatedValues = Object.keys(values).reduce((acc, key) => {
      const value = values[key];
      if (
        !value.isOriginal &&
        value.value !== null &&
        value.answer !== value.value
      )
        acc[key] = { ...value, error: true };
      else if (value.error && value.answer === value.value)
        acc[key] = { ...value, error: false };
      else acc[key] = value;

      return acc;
    }, {});

    this.setState({
      values: validatedValues,
      showValidate: false,
      moveCount: this.state.moveCount + 1,
      hasValidated: true,
    });
  };

  buildBoard = (x, i) => <Board key={i}>{x.map(this.buildRow(i))}</Board>;

  render() {
    const {
      noteEnabled,
      selectedBoardIndex,
      notes,
      board,
      showValidate,
      showReset,
    } = this.state;

    return (
      <Fragment>
        {showReset && this.buildResetModal()}
        {showValidate && this.buildValidateModal()}
        <Main>{board.map(this.buildBoard)}</Main>
        <ButtonBar
          onClick={this.handleButtonPress}
          enabledButtons={
            noteEnabled ? ['notes', ...(notes[selectedBoardIndex] || [])] : []
          }
        />
      </Fragment>
    );
  }
}
export default Sudoku;
