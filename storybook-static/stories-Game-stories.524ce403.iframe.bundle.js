"use strict";(self.webpackChunkt_react_sudoku=self.webpackChunkt_react_sudoku||[]).push([[876],{"./src/stories/Game.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Game_stories}});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");var app_styled=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),t_sudoku_generator=__webpack_require__("./node_modules/t-sudoku-generator/index.js"),events=__webpack_require__("./node_modules/events/events.js");var sudoku_square_styled=styled_components_browser_esm.ZP.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-right: ${_ref=>{let{isThickRight:isThickRight,isLastColumn:isLastColumn,theme:theme}=_ref;return isThickRight?`solid 4px ${theme.board}`:isLastColumn?"":`solid 1px ${theme.board}`}};
  border-bottom: ${_ref2=>{let{isThickBottom:isThickBottom,isLastRow:isLastRow,theme:theme}=_ref2;return isThickBottom?`solid 4px ${theme.board}`:isLastRow?"":`solid 1px ${theme.board}`}};

  &:hover {
    cursor: pointer;
  }
  &:after {
    content: '';
    position: absolute;
    width: 51px;
    height: 51px;
    left: 0;
    top: 0;
    background-color: ${_ref3=>{let{isSelectedBoardIndex:isSelectedBoardIndex,isSelected:isSelected,theme:theme}=_ref3;return isSelectedBoardIndex?"":isSelected?`${theme.overlay}`:""}};
  }
`;const value_wrapper_styled_Main=styled_components_browser_esm.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,Value=styled_components_browser_esm.ZP.div`
  transition: all 0.5s;
  width: 100%;
  height: 100%;
  display: flex;
  color: ${_ref=>{let{isOriginal:isOriginal,theme:theme,hasError:hasError}=_ref;return isOriginal?theme.original:hasError?"red":theme.primary}};
  justify-content: center;
  font-family: 'Titillium Web', sans-serif;
  font-weight: bold;
  font-size: 25px;
  align-items: center;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ValueWrapper=_ref=>{let{value:value,...styleProps}=_ref;return(0,jsx_runtime.jsx)(value_wrapper_styled_Main,{children:(0,jsx_runtime.jsx)(Value,{...styleProps,children:value})})};ValueWrapper.displayName="ValueWrapper",ValueWrapper.propTypes={value:prop_types_default().number},ValueWrapper.__docgenInfo={description:"",methods:[],displayName:"ValueWrapper",props:{value:{description:"",type:{name:"number"},required:!1}}};var value_wrapper=ValueWrapper;const notes_wrapper_styled_Main=styled_components_browser_esm.ZP.div`
  display: flex;
  align-items: top left;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  align-content: flex-start;
  width: 100%;
  height: 100%;
`,notes_wrapper_styled_Value=styled_components_browser_esm.ZP.span`
  transition: all 0.5s;
  font-family: 'Titillium Web', sans-serif;
  font-weight: bold;
  font-size: 15px;
  color: ${_ref=>{let{isOriginal:isOriginal,theme:theme}=_ref;return isOriginal?theme.original:theme.secondary}};
`,NotesWrapper=_ref=>{let{values:values}=_ref;return(0,jsx_runtime.jsx)(notes_wrapper_styled_Main,{children:values.map((val=>(0,jsx_runtime.jsx)(notes_wrapper_styled_Value,{children:val},`note_${val}`)))})};NotesWrapper.displayName="NotesWrapper",NotesWrapper.propTypes={values:prop_types_default().array.isRequired},NotesWrapper.__docgenInfo={description:"",methods:[],displayName:"NotesWrapper",props:{values:{description:"",type:{name:"array"},required:!0}}};var notes_wrapper=NotesWrapper;class SudokuSquare extends react.Component{static propTypes={setSelectedBoardIndexes:prop_types_default().func.isRequired,setValue:prop_types_default().func.isRequired,notes:prop_types_default().array.isRequired,value:prop_types_default().number,initialValue:prop_types_default().number,answer:prop_types_default().number,rowIndex:prop_types_default().number,boardIndex:prop_types_default().number,index:prop_types_default().number,selectedIndex:prop_types_default().number,selectedRowIndex:prop_types_default().number,selectedBoardIndex:prop_types_default().number};state={originalValue:null};constructor(props){super(props);const{initialValue:initialValue}=this.props;this.state.originalValue=initialValue}componentDidMount(){const{setValue:setValue,answer:answer,boardIndex:boardIndex,initialValue:initialValue}=this.props;setValue(boardIndex,{value:initialValue,answer:answer,isOriginal:this.isOriginal()})}isOriginal=()=>null!==this.state.originalValue;isHighlighted=()=>{const{selectedIndex:selectedIndex,rowIndex:rowIndex,selectedRowIndex:selectedRowIndex,index:index}=this.props;return selectedIndex===index||rowIndex===selectedRowIndex};render(){const{value:value,rowIndex:rowIndex,boardIndex:boardIndex,index:index,selectedBoardIndex:selectedBoardIndex,setSelectedBoardIndexes:setSelectedBoardIndexes,initialValue:initialValue,theme:theme,notes:notes,hasError:hasError,hide:hide}=this.props;return(0,jsx_runtime.jsx)(sudoku_square_styled,{isSelected:this.isHighlighted()?1:0,isLastColumn:9===index?1:0,isLastRow:9===rowIndex?1:0,isThickRight:3===index||6===index?1:0,isThickBottom:3===rowIndex||6===rowIndex?1:0,isSelectedBoardIndex:selectedBoardIndex===boardIndex?1:0,theme:theme,onClick:()=>setSelectedBoardIndexes({selectedBoardIndex:boardIndex,selectedIndex:index,selectedRowIndex:rowIndex}),children:hide?null:notes.length?(0,jsx_runtime.jsx)(notes_wrapper,{values:notes}):(0,jsx_runtime.jsx)(value_wrapper,{theme:theme,hasError:hasError,isOriginal:this.isOriginal()?1:0,isHighlighted:this.isHighlighted()?1:0,isSelectedBoardIndex:selectedBoardIndex===boardIndex?1:0,value:initialValue||value,smaller:notes.length>0})})}}SudokuSquare.displayName="SudokuSquare",SudokuSquare.__docgenInfo={description:"",methods:[{name:"isOriginal",docblock:null,modifiers:[],params:[],returns:null},{name:"isHighlighted",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SudokuSquare",props:{setSelectedBoardIndexes:{description:"",type:{name:"func"},required:!0},setValue:{description:"",type:{name:"func"},required:!0},notes:{description:"",type:{name:"array"},required:!0},value:{description:"",type:{name:"number"},required:!1},initialValue:{description:"",type:{name:"number"},required:!1},answer:{description:"",type:{name:"number"},required:!1},rowIndex:{description:"",type:{name:"number"},required:!1},boardIndex:{description:"",type:{name:"number"},required:!1},index:{description:"",type:{name:"number"},required:!1},selectedIndex:{description:"",type:{name:"number"},required:!1},selectedRowIndex:{description:"",type:{name:"number"},required:!1},selectedBoardIndex:{description:"",type:{name:"number"},required:!1}}};var sudoku_square=SudokuSquare,button_bar=__webpack_require__("./src/button/button-bar.js");const sudoku_styled_Main=styled_components_browser_esm.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${_ref=>{let{theme:theme}=_ref;return`${theme.background}`}};

  width: 460px;
  overflow: hidden;
  color: ${_ref2=>{let{theme:theme}=_ref2;return`${theme.inverted}`}};
`,Board=styled_components_browser_esm.ZP.div`
  display: flex;
`;var src_reset=__webpack_require__("./src/reset/index.js"),src_button=__webpack_require__("./src/button/index.js");const validate_styled_Main=styled_components_browser_esm.ZP.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  border: ${_ref=>{let{theme:theme}=_ref;return`solid 1px ${theme.board}`}};
  border-radius: 8px;
  background-color: ${_ref2=>{let{theme:theme}=_ref2;return theme.background}};
  z-index: 100;
`,Message=styled_components_browser_esm.ZP.p`
  font-size: small;
  font-family: 'Montserrat', sans-serif;
  color: ${_ref3=>{let{theme:theme}=_ref3;return theme.primary}};
`,ConfirmButton=(0,styled_components_browser_esm.ZP)(src_button.z)`
  width: 90px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 8px;
  border-color: ${_ref4=>{let{theme:theme}=_ref4;return theme.primary}};
  &:hover {
    color: ${_ref5=>{let{theme:theme}=_ref5;return theme.primary}};
  }
  background-color: transparent;
`,CancelButton=(0,styled_components_browser_esm.ZP)(src_button.z)`
  width: 90px;
  font-size: 16px;
  background-color: transparent;
  border-radius: 8px;
  border-color: ${_ref6=>{let{theme:theme}=_ref6;return theme.inverted}};
  font-family: 'Montserrat', sans-serif;
  &:hover {
    color: ${_ref7=>{let{theme:theme}=_ref7;return theme.primary}};
  }
`,ButtonBox=styled_components_browser_esm.ZP.div`
  display: flex;
`;class Reset extends react.Component{static propTypes={onAction:prop_types_default().func.isRequired,onClose:prop_types_default().func.isRequired};render(){const{primaryAction:primaryAction,cancelAction:cancelAction}=this.props;return(0,jsx_runtime.jsxs)(validate_styled_Main,{children:[(0,jsx_runtime.jsx)(Message,{children:"Validating your sudoku board will disqualify your score. Do you still wish to validate your board?"}),(0,jsx_runtime.jsxs)(ButtonBox,{children:[(0,jsx_runtime.jsx)(CancelButton,{onClick:cancelAction,children:"No"}),(0,jsx_runtime.jsx)(ConfirmButton,{onClick:primaryAction,children:"Yes"})]})]})}}Reset.displayName="Reset",Reset.__docgenInfo={description:"",methods:[],displayName:"Reset",props:{onAction:{description:"",type:{name:"func"},required:!0},onClose:{description:"",type:{name:"func"},required:!0}}};const _events=new events.EventEmitter,BOARD_GETTERS={easy:t_sudoku_generator.easy,medium:t_sudoku_generator.medium,hard:t_sudoku_generator.hard},defaultState={startDate:Date.now(),selectedBoardIndex:null,values:{},board:[],done:!1,selectedRowIndex:null,selectedIndex:null,openDialog:!1,notes:{},noteEnabled:!1,history:[],moveCount:0,showReset:!1,showValidate:!1,hasValidated:!1};class Sudoku extends react.Component{static propTypes={difficulty:prop_types_default().oneOf(["easy","medium","hard"]),onComplete:prop_types_default().func,CustomResetModal:prop_types_default().oneOfType([prop_types_default().symbol,prop_types_default().func]),CustomValidateModal:prop_types_default().oneOfType([prop_types_default().symbol,prop_types_default().func])};static defaultProps={difficulty:"easy",onComplete:()=>null};state={...defaultState,difficulty:this.props.difficulty,noteDone:!1};getNotes(boardIndex,notes){var nums=Object.keys(this.state.values);if(nums.length<81)return[];if(void 0===this.state.values)return[];var col=-1,row=0,data=nums.reduce(((prev,curr,idx)=>{9==++col&&(col=0,row++);var v=this.state.values[curr];return prev[row]=prev[row]||[],prev[row].push(v.value),prev}),[]);function getCols(col){for(var cs=[],i=0;i<9;i++)cs.push(data[i][col]);return cs}for(var iel=0,i=0;i<9;i++){var k=[1,2,3,4,5,6,7,8,9],rows=data[i].filter((o=>null!=o));k=k.filter((el=>!rows.includes(el)));for(var j=0;j<9;j++){iel+=1;var cols=getCols(j),nt=k.filter((el=>!cols.includes(el)));null==data[i][j]&&(notes[iel]=(notes[iel]||[]).filter((x=>nt.includes(x))))}}return notes}componentDidMount(){document.addEventListener("keyup",this.onKeypress),_events.on("reset",(difficulty=>{var data={...defaultState,startDate:Date.now(),board:BOARD_GETTERS[difficulty](),difficulty:difficulty};function getCols(col){for(var c=[],i=0;i<9;i++)c.push(data.board.get(i)[col].value);return c}for(var r,c,notes={},iel=0,i=0;i<9;i++){var k=[1,2,3,4,5,6,7,8,9],rows=data.board.get(i).map((o=>o.value)).filter((o=>null!=o));k=k.filter((el=>!rows.includes(el)));for(var j=0;j<9;j++){iel+=1;var cols=getCols(j),nt=k.filter((el=>!cols.includes(el)));null==(r=i+1,c=j+1,data.board.get(r-1)[c-1]).value&&(notes[iel]=nt)}}data.notes=notes,data.noteDone=!0,this.setState(data)})),_events.emit("reset",this.props.difficulty)}componentWillUnmount(){document.removeEventListener("keyup",this.onKeypress),_events.removeAllListeners("reset")}componentDidUpdate(prevProps){prevProps.difficulty!==this.props.difficulty&&_events.emit("reset",this.props.difficulty)}onKeypress=e=>{const charCode="number"==typeof e.which?e.which:e.keyCode,value=charCode-48;value>0&&value<=9&&this.handleButtonPress(value),27!==charCode&&8!==charCode||this.handleButtonPress(null)};setSelectedBoardIndexes=_ref=>{let{...indexes}=_ref;return this.setState({...indexes})};setValue=(boardIndex,value)=>{const{values:values,notes:notes,noteDone:noteDone}=this.state;this.setState({values:Object.assign(values,{[`${boardIndex}`]:value})}),this.setState({notes:{...this.getNotes(boardIndex,notes),[boardIndex]:[]}}),this.isDone()};isDone=()=>{const{values:values}=this.state;let done=!0;0!==Object.keys(values).length&&(Object.keys(values).forEach((v=>{""!==values[v].value&&null!==values[v].value||(done=!1)})),done&&this.setState({done:done},(()=>this.validate())))};getBoardIndex=(index,rowIndex)=>9*rowIndex-(9-index);buildResetModal(){const{CustomResetModal:CustomResetModal}=this.props,props={primaryAction:this.resetBoard,cancelAction:this.toggleReset};return CustomResetModal?CustomResetModal(props):(0,jsx_runtime.jsx)(src_reset.A,{...props})}buildValidateModal(){const{CustomValidateModal:CustomValidateModal}=this.props,props={primaryAction:this.validateCurrentBoard,cancelAction:this.toggleValidate};return CustomValidateModal?CustomValidateModal(props):(0,jsx_runtime.jsx)(Reset,{...props})}toggleValidate=()=>this.setState({showValidate:!this.state.showValidate});handleButtonPress=value=>{const{selectedBoardIndex:selectedBoardIndex,values:values,notes:notes,noteEnabled:noteEnabled,history:history,moveCount:moveCount}=this.state,selectedBoardIndexValue=values[selectedBoardIndex],actionValues=["notes","undo","reset","validate"];if("undo"===value&&this.undoLastMove(),"reset"===value&&this.toggleReset(),"validate"===value&&this.toggleValidate(),null!==selectedBoardIndex&&!selectedBoardIndexValue.isOriginal)if(noteEnabled||actionValues.includes(value)||this.setState({history:[{boardIndex:selectedBoardIndex,value:value},...history],moveCount:moveCount+1}),noteEnabled&&!actionValues.includes(value)){const existingNotes=value&&notes[selectedBoardIndex]||[];this.setState({notes:{...notes,[selectedBoardIndex]:existingNotes.includes(value)?existingNotes.filter((note=>note!==value)):[...existingNotes,value].filter((val=>val)).sort()},values:Object.assign(values,{[`${selectedBoardIndex}`]:Object.assign(selectedBoardIndexValue,{value:null})})})}else if("notes"===value)this.setState({noteEnabled:!noteEnabled});else if(!actionValues.includes(value)){const{error:error,answer:answer}=selectedBoardIndexValue;this.setValue(selectedBoardIndex,Object.assign(selectedBoardIndexValue,{value:value,error:error&&answer!==value}))}};validate=()=>{const{done:done,values:values,startDate:startDate,moveCount:moveCount,hasValidated:hasValidated}=this.state,{onComplete:onComplete}=this.props;let errors=!1;Object.values(values).forEach((_ref2=>{let{value:value,answer:answer}=_ref2;value!==answer&&(errors=!0)})),done&&!errors&&onComplete({moves:moveCount,hasValidated:hasValidated})};getValue=boardIndex=>{const{values:values}=this.state,valueForIndex=values[boardIndex];return valueForIndex&&valueForIndex.value};buildRow=rowIndex=>(_ref3,index)=>{let{value:initialValue,answer:answer}=_ref3;const{notes:notes,difficulty:difficulty,values:values}=this.state,{selectedBoardIndex:selectedBoardIndex,selectedIndex:selectedIndex,selectedRowIndex:selectedRowIndex}=this.state,{hide:hide}=this.props,boardIndex=this.getBoardIndex(index+1,rowIndex+1),value=this.getValue(boardIndex);return(0,jsx_runtime.jsx)(sudoku_square,{value:value,hasError:(values[boardIndex]||{}).error,initialValue:initialValue,answer:answer,rowIndex:rowIndex+1,boardIndex:boardIndex,index:index+1,hide:hide,selectedIndex:selectedIndex,selectedRowIndex:selectedRowIndex,selectedBoardIndex:selectedBoardIndex,setSelectedBoardIndexes:this.setSelectedBoardIndexes,setValue:this.setValue,notes:notes[boardIndex]||[]},`${difficulty}-${(rowIndex+1)*index+10}`)};undoLastMove=()=>{const{history:history}=this.state;if(!history.length)return;const moveToUndo=history.shift(),{value:newValue}=history.find((_ref4=>{let{boardIndex:boardIndex}=_ref4;return boardIndex===moveToUndo.boardIndex}))||{};this.setState((_ref5=>{let{values:values,moveCount:moveCount}=_ref5;return values[moveToUndo.boardIndex]={...values[moveToUndo.boardIndex],value:newValue||null},moveCount++,{values:values,moveCount:moveCount}}))};toggleReset=()=>this.setState({showReset:!this.state.showReset});resetBoard=()=>{const{history:history,values:values,moveCount:moveCount}=this.state;if(!history.length)return this.toggleReset();const indexesToNull=[...new Set(history.map((_ref6=>{let{boardIndex:boardIndex}=_ref6;return boardIndex.toString()})))],newValues=Object.keys(values).reduce(((acc,key)=>(indexesToNull.includes(key)?acc[key]={...values[key],value:null}:acc[key]=values[key],acc)),{});this.setState({values:newValues,moveCount:moveCount+1,history:[]},(()=>this.toggleReset()))};validateCurrentBoard=()=>{const{values:values}=this.state,validatedValues=Object.keys(values).reduce(((acc,key)=>{const value=values[key];return value.isOriginal||null===value.value||value.answer===value.value?value.error&&value.answer===value.value?acc[key]={...value,error:!1}:acc[key]=value:acc[key]={...value,error:!0},acc}),{});this.setState({values:validatedValues,showValidate:!1,moveCount:this.state.moveCount+1,hasValidated:!0})};buildBoard=(x,i)=>(0,jsx_runtime.jsx)(Board,{children:x.map(this.buildRow(i))},i);render(){const{noteEnabled:noteEnabled,selectedBoardIndex:selectedBoardIndex,notes:notes,board:board,showValidate:showValidate,showReset:showReset}=this.state;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[showReset&&this.buildResetModal(),showValidate&&this.buildValidateModal(),(0,jsx_runtime.jsx)(sudoku_styled_Main,{children:board.map(this.buildBoard)}),(0,jsx_runtime.jsx)(button_bar.Z,{onClick:this.handleButtonPress,enabledButtons:noteEnabled?["notes",...notes[selectedBoardIndex]||[]]:[]})]})}}Sudoku.displayName="Sudoku",Sudoku.__docgenInfo={description:"",methods:[{name:"getNotes",docblock:null,modifiers:[],params:[{name:"boardIndex",type:null},{name:"notes",type:null}],returns:null},{name:"onKeypress",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"setSelectedBoardIndexes",docblock:null,modifiers:[],params:[{name:"{ ...indexes }",type:null}],returns:null},{name:"setValue",docblock:null,modifiers:[],params:[{name:"boardIndex",type:null},{name:"value",type:null}],returns:null},{name:"isDone",docblock:null,modifiers:[],params:[],returns:null},{name:"getBoardIndex",docblock:null,modifiers:[],params:[{name:"index",type:null},{name:"rowIndex",type:null}],returns:null},{name:"buildResetModal",docblock:null,modifiers:[],params:[],returns:null},{name:"buildValidateModal",docblock:null,modifiers:[],params:[],returns:null},{name:"toggleValidate",docblock:null,modifiers:[],params:[],returns:null},{name:"handleButtonPress",docblock:null,modifiers:[],params:[{name:"value",type:null}],returns:null},{name:"validate",docblock:null,modifiers:[],params:[],returns:null},{name:"getValue",docblock:null,modifiers:[],params:[{name:"boardIndex",type:null}],returns:null},{name:"buildRow",docblock:null,modifiers:[],params:[{name:"rowIndex",type:null}],returns:null},{name:"undoLastMove",docblock:null,modifiers:[],params:[],returns:null},{name:"toggleReset",docblock:null,modifiers:[],params:[],returns:null},{name:"resetBoard",docblock:null,modifiers:[],params:[],returns:null},{name:"validateCurrentBoard",docblock:null,modifiers:[],params:[],returns:null},{name:"buildBoard",docblock:null,modifiers:[],params:[{name:"x",type:null},{name:"i",type:null}],returns:null}],displayName:"Sudoku",props:{difficulty:{defaultValue:{value:"'easy'",computed:!1},description:"",type:{name:"enum",value:[{value:"'easy'",computed:!1},{value:"'medium'",computed:!1},{value:"'hard'",computed:!1}]},required:!1},onComplete:{defaultValue:{value:"() => null",computed:!1},description:"",type:{name:"func"},required:!1},CustomResetModal:{description:"",type:{name:"union",value:[{name:"symbol"},{name:"func"}]},required:!1},CustomValidateModal:{description:"",type:{name:"union",value:[{name:"symbol"},{name:"func"}]},required:!1}}};var sudoku=Sudoku;styled_components_browser_esm.hi`
 @import url('https://fonts.googleapis.com/css?family=Montserrat|Titillium+Web');
`;class App extends react.Component{state={theme:{name:"Light Orange",primary:"rgba(255,90,0,1)",secondary:"rgba(0,0,0,1)",board:"rgba(255,90,0,0.7)",overlay:"rgba(255,90,0,0.2)",background:"white",original:"rgba(102, 102, 102,1)",inverted:"black"}};render(){const{theme:theme}=this.state,{onComplete:onComplete,difficulty:difficulty,hide:hide,CustomResetModal:CustomResetModal,CustomValidateModal:CustomValidateModal}=this.props;return(0,jsx_runtime.jsx)(styled_components_browser_esm.f6,{theme:theme,children:(0,jsx_runtime.jsx)(app_styled,{children:(0,jsx_runtime.jsx)(sudoku,{hide:hide,onComplete:onComplete,difficulty:difficulty,CustomResetModal:CustomResetModal,CustomValidateModal:CustomValidateModal})})})}}App.displayName="App",App.__docgenInfo={description:"",methods:[],displayName:"App"};var app=App,dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");class Game extends react.Component{state={difficulty:"easy",hide:!1};render(){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{onClick:()=>this.setState({difficulty:"easy"}),children:"Easy"}),(0,jsx_runtime.jsx)("button",{onClick:()=>this.setState({difficulty:"medium"}),children:"Medium"}),(0,jsx_runtime.jsx)("button",{onClick:()=>this.setState({difficulty:"hard"}),children:"Hard"}),(0,jsx_runtime.jsx)("button",{onClick:()=>this.setState({hide:!this.state.hide}),children:this.state.hide?"Reveal":"Hide"}),(0,jsx_runtime.jsx)(app,{difficulty:this.state.difficulty,onComplete:(0,dist.aD)("done"),hide:this.state.hide,...this.props})]})}}Game.displayName="Game";var Game_stories={title:"Game",component:Game,parameters:{layout:"fullscreen"},tags:["autodocs"]};const Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/button/button-bar.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return button_bar}});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),md=__webpack_require__("./node_modules/react-icons/md/index.mjs"),button_button=__webpack_require__("./src/button/button.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Main=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: column;
  z-index: 99;
`,FirstRow=styled_components_browser_esm.ZP.div`
  color: ${_ref=>{let{theme:theme}=_ref;return`${theme.inverted}`}};
  display: flex;
`,SecondRow=styled_components_browser_esm.ZP.div`
  color: ${_ref2=>{let{theme:theme}=_ref2;return`${theme.inverted}`}};
  display: flex;
`,ThirdRow=styled_components_browser_esm.ZP.div`
  color: ${_ref3=>{let{theme:theme}=_ref3;return`${theme.inverted}`}};
  display: flex;
  justify-content: space-around;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const firstButtons=[1,2,3,4,5],secondButtons=[6,7,8,9,null],iconButtons=["reset","undo","validate","notes"],ICONS={notes:md.zmo,undo:md.TsG,reset:md.FVj,validate:md.vB0};class ButtonBar extends react.Component{static propTypes={enabledButtons:prop_types_default().array.isRequired,onClick:prop_types_default().func.isRequired};buildButton=value=>{const{onClick:onClick,enabledButtons:enabledButtons}=this.props;return(0,jsx_runtime.jsx)(button_button.Z,{onClick:onClick,value:value,enabled:enabledButtons.includes(value)},value)};buildIconButton=iconName=>{const{onClick:onClick,enabledButtons:enabledButtons}=this.props,Icon=ICONS[iconName];return(0,jsx_runtime.jsx)(button_button.Z,{title:iconName,onClick:onClick,value:iconName,enabled:enabledButtons.includes(iconName),children:(0,jsx_runtime.jsx)(Icon,{title:iconName,size:"0.75em"})},iconName)};render(){return(0,jsx_runtime.jsxs)(Main,{children:[(0,jsx_runtime.jsx)(FirstRow,{children:firstButtons.map(this.buildButton)}),(0,jsx_runtime.jsx)(SecondRow,{children:secondButtons.map(this.buildButton)}),(0,jsx_runtime.jsx)(ThirdRow,{children:iconButtons.map(this.buildIconButton)})]})}}ButtonBar.displayName="ButtonBar",ButtonBar.__docgenInfo={description:"",methods:[{name:"buildButton",docblock:null,modifiers:[],params:[{name:"value",type:null}],returns:null},{name:"buildIconButton",docblock:null,modifiers:[],params:[{name:"iconName",type:null}],returns:null}],displayName:"ButtonBar",props:{enabledButtons:{description:"",type:{name:"array"},required:!0},onClick:{description:"",type:{name:"func"},required:!0}}};var button_bar=ButtonBar},"./src/button/button.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return button_button}});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),md=__webpack_require__("./node_modules/react-icons/md/index.mjs");var button_styled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div`
  display: flex;
  transition: all 0.3s;
  align-items: center;
  font-family: 'Titillium Web', sans-serif;
  font-weight: bold;
  font-size: 25px;
  user-select: none;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: ${_ref=>{let{enabled:enabled,theme:theme}=_ref;return enabled&&theme.primary}};
  color: ${_ref2=>{let{theme:theme}=_ref2;return`1px solid ${theme.secondary}`}};
  border: ${_ref3=>{let{theme:theme}=_ref3;return`2px solid ${theme.primary}`}};
  border-radius: 50%;
  margin: 5px;
  &:hover {
    cursor: pointer;
    color: ${_ref4=>{let{theme:theme,enabled:enabled}=_ref4;return enabled?`${theme.background}`:`${theme.primary}`}};
  }
`,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{onClick:onClick,value:value,enabled:enabled,children:children,className:className,title:title}=_ref;return(0,jsx_runtime.jsx)(button_styled,{title:title,className:className,onClick:()=>onClick(value),enabled:enabled,children:children||value||(0,jsx_runtime.jsx)(md.lUB,{size:"0.75em"})})};Button.displayName="Button",Button.propTypes={onClick:prop_types_default().func.isRequired,enabled:prop_types_default().bool,value:prop_types_default().node,children:prop_types_default().node,className:prop_types_default().string,title:prop_types_default().string},Button.defaultProps={enabled:!0},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{enabled:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{description:"",type:{name:"func"},required:!0},value:{description:"",type:{name:"node"},required:!1},children:{description:"",type:{name:"node"},required:!1},className:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1}}};var button_button=Button},"./src/button/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return _button__WEBPACK_IMPORTED_MODULE_1__.Z}});__webpack_require__("./src/button/button-bar.js");var _button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/button/button.js")},"./src/reset/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return Reset}});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),src_button=__webpack_require__("./src/button/index.js");const Main=styled_components_browser_esm.ZP.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  border: ${_ref=>{let{theme:theme}=_ref;return`solid 1px ${theme.board}`}};
  border-radius: 8px;
  background-color: ${_ref2=>{let{theme:theme}=_ref2;return theme.background}};
  z-index: 100;
`,Message=styled_components_browser_esm.ZP.p`
  font-size: small;
  font-family: 'Montserrat', sans-serif;
  color: ${_ref3=>{let{theme:theme}=_ref3;return theme.primary}};
`,ConfirmButton=(0,styled_components_browser_esm.ZP)(src_button.z)`
  width: 90px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 8px;
  border-color: ${_ref4=>{let{theme:theme}=_ref4;return theme.primary}};
  &:hover {
    color: ${_ref5=>{let{theme:theme}=_ref5;return theme.primary}};
  }
  background-color: transparent;
`,CancelButton=(0,styled_components_browser_esm.ZP)(src_button.z)`
  width: 90px;
  font-size: 16px;
  background-color: transparent;
  border-radius: 8px;
  border-color: ${_ref6=>{let{theme:theme}=_ref6;return theme.inverted}};
  font-family: 'Montserrat', sans-serif;
  &:hover {
    color: ${_ref7=>{let{theme:theme}=_ref7;return theme.primary}};
  }
`,ButtonBox=styled_components_browser_esm.ZP.div`
  display: flex;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class Reset extends react.Component{static propTypes={onAction:prop_types_default().func.isRequired,onClose:prop_types_default().func.isRequired};render(){const{primaryAction:primaryAction,cancelAction:cancelAction}=this.props;return(0,jsx_runtime.jsxs)(Main,{children:[(0,jsx_runtime.jsx)(Message,{children:"Would like to reset the game?"}),(0,jsx_runtime.jsxs)(ButtonBox,{children:[(0,jsx_runtime.jsx)(CancelButton,{onClick:cancelAction,children:"No"}),(0,jsx_runtime.jsx)(ConfirmButton,{onClick:primaryAction,children:"Yes"})]})]})}}Reset.displayName="Reset",Reset.__docgenInfo={description:"",methods:[],displayName:"Reset",props:{onAction:{description:"",type:{name:"func"},required:!0},onClose:{description:"",type:{name:"func"},required:!0}}}}}]);
//# sourceMappingURL=stories-Game-stories.524ce403.iframe.bundle.js.map