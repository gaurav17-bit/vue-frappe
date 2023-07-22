<template>
  <div style="margin-left: auto; margin-top: 30px; margin-right: auto;  background-color: black; padding:10px;">
  </div>
  <div class="flex flex-row">
    <div style="margin-top:50px; margin-left:35px; margin-bottom:auto; width:auto item-align:center;">
      <Card>
        <Input label="Battery Pack Number" placeholder="0000000" v-model="stage1.battery_pack_number"/>
      </Card>
      <Card>
       <Input label="Assembly Date" placeholder="dd-mm-yy" v-model="stage1.assembly_date"/>
      </Card>
      <Card>
        <Input label="Cell Batch Number" placeholder="0000000" v-model="stage1.batch_number"/>
      </Card>
      <Card>
         <Input label="Module Holder Preparation Operator(s)" placeholder="0000000" v-model="stage1.m_h_p_o"/>
      </Card>
      <Card>
        <Input label="Assembly Operator(s)" placeholder="0000000" v-model="stage1.a_o"/>
      </Card>
      <Card>
        <Input label="Busbar Preparation Assembly Operator(s)" placeholder="0000000" v-model="stage1.b_p_a_o"/>
      </Card>
      <Card>
        <Input label="Motor Winding Sheet Assembly Operator(s)" placeholder="0000000" v-model="stage1.m_w_s_a_o"/>
      </Card>
      <Card>
        <Input label="Assembly Status" placeholder="Enter text here" v-model="stage1.assembly_status"/>
      </Card>
      <Card>
        <Input label="Remarks (If Any)" placeholder="0000000" v-model="stage1.remarks1"/>
      </Card>
      <Button @click="Submit()">Submit</Button>
    </div>
  </div>
</template>

<script setup>
  import {Card, Input, createListResource} from 'frappe-ui'
  import {reactive, ref} from 'vue'

  const actions = createListResource ({
    doctype: 'Stage 1',
    fields: ['name',
    'battery_pack_number',
    'assembly_date',
    'batch_number',
    'm_h_p_o',
    'a_o',
    'b_p_a_o',
    'm_w_s_a_o',
    'assembly_status',
    'remarks1'],
    limit:100
    })

    actions.reload();

    const stage1 = reactive ({
    battery_pack_number:'',
    assembly_date: '',
    batch_number: '',
    m_h_p_o: '',
    a_o: '',
    b_p_a_o: '',
    m_w_s_a_o: '',
    assembly_status:'',
    remarks1:''
    }) 
    const Submit = () => {
      console.log(stage1)
      actions.insert.submit(stage1)
      
    }


</script>