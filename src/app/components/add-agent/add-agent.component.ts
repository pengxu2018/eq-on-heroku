import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AgentService } from 'src/app/services/agent.service';
import { BwmAgent } from 'src/app/entity/interfaces';



@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {
  form!: FormGroup;
    
  
/*
   @Input() set agent(val:BwmAgent){
    this.form = new FormGroup({
    id: new FormControl(this.agent.id),
    name: new FormControl(this.agent.bwmAgentName),
    code:new FormControl(this.agent.bwmAgentCode),
    level: new FormControl(this.agent.bwmAgentSecurityLevel),
    isActive: new FormControl(this.agent.bwmActive)
    })
   }
*/
  constructor(private service:AgentService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      bwmAgentName: [null, [Validators.required]],
      bwmAgentCode: [null, [Validators.required]],
      bwmAgentSecurityLevel: [null, [Validators.required]],
      bwmActive:  [null, [Validators.required]],
      bwmAgentPassword:  [null, [Validators.required]]
      });
  }

  saveAgent(){

    if(this.form.value.id){
      this.service.updateAgent(this.form.value).subscribe(
        result => console.log(result), 
        error => console.log(error)
        ); 
      } else{
       this.service.creatAgent(this.form.value).subscribe(
      result => console.log(result), 
      error => console.log(error)
    );    
    }



    //console.log(this.form.value)
   
  }





}
