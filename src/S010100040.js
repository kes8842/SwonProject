import React,{ Fragment,useState,useEffect } from 'react';
import Navbar from'./Navbar';
import S010100010 from './S010100010';
import S010100050 from './S010100050';
import './css/S010100040.css';
import axios from "axios";


//<!--모달창 라이브러리
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
//모달창 라이브러리 끝-->

//<!--켈린더 라이브러리시작
import DatePicker, { registerLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';
registerLocale("ko", ko);
//켈린더 라이브러리 끝-->ghy


let valueArr = [[]];
let queryArr = [['MEMBER_TP','']];
let endStatus = [{key:'전체',value:'전체'},
                 {key:'Y',value:'Y'},
                 {key:'N',value:'N'}]
let contractsStatus = [{key:'전체',value:'전체'},
                       {key:'C',value:'확정'},
                       {key:'T',value:'가계약'}]


var num = '';
var rNum = 0;
function S010100040 (props) {
   
    const[memberNm, setMemberNm] = useState('')
    const[regNo, setRegNo] = useState('')
    const[memberTp, setMemberTp] = useState('')
    const[contractStatus, setContractStatus] = useState('')
    const[memberSt, setMemberSt] = useState('')
    const [name,setName] = useState('')
    const [numForDetailModal,setNumForDetailModal] = useState('')

      //<!--모달창 속성 및 이벤트 
      const [open, setOpen] = React.useState(false);
      const [storeOpen, setStoreOpen] = React.useState(false);


    for(let i = 0; i<queryArr.length; i++){
                
        let firstVal = queryArr[i][0];
        let secondVal = queryArr[i][1];
            axios.post('/api/s010100140/selectTest',{firstVal:firstVal,secondVal:secondVal})
            .then(response => {
                if(response.data.success){
                    //console.log('ask_tp',response.data.rows);
                    let arr = [{ key: '전체', value: '전체' }]

                    response.data.rows.map((data) => 
                        arr.push({
                        value: data.CD_V_MEANING,
                        key: data.CD_V

                    }));       
                
                    valueArr[i] = arr;
                    //console.log(valueArr[2]);
                }else{
                    alert("문의구분 데이터를 불러오는데 실패하였습니다.");
                }
            })
            
    }  

     
    const onHandleClickOpen = () => {
        setStoreOpen(true); 
    };  

    const onHandleClickClose = () =>{
        setStoreOpen(false);
        
        axios.post('/api/s010100010')
        .then(response => {
            if(response.data.success){
                //console.log('tb_member',response.data.rows);
                setTbMember(response.data.rows);
            }else{ 
                alert("데이터 조회를 실패하였습니다.")
            }

        })

    }

    
    const memberStHandler=(event)=>{
        setMemberSt(event.currentTarget.value);
    }

    const nameHandler=(event)=>{
        setName(event.currentTarget.value);
    }


    //<!--onSubmit
    const onFormSubmitHandler = (event)=>{
        event.preventDefault();

        const body ={   
                memberNm,
                regNo,
                name,
                memberTp,
                contractStatus
        }

        axios.post('/api/s010100040/searchMember', body)
            .then(response => {
                if(response.data.success){
                    //console.log('tb_member',response.data.rows);
                    setTbMember(response.data.rows);
                }else{ 
                    alert("검색에 실패하였습니다.")
                }

            })
      }
    //onSubmit끝-->
    
    const memberNmHandler=(event)=>{
        setMemberNm(event.currentTarget.value);
    }

    const regNoHandler=(event)=>{
        setRegNo(event.currentTarget.value);
    }
    
    const memberTpHandler=(event)=>{
        setMemberTp(event.currentTarget.value);
    }
    
    const contractStatusHandler=(event)=>{
        setContractStatus(event.currentTarget.value);
    }
    
    const onHandleDetailClickOpen = (event)=>{
        num = event.target.innerHTML;
        rNum = parseInt(num);
        setNumForDetailModal(rNum);
        

        setOpen(true);
    }

        //console.log(num);
        
    const onHandleDetailClickClose = () => {
           
        // axios.post('/api/s010100130')
        // .then(response => {
        //     if(response.data.success){
        //         //console.log(response.data.rows)
        //         setTb_s10_ask010(response.data.rows)
        //     }else{ 
        //         alert("상세 정보 가져오기를 실패하였습니다.")
        //     }

        // })
        setOpen(false);
    };


    const onModifyHandler = (event)=>{
        
    }
    const onApprovalHandler = (event)=>{
        
    }


    
    //TB_S10_ASK010 테이블 조회
    const[tbMember, setTbMember] = useState([])

    useEffect(()=>{
        
        axios.post('/api/s010100010')
            .then(response => {
                if(response.data.success){
                    //console.log('tb_member',response.data.rows);
                    setTbMember(response.data.rows);
                }else{ 
                    alert("데이터 조회를 실패하였습니다.")
                }

            })

    },[])


    const s010100040R = tbMember.map((tbMember,index)=>{
        return (
                    <tr>
                            <td key ={tbMember.id} name ="uname" variant="outlined" color="primary" id={tbMember.MEMBER_ID}> {index+1}</td>
                            <td key ={tbMember.id} >{tbMember.MEMBER_NM}</td>
                            <td key ={tbMember.id} onClick={onHandleDetailClickOpen} id={tbMember.REG_NO} >{tbMember.REG_NO}</td>
                            <td key ={tbMember.id}>{tbMember.NAME}</td>
                            <td key ={tbMember.id}>{tbMember.EMP_HP}</td>
                            <td key ={tbMember.id}>{tbMember.EMP_EMAIL}</td>
                            <td key ={tbMember.id}>{tbMember.MEMBER_TP}</td>
                            <td key ={tbMember.id}></td>
                            <td key ={tbMember.id}></td>
                    </tr>
                )});


  
      return (

            <Fragment>
                <Navbar/>
                
                    <form style = {{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'100%'}}
                     onSubmit={onFormSubmitHandler}
                    >

                    <h1>회원현황</h1>
                        <div id = "search">

                        회원명
                        <input type="text" value = {memberNm} id="memberNm" name="memberNm" size = "5"
                        onChange={memberNmHandler}/>
                        &nbsp; 


                        사업자번호   
                        <input type="text" value = {regNo} id="regNo" name="regNo" size = "5"
                        onChange={regNoHandler}/>
                        &nbsp; 
                        
                        
                        대표자명
                        <input type="text" value = {name} id="name" name="name" size = "5"
                        onChange={nameHandler}/>
                        &nbsp; 

                            회원구분
                            <select multiple={false} onChange ={memberTpHandler} value ={memberTp}>  
                                                
                                {valueArr[0].map(item => ( 
                                    <option key ={item.key} value ={item.key}>{item.value}</option>                          
                                ))}
                            </select>
                            종료
                            <select multiple={false} onChange ={contractStatusHandler} value ={contractStatus}>   
                            {endStatus.map(item => ( 
                                    <option key ={item.key} value ={item.key}>{item.value}</option>                          
                                ))}
                            </select>
                            
                            &nbsp;
                            상태 
                            <select multiple={false} onChange ={memberStHandler} value ={memberSt}>  
                                                
                                {contractsStatus.map(item => ( 
                                    <option key ={item.key} value ={item.key}>{item.value}</option>                          
                                ))}
                            </select>
                    
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            
                            <button type = "submit"> 조회</button>
                        </div>
                    <Dialog
                            maxWidth = {"lg"}
                            //fullWidth = {true}
                            open={open}
		                    onClose={onHandleDetailClickClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogContent>
                            <DialogTitle id="alert-dialog-title"><h1>회원상세정보</h1></DialogTitle>
                            <DialogContentText id="alert-dialog-description">
                                <S010100050 dataNum ={numForDetailModal} dataForm={"U"}/>
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            {/* <Button onClick={onhandleStoreClose} color="primary" autoFocus>
                                저장
                            </Button> */}
                            <input type = "button" onClick={onHandleDetailClickClose} color="primary" value = '닫기'/>
                            </DialogActions>
                        </Dialog>
                  


                    <table class= "btn">
                        <thead>
                            <tr>
                                <td colSpan="5"> <button onClick={onHandleClickOpen}>신규회원</button>
                                <button onClick={onModifyHandler}>SNS</button>
                                <button onClick={onApprovalHandler}>메일전송</button>

                                </td>

                           <td id = "alignRight"> <button>엑셀다운로드</button> </td>
                            </tr>
                        </thead>
                    </table>

                    <table id = "list">
                        <thead>
                            <tr>
                                <th rowSpan="2">No</th>
                                <th rowSpan="2">회원명</th>
                                <th rowSpan="2">사업자번호</th>
                                <th colSpan="3">대표자</th>
                                <th rowSpan="2">회원구분</th>
                                <th rowSpan="2">상태</th>
                                <th rowSpan="2">종료여부</th>
                            </tr>

                            <tr>
                                <th>성명</th>
                                <th>연락처</th>
                                <th>E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {s010100040R}
                        </tbody>
                    </table>

                    </form>

                    <Dialog
                        maxWidth = {"lg"}
                        open={storeOpen}
                        onClose={onHandleClickClose}>
                        <S010100010/> 
                        <DialogActions>
                            <Button onClick={onHandleClickClose} color="primary">
                                닫기
                            </Button>
                        </DialogActions>
                    </Dialog>

            </Fragment>
      );
    
  }
  
  export default S010100040;