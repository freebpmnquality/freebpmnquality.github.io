var samples = {
    dispatch: `<?xml version="1.0" encoding="UTF-8"?><definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:signavio="http://www.signavio.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" exporter="Signavio Process Editor, http://www.signavio.com" exporterVersion="9.3.2" expressionLanguage="http://www.w3.org/TR/XPath" id="sid-27395284-2568-4916-9f0b-86ca5997f9d0" targetNamespace="http://www.signavio.com" typeLanguage="http://www.w3.org/2001/XMLSchema" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">
    <collaboration id="sid-03cf7e27-85ea-4e73-9667-cba6fc7b1f71">
       <extensionElements>
          <signavio:signavioDiagramMetaData metaKey="revisionid" metaValue="02bfda804f564d2c94f50973a04cd2ae"/>
       </extensionElements>
       <participant id="sid-733B2545-7073-45DA-AB26-38BBA65EA57D" name="my company" processRef="sid-7AE22CBD-7F99-4865-B3F7-A262C8BF269E">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
          </extensionElements>
       </participant>
    </collaboration>
    <process id="sid-7AE22CBD-7F99-4865-B3F7-A262C8BF269E" isClosed="false" isExecutable="false" name="my company" processType="None">
       <extensionElements/>
       <laneSet id="sid-129a0979-b270-444c-858d-321c77c82dd6">
          <lane id="sid-DF9365D5-27AB-4271-A011-19C743E0013E">
             <extensionElements>
                <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
             </extensionElements>
             <flowNodeRef>sid-CD3CF3EA-70F2-47BF-891E-1F2E6E5BA52C</flowNodeRef>
             <flowNodeRef>sid-5A7A57B9-4216-427B-8E00-FE89D2C78774</flowNodeRef>
             <flowNodeRef>sid-8CA29F0F-1CEE-4834-ACA6-093636971806</flowNodeRef>
             <flowNodeRef>sid-6003A427-D3BF-4C32-94BB-632A32B88292</flowNodeRef>
             <flowNodeRef>sid-6453DFF2-F838-40E3-AA07-7212D696C42E</flowNodeRef>
             <flowNodeRef>sid-357740E1-E599-48C0-B132-F490F1900060</flowNodeRef>
             <flowNodeRef>sid-78E02FD0-0649-435B-90ED-175B8A4A640E</flowNodeRef>
             <flowNodeRef>sid-7FACD1B9-52BB-449D-8C80-FE6B8E5EC32F</flowNodeRef>
             <flowNodeRef>sid-B9B606AD-6157-4026-BDB3-DE2F94F57FA9</flowNodeRef>
             <flowNodeRef>sid-1D56B974-438E-4161-A7FA-4EA48B61A502</flowNodeRef>
             <flowNodeRef>sid-1F67978D-E438-4947-98E2-97C3955D450D</flowNodeRef>
          </lane>
          <lane id="sid-E466E717-BDD7-4B9E-B60F-98D793596EAD" name="shipping company">
             <extensionElements>
                <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
             </extensionElements>
             <flowNodeRef>sid-5FCE5BF6-284B-4E16-928D-9AA71F9BC17A</flowNodeRef>
             <flowNodeRef>sid-C62FF799-DF0B-43E9-8805-9CAB248563A0</flowNodeRef>
             <flowNodeRef>sid-099CF5BA-BCD6-4038-A118-0F66B96FA522</flowNodeRef>
             <flowNodeRef>sid-BE1F39E1-0A37-4EEC-B191-6ABDA8D052CF</flowNodeRef>
          </lane>
          <lane id="sid-1014E58D-736D-415D-A830-3020FE8E6D10" name="warehousemen">
             <extensionElements>
                <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
             </extensionElements>
             <flowNodeRef>sid-67E7281C-46B3-48D9-B7D6-3D998C573BF3</flowNodeRef>
          </lane>
       </laneSet>
       <startEvent id="sid-CD3CF3EA-70F2-47BF-891E-1F2E6E5BA52C" name="">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
          </extensionElements>
          <outgoing>sid-28F25167-CC53-4222-94FE-AF64477FA1D5</outgoing>
       </startEvent>
       <task completionQuantity="1" id="sid-5A7A57B9-4216-427B-8E00-FE89D2C78774" isForCompensation="false" name="amount" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
          </extensionElements>
          <incoming>sid-28F25167-CC53-4222-94FE-AF64477FA1D5</incoming>
          <outgoing>sid-13F9180B-C5AE-42DE-A2F2-EA7E388EC234</outgoing>
       </task>
       <exclusiveGateway gatewayDirection="Diverging" id="sid-8CA29F0F-1CEE-4834-ACA6-093636971806" name="Large Amount?">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
          </extensionElements>
          <incoming>sid-47C3004A-3FAA-4FD8-9FD9-79B5709B0F22</incoming>
          <outgoing>sid-87B2BCA3-89C5-4723-AA97-1E625C724B9C</outgoing>
          <outgoing>sid-DCF8F812-B395-4E17-9BB8-44A3674E420C</outgoing>
       </exclusiveGateway>
       <task completionQuantity="1" id="sid-6003A427-D3BF-4C32-94BB-632A32B88292" isForCompensation="false" name="make package label" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
          </extensionElements>
          <incoming>sid-87B2BCA3-89C5-4723-AA97-1E625C724B9C</incoming>
          <incoming>sid-A4CB314B-EACC-469C-8BB1-72847D09CAA2</incoming>
          <outgoing>sid-78883F0C-9F72-4FF4-911F-4DEF6DB7DCCE</outgoing>
       </task>
       <parallelGateway gatewayDirection="Diverging" id="sid-6453DFF2-F838-40E3-AA07-7212D696C42E" name="">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
          </extensionElements>
          <incoming>sid-13F9180B-C5AE-42DE-A2F2-EA7E388EC234</incoming>
          <outgoing>sid-47C3004A-3FAA-4FD8-9FD9-79B5709B0F22</outgoing>
          <outgoing>sid-27B974D0-BDC1-4E21-90B3-98CE7F933F3D</outgoing>
       </parallelGateway>
       <task completionQuantity="1" id="sid-357740E1-E599-48C0-B132-F490F1900060" isForCompensation="false" name="request shipping company" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
          </extensionElements>
          <incoming>sid-DCF8F812-B395-4E17-9BB8-44A3674E420C</incoming>
          <outgoing>sid-91569830-E628-4CA3-8273-D13112F50A58</outgoing>
       </task>
       <exclusiveGateway gatewayDirection="Diverging" id="sid-78E02FD0-0649-435B-90ED-175B8A4A640E" name="">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
          </extensionElements>
          <incoming>sid-91569830-E628-4CA3-8273-D13112F50A58</incoming>
          <outgoing>sid-6A0C6D70-2ABA-497C-97D9-774835658919</outgoing>
          <outgoing>sid-FFC9C675-3610-471A-B505-DE1B0B656388</outgoing>
          <outgoing>sid-48FC72FC-57F9-45AB-96D4-588C1469D823</outgoing>
       </exclusiveGateway>
       <task completionQuantity="1" id="sid-7FACD1B9-52BB-449D-8C80-FE6B8E5EC32F" isForCompensation="false" name="choice the best" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
          </extensionElements>
          <incoming>sid-04966143-5376-4E00-843A-CB0AA0C1D13A</incoming>
          <incoming>sid-7F5301C6-B53C-4028-A2AF-321A0F8F9FA6</incoming>
          <incoming>sid-7133B096-3CA5-4D45-AC50-07F43D12C30A</incoming>
          <outgoing>sid-A4CB314B-EACC-469C-8BB1-72847D09CAA2</outgoing>
       </task>
       <exclusiveGateway gatewayDirection="Diverging" id="sid-B9B606AD-6157-4026-BDB3-DE2F94F57FA9" name="">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
          </extensionElements>
          <incoming>sid-7C9B4D2D-EE1E-439B-B4BC-4F81C0821613</incoming>
          <outgoing>sid-E6C4373B-C0D5-488D-B1F0-3CAB66E90A33</outgoing>
          <outgoing>sid-6FD98B3E-6FA8-4E2A-B854-30123FF7DC4A</outgoing>
       </exclusiveGateway>
       <task completionQuantity="1" id="sid-1D56B974-438E-4161-A7FA-4EA48B61A502" isForCompensation="false" name="insurance need?" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
          </extensionElements>
          <incoming>sid-78883F0C-9F72-4FF4-911F-4DEF6DB7DCCE</incoming>
          <outgoing>sid-7C9B4D2D-EE1E-439B-B4BC-4F81C0821613</outgoing>
       </task>
       <task completionQuantity="1" id="sid-1F67978D-E438-4947-98E2-97C3955D450D" isForCompensation="false" name="make insurance and send it to logistic department head" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
          </extensionElements>
          <incoming>sid-6FD98B3E-6FA8-4E2A-B854-30123FF7DC4A</incoming>
       </task>
       <task completionQuantity="1" id="sid-5FCE5BF6-284B-4E16-928D-9AA71F9BC17A" isForCompensation="false" name="company 1 offer" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
          </extensionElements>
          <incoming>sid-6A0C6D70-2ABA-497C-97D9-774835658919</incoming>
          <outgoing>sid-04966143-5376-4E00-843A-CB0AA0C1D13A</outgoing>
       </task>
       <task completionQuantity="1" id="sid-C62FF799-DF0B-43E9-8805-9CAB248563A0" isForCompensation="false" name="company 2 offer" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
          </extensionElements>
          <incoming>sid-FFC9C675-3610-471A-B505-DE1B0B656388</incoming>
          <outgoing>sid-7133B096-3CA5-4D45-AC50-07F43D12C30A</outgoing>
       </task>
       <task completionQuantity="1" id="sid-099CF5BA-BCD6-4038-A118-0F66B96FA522" isForCompensation="false" name="company 3 offer" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
          </extensionElements>
          <incoming>sid-48FC72FC-57F9-45AB-96D4-588C1469D823</incoming>
          <outgoing>sid-7F5301C6-B53C-4028-A2AF-321A0F8F9FA6</outgoing>
       </task>
       <task completionQuantity="1" id="sid-BE1F39E1-0A37-4EEC-B191-6ABDA8D052CF" isForCompensation="false" name="pick up" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
          </extensionElements>
          <incoming>sid-E6C4373B-C0D5-488D-B1F0-3CAB66E90A33</incoming>
          <incoming>sid-6D28EA93-9A49-47CF-9C4E-ECD6C9972076</incoming>
       </task>
       <task completionQuantity="1" id="sid-67E7281C-46B3-48D9-B7D6-3D998C573BF3" isForCompensation="false" name="pack goods" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
          </extensionElements>
          <incoming>sid-27B974D0-BDC1-4E21-90B3-98CE7F933F3D</incoming>
          <outgoing>sid-6D28EA93-9A49-47CF-9C4E-ECD6C9972076</outgoing>
       </task>
       <sequenceFlow id="sid-28F25167-CC53-4222-94FE-AF64477FA1D5" name="" sourceRef="sid-CD3CF3EA-70F2-47BF-891E-1F2E6E5BA52C" targetRef="sid-5A7A57B9-4216-427B-8E00-FE89D2C78774"/>
       <sequenceFlow id="sid-13F9180B-C5AE-42DE-A2F2-EA7E388EC234" name="" sourceRef="sid-5A7A57B9-4216-427B-8E00-FE89D2C78774" targetRef="sid-6453DFF2-F838-40E3-AA07-7212D696C42E"/>
       <sequenceFlow id="sid-47C3004A-3FAA-4FD8-9FD9-79B5709B0F22" name="" sourceRef="sid-6453DFF2-F838-40E3-AA07-7212D696C42E" targetRef="sid-8CA29F0F-1CEE-4834-ACA6-093636971806"/>
       <sequenceFlow id="sid-27B974D0-BDC1-4E21-90B3-98CE7F933F3D" name="" sourceRef="sid-6453DFF2-F838-40E3-AA07-7212D696C42E" targetRef="sid-67E7281C-46B3-48D9-B7D6-3D998C573BF3"/>
       <sequenceFlow id="sid-87B2BCA3-89C5-4723-AA97-1E625C724B9C" name="yes" sourceRef="sid-8CA29F0F-1CEE-4834-ACA6-093636971806" targetRef="sid-6003A427-D3BF-4C32-94BB-632A32B88292">
          <extensionElements>
             <signavio:signavioLabel align="center" ref="text_name" valign="middle" x="317.1113008757459" y="167.9154015729688"/>
          </extensionElements>
       </sequenceFlow>
       <sequenceFlow id="sid-DCF8F812-B395-4E17-9BB8-44A3674E420C" name="no" sourceRef="sid-8CA29F0F-1CEE-4834-ACA6-093636971806" targetRef="sid-357740E1-E599-48C0-B132-F490F1900060">
          <extensionElements>
             <signavio:signavioLabel align="center" ref="text_name" valign="middle" x="378.0" y="108.0"/>
          </extensionElements>
       </sequenceFlow>
       <sequenceFlow id="sid-91569830-E628-4CA3-8273-D13112F50A58" name="" sourceRef="sid-357740E1-E599-48C0-B132-F490F1900060" targetRef="sid-78E02FD0-0649-435B-90ED-175B8A4A640E"/>
       <sequenceFlow id="sid-6A0C6D70-2ABA-497C-97D9-774835658919" name="" sourceRef="sid-78E02FD0-0649-435B-90ED-175B8A4A640E" targetRef="sid-5FCE5BF6-284B-4E16-928D-9AA71F9BC17A"/>
       <sequenceFlow id="sid-FFC9C675-3610-471A-B505-DE1B0B656388" name="" sourceRef="sid-78E02FD0-0649-435B-90ED-175B8A4A640E" targetRef="sid-C62FF799-DF0B-43E9-8805-9CAB248563A0"/>
       <sequenceFlow id="sid-48FC72FC-57F9-45AB-96D4-588C1469D823" name="" sourceRef="sid-78E02FD0-0649-435B-90ED-175B8A4A640E" targetRef="sid-099CF5BA-BCD6-4038-A118-0F66B96FA522"/>
       <sequenceFlow id="sid-04966143-5376-4E00-843A-CB0AA0C1D13A" name="" sourceRef="sid-5FCE5BF6-284B-4E16-928D-9AA71F9BC17A" targetRef="sid-7FACD1B9-52BB-449D-8C80-FE6B8E5EC32F"/>
       <sequenceFlow id="sid-7F5301C6-B53C-4028-A2AF-321A0F8F9FA6" name="" sourceRef="sid-099CF5BA-BCD6-4038-A118-0F66B96FA522" targetRef="sid-7FACD1B9-52BB-449D-8C80-FE6B8E5EC32F"/>
       <sequenceFlow id="sid-7133B096-3CA5-4D45-AC50-07F43D12C30A" name="" sourceRef="sid-C62FF799-DF0B-43E9-8805-9CAB248563A0" targetRef="sid-7FACD1B9-52BB-449D-8C80-FE6B8E5EC32F"/>
       <sequenceFlow id="sid-A4CB314B-EACC-469C-8BB1-72847D09CAA2" name="" sourceRef="sid-7FACD1B9-52BB-449D-8C80-FE6B8E5EC32F" targetRef="sid-6003A427-D3BF-4C32-94BB-632A32B88292"/>
       <sequenceFlow id="sid-78883F0C-9F72-4FF4-911F-4DEF6DB7DCCE" name="" sourceRef="sid-6003A427-D3BF-4C32-94BB-632A32B88292" targetRef="sid-1D56B974-438E-4161-A7FA-4EA48B61A502"/>
       <sequenceFlow id="sid-7C9B4D2D-EE1E-439B-B4BC-4F81C0821613" name="" sourceRef="sid-1D56B974-438E-4161-A7FA-4EA48B61A502" targetRef="sid-B9B606AD-6157-4026-BDB3-DE2F94F57FA9"/>
       <sequenceFlow id="sid-E6C4373B-C0D5-488D-B1F0-3CAB66E90A33" name="no" sourceRef="sid-B9B606AD-6157-4026-BDB3-DE2F94F57FA9" targetRef="sid-BE1F39E1-0A37-4EEC-B191-6ABDA8D052CF"/>
       <sequenceFlow id="sid-6FD98B3E-6FA8-4E2A-B854-30123FF7DC4A" name="yes" sourceRef="sid-B9B606AD-6157-4026-BDB3-DE2F94F57FA9" targetRef="sid-1F67978D-E438-4947-98E2-97C3955D450D"/>
       <sequenceFlow id="sid-6D28EA93-9A49-47CF-9C4E-ECD6C9972076" name="" sourceRef="sid-67E7281C-46B3-48D9-B7D6-3D998C573BF3" targetRef="sid-BE1F39E1-0A37-4EEC-B191-6ABDA8D052CF"/>
    </process>
    <bpmndi:BPMNDiagram id="sid-e6f06cde-65e0-42ac-bcf9-d1feb431bcc1">
       <bpmndi:BPMNPlane bpmnElement="sid-03cf7e27-85ea-4e73-9667-cba6fc7b1f71" id="sid-5832bc36-6c48-4172-88be-b0fc3cf0beb0">
          <bpmndi:BPMNShape bpmnElement="sid-733B2545-7073-45DA-AB26-38BBA65EA57D" id="sid-733B2545-7073-45DA-AB26-38BBA65EA57D_gui" isHorizontal="true">
             <omgdc:Bounds height="574.2000041961669" width="862.7000073105097" x="0.0" y="45.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-03312436-a5bc-42ea-ac38-e329192405de">
                <omgdc:Bounds height="68.65714263916016" width="12.000000000000014" x="5.000004005432168" y="297.7714307785034"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-DF9365D5-27AB-4271-A011-19C743E0013E" id="sid-DF9365D5-27AB-4271-A011-19C743E0013E_gui" isHorizontal="true">
             <omgdc:Bounds height="321.1999946892263" width="832.7000073105097" x="30.0" y="45.0"/>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-E466E717-BDD7-4B9E-B60F-98D793596EAD" id="sid-E466E717-BDD7-4B9E-B60F-98D793596EAD_gui" isHorizontal="true">
             <omgdc:Bounds height="163.9000036388635" width="832.7000073105097" x="30.0" y="366.1999946892263"/>
             <bpmndi:BPMNLabel labelStyle="sid-03312436-a5bc-42ea-ac38-e329192405de">
                <omgdc:Bounds height="97.97142791748047" width="12.000000000000014" x="34.99999512881043" y="399.1642825499178"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-1014E58D-736D-415D-A830-3020FE8E6D10" id="sid-1014E58D-736D-415D-A830-3020FE8E6D10_gui" isHorizontal="true">
             <omgdc:Bounds height="89.10000586807712" width="832.7000073105097" x="30.0" y="530.0999983280898"/>
             <bpmndi:BPMNLabel labelStyle="sid-03312436-a5bc-42ea-ac38-e329192405de">
                <omgdc:Bounds height="81.77143096923828" width="12.000000000000014" x="34.99999630302198" y="533.7642857775093"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-CD3CF3EA-70F2-47BF-891E-1F2E6E5BA52C" id="sid-CD3CF3EA-70F2-47BF-891E-1F2E6E5BA52C_gui">
             <omgdc:Bounds height="30.0" width="30.0" x="45.0" y="104.0"/>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-5A7A57B9-4216-427B-8E00-FE89D2C78774" id="sid-5A7A57B9-4216-427B-8E00-FE89D2C78774_gui">
             <omgdc:Bounds height="80.0" width="100.0" x="99.0" y="79.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-03312436-a5bc-42ea-ac38-e329192405de">
                <omgdc:Bounds height="12.0" width="41.657142639160156" x="128.17142868041992" y="111.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-8CA29F0F-1CEE-4834-ACA6-093636971806" id="sid-8CA29F0F-1CEE-4834-ACA6-093636971806_gui" isMarkerVisible="true">
             <omgdc:Bounds height="40.0" width="40.0" x="310.0" y="99.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-1aea1fad-6a80-49ac-858d-f4ec1502665a">
                <omgdc:Bounds height="12.0" width="83.31428527832031" x="340.5" y="129.5"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-6003A427-D3BF-4C32-94BB-632A32B88292" id="sid-6003A427-D3BF-4C32-94BB-632A32B88292_gui">
             <omgdc:Bounds height="55.0" width="80.0" x="453.999967545272" y="91.26446080291416"/>
             <bpmndi:BPMNLabel labelStyle="sid-03312436-a5bc-42ea-ac38-e329192405de">
                <omgdc:Bounds height="24.0" width="71.7428588867188" x="458.1285381019126" y="104.76446080291416"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-6453DFF2-F838-40E3-AA07-7212D696C42E" id="sid-6453DFF2-F838-40E3-AA07-7212D696C42E_gui">
             <omgdc:Bounds height="40.0" width="40.0" x="224.9992714578432" y="99.26446080291417"/>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-357740E1-E599-48C0-B132-F490F1900060" id="sid-357740E1-E599-48C0-B132-F490F1900060_gui">
             <omgdc:Bounds height="80.0" width="100.0" x="280.0" y="204.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-03312436-a5bc-42ea-ac38-e329192405de">
                <omgdc:Bounds height="24.0" width="91.028564453125" x="284.4857177734375" y="230.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-78E02FD0-0649-435B-90ED-175B8A4A640E" id="sid-78E02FD0-0649-435B-90ED-175B8A4A640E_gui" isMarkerVisible="true">
             <omgdc:Bounds height="40.0" width="40.0" x="310.0" y="326.2999933451416"/>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-7FACD1B9-52BB-449D-8C80-FE6B8E5EC32F" id="sid-7FACD1B9-52BB-449D-8C80-FE6B8E5EC32F_gui">
             <omgdc:Bounds height="40.0" width="80.0" x="475.99997836351463" y="306.2999933451416"/>
             <bpmndi:BPMNLabel labelStyle="sid-03312436-a5bc-42ea-ac38-e329192405de">
                <omgdc:Bounds height="24.0" width="54.77142333984375" x="488.61426669359275" y="312.2999933451416"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-B9B606AD-6157-4026-BDB3-DE2F94F57FA9" id="sid-B9B606AD-6157-4026-BDB3-DE2F94F57FA9_gui" isMarkerVisible="true">
             <omgdc:Bounds height="40.0" width="40.0" x="681.9999567270293" y="98.5"/>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-1D56B974-438E-4161-A7FA-4EA48B61A502" id="sid-1D56B974-438E-4161-A7FA-4EA48B61A502_gui">
             <omgdc:Bounds height="60.48831787987223" width="80.0" x="578.9999675452719" y="89.26446080291416"/>
             <bpmndi:BPMNLabel labelStyle="sid-03312436-a5bc-42ea-ac38-e329192405de">
                <omgdc:Bounds height="24.0" width="51.68571472167969" x="593.1571101844321" y="105.50846028411533"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-1F67978D-E438-4947-98E2-97C3955D450D" id="sid-1F67978D-E438-4947-98E2-97C3955D450D_gui">
             <omgdc:Bounds height="80.0" width="80.0" x="661.9999567270293" y="188.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-03312436-a5bc-42ea-ac38-e329192405de">
                <omgdc:Bounds height="72.0" width="63.25714111328125" x="670.3713861703886" y="190.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-5FCE5BF6-284B-4E16-928D-9AA71F9BC17A" id="sid-5FCE5BF6-284B-4E16-928D-9AA71F9BC17A_gui">
             <omgdc:Bounds height="40.0" width="100.0" x="362.9999891817573" y="383.89998855888877"/>
             <bpmndi:BPMNLabel labelStyle="sid-03312436-a5bc-42ea-ac38-e329192405de">
                <omgdc:Bounds height="12.0" width="88.71429443359375" x="368.64284196496044" y="395.89998855888877"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-C62FF799-DF0B-43E9-8805-9CAB248563A0" id="sid-C62FF799-DF0B-43E9-8805-9CAB248563A0_gui">
             <omgdc:Bounds height="40.0" width="100.0" x="362.9999891817573" y="428.90000134408467"/>
             <bpmndi:BPMNLabel labelStyle="sid-03312436-a5bc-42ea-ac38-e329192405de">
                <omgdc:Bounds height="12.0" width="88.71429443359375" x="368.64284196496044" y="440.90000134408467"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-099CF5BA-BCD6-4038-A118-0F66B96FA522" id="sid-099CF5BA-BCD6-4038-A118-0F66B96FA522_gui">
             <omgdc:Bounds height="40.0" width="100.0" x="362.9999891817573" y="468.8999885588888"/>
             <bpmndi:BPMNLabel labelStyle="sid-03312436-a5bc-42ea-ac38-e329192405de">
                <omgdc:Bounds height="12.0" width="88.71429443359375" x="368.64284196496044" y="480.8999885588888"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-BE1F39E1-0A37-4EEC-B191-6ABDA8D052CF" id="sid-BE1F39E1-0A37-4EEC-B191-6ABDA8D052CF_gui">
             <omgdc:Bounds height="40.0" width="80.0" x="766.9999567270293" y="411.1999946892263"/>
             <bpmndi:BPMNLabel labelStyle="sid-03312436-a5bc-42ea-ac38-e329192405de">
                <omgdc:Bounds height="12.0" width="38.57142639160156" x="787.7142435312285" y="423.1999946892263"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-67E7281C-46B3-48D9-B7D6-3D998C573BF3" id="sid-67E7281C-46B3-48D9-B7D6-3D998C573BF3_gui">
             <omgdc:Bounds height="40.0" width="100.0" x="280.0" y="536.0999983280898"/>
             <bpmndi:BPMNLabel labelStyle="sid-03312436-a5bc-42ea-ac38-e329192405de">
                <omgdc:Bounds height="12.0" width="62.4857177734375" x="298.75714111328125" y="548.0999983280898"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge bpmnElement="sid-28F25167-CC53-4222-94FE-AF64477FA1D5" id="sid-28F25167-CC53-4222-94FE-AF64477FA1D5_gui">
             <omgdi:waypoint x="75.0" y="119.0"/>
             <omgdi:waypoint x="99.0" y="119.0"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-13F9180B-C5AE-42DE-A2F2-EA7E388EC234" id="sid-13F9180B-C5AE-42DE-A2F2-EA7E388EC234_gui">
             <omgdi:waypoint x="199.0" y="119.39609667066146"/>
             <omgdi:waypoint x="224.9992714578432" y="119.60206116794298"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-47C3004A-3FAA-4FD8-9FD9-79B5709B0F22" id="sid-47C3004A-3FAA-4FD8-9FD9-79B5709B0F22_gui">
             <omgdi:waypoint x="264.9992714578432" y="119.70379090342891"/>
             <omgdi:waypoint x="310.0" y="119.56378117638194"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-27B974D0-BDC1-4E21-90B3-98CE7F933F3D" id="sid-27B974D0-BDC1-4E21-90B3-98CE7F933F3D_gui">
             <omgdi:waypoint x="245.4992714578432" y="139.2644608029142"/>
             <omgdi:waypoint x="245.49927145784318" y="556.0999983280898"/>
             <omgdi:waypoint x="280.0" y="556.0999983280898"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-87B2BCA3-89C5-4723-AA97-1E625C724B9C" id="sid-87B2BCA3-89C5-4723-AA97-1E625C724B9C_gui">
             <omgdi:waypoint x="350.0" y="118.97127570198808"/>
             <omgdi:waypoint x="453.999967545272" y="118.82190939893802"/>
             <bpmndi:BPMNLabel labelStyle="sid-1aea1fad-6a80-49ac-858d-f4ec1502665a">
                <omgdc:Bounds height="12.0" width="18.5142822265625" x="307.8538513183594" y="159.9149932861328"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-DCF8F812-B395-4E17-9BB8-44A3674E420C" id="sid-DCF8F812-B395-4E17-9BB8-44A3674E420C_gui">
             <omgdi:waypoint x="330.0" y="139.0"/>
             <omgdi:waypoint x="330.0" y="204.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-1aea1fad-6a80-49ac-858d-f4ec1502665a">
                <omgdc:Bounds height="12.0" width="13.885711669921875" x="371.05714416503906" y="100.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-91569830-E628-4CA3-8273-D13112F50A58" id="sid-91569830-E628-4CA3-8273-D13112F50A58_gui">
             <omgdi:waypoint x="330.19455254177745" y="284.0"/>
             <omgdi:waypoint x="330.40029182233906" y="326.2999933451416"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-6A0C6D70-2ABA-497C-97D9-774835658919" id="sid-6A0C6D70-2ABA-497C-97D9-774835658919_gui">
             <omgdi:waypoint x="330.5" y="366.2999933451416"/>
             <omgdi:waypoint x="330.5" y="403.89998855888877"/>
             <omgdi:waypoint x="362.9999891817573" y="403.89998855888877"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-FFC9C675-3610-471A-B505-DE1B0B656388" id="sid-FFC9C675-3610-471A-B505-DE1B0B656388_gui">
             <omgdi:waypoint x="330.5" y="366.2999933451416"/>
             <omgdi:waypoint x="330.5" y="448.90000134408467"/>
             <omgdi:waypoint x="362.9999891817573" y="448.90000134408467"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-48FC72FC-57F9-45AB-96D4-588C1469D823" id="sid-48FC72FC-57F9-45AB-96D4-588C1469D823_gui">
             <omgdi:waypoint x="330.5" y="366.2999933451416"/>
             <omgdi:waypoint x="330.5" y="488.8999885588888"/>
             <omgdi:waypoint x="362.9999891817573" y="488.8999885588888"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-04966143-5376-4E00-843A-CB0AA0C1D13A" id="sid-04966143-5376-4E00-843A-CB0AA0C1D13A_gui">
             <omgdi:waypoint x="462.9999891817573" y="403.89998855888877"/>
             <omgdi:waypoint x="515.9999783635146" y="403.89998855888877"/>
             <omgdi:waypoint x="515.9999783635146" y="346.2999933451416"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-7F5301C6-B53C-4028-A2AF-321A0F8F9FA6" id="sid-7F5301C6-B53C-4028-A2AF-321A0F8F9FA6_gui">
             <omgdi:waypoint x="462.9999891817573" y="488.8999885588888"/>
             <omgdi:waypoint x="515.9999783635146" y="488.8999885588888"/>
             <omgdi:waypoint x="515.9999783635146" y="346.2999933451416"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-7133B096-3CA5-4D45-AC50-07F43D12C30A" id="sid-7133B096-3CA5-4D45-AC50-07F43D12C30A_gui">
             <omgdi:waypoint x="462.9999891817573" y="448.90000134408467"/>
             <omgdi:waypoint x="515.9999783635146" y="448.90000134408467"/>
             <omgdi:waypoint x="515.9999783635146" y="346.2999933451416"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-A4CB314B-EACC-469C-8BB1-72847D09CAA2" id="sid-A4CB314B-EACC-469C-8BB1-72847D09CAA2_gui">
             <omgdi:waypoint x="515.9999783635146" y="306.2999933451416"/>
             <omgdi:waypoint x="515.9999783635146" y="226.2822270740279"/>
             <omgdi:waypoint x="493.99996754527206" y="226.2822270740279"/>
             <omgdi:waypoint x="493.999967545272" y="146.26446080291416"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-78883F0C-9F72-4FF4-911F-4DEF6DB7DCCE" id="sid-78883F0C-9F72-4FF4-911F-4DEF6DB7DCCE_gui">
             <omgdi:waypoint x="533.999967545272" y="119.11058124009375"/>
             <omgdi:waypoint x="578.9999675452719" y="119.49996673192078"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-7C9B4D2D-EE1E-439B-B4BC-4F81C0821613" id="sid-7C9B4D2D-EE1E-439B-B4BC-4F81C0821613_gui">
             <omgdi:waypoint x="658.9999675452719" y="119.49719008292894"/>
             <omgdi:waypoint x="681.9999567270293" y="119.23430802838723"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-E6C4373B-C0D5-488D-B1F0-3CAB66E90A33" id="sid-E6C4373B-C0D5-488D-B1F0-3CAB66E90A33_gui">
             <omgdi:waypoint x="721.9999567270293" y="119.0"/>
             <omgdi:waypoint x="806.9999567270293" y="119.0"/>
             <omgdi:waypoint x="806.9999567270293" y="411.1999946892263"/>
             <bpmndi:BPMNLabel labelStyle="sid-1aea1fad-6a80-49ac-858d-f4ec1502665a">
                <omgdc:Bounds height="12.0" width="13.8857421875" x="730.0" y="99.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-6FD98B3E-6FA8-4E2A-B854-30123FF7DC4A" id="sid-6FD98B3E-6FA8-4E2A-B854-30123FF7DC4A_gui">
             <omgdi:waypoint x="702.4105071857449" y="138.5"/>
             <omgdi:waypoint x="702.1834429655614" y="188.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-1aea1fad-6a80-49ac-858d-f4ec1502665a">
                <omgdc:Bounds height="18.56913159986263" width="12.084799000634007" x="682.2891951696461" y="111.99313674669608"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-6D28EA93-9A49-47CF-9C4E-ECD6C9972076" id="sid-6D28EA93-9A49-47CF-9C4E-ECD6C9972076_gui">
             <omgdi:waypoint x="380.0" y="556.0999983280898"/>
             <omgdi:waypoint x="806.9999567270293" y="556.0999983280898"/>
             <omgdi:waypoint x="806.9999567270293" y="451.1999946892263"/>
          </bpmndi:BPMNEdge>
       </bpmndi:BPMNPlane>
       <bpmndi:BPMNLabelStyle id="sid-1aea1fad-6a80-49ac-858d-f4ec1502665a">
          <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="11.0"/>
       </bpmndi:BPMNLabelStyle>
       <bpmndi:BPMNLabelStyle id="sid-03312436-a5bc-42ea-ac38-e329192405de">
          <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="12.0"/>
       </bpmndi:BPMNLabelStyle>
    </bpmndi:BPMNDiagram>
 </definitions>`,
    recourse: `<?xml version="1.0" encoding="UTF-8"?><definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:signavio="http://www.signavio.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" exporter="Signavio Process Editor, http://www.signavio.com" exporterVersion="9.3.2" expressionLanguage="http://www.w3.org/TR/XPath" id="sid-e6746753-d023-4593-a965-088d79d6e0b5" targetNamespace="http://www.signavio.com" typeLanguage="http://www.w3.org/2001/XMLSchema" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">
    <collaboration id="sid-3d0cb58a-f342-4a97-af66-171cd4f3d48d">
       <extensionElements>
          <signavio:signavioDiagramMetaData metaKey="revisionid" metaValue="868f810bff9c47a28fe1d49bdc995893"/>
       </extensionElements>
       <participant id="sid-18423844-0562-4C45-BA23-99A4310F62C0" name="Recourse" processRef="sid-401A0D71-A9C0-4823-96F3-DE849DE64CD7">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
          </extensionElements>
       </participant>
    </collaboration>
    <process id="sid-401A0D71-A9C0-4823-96F3-DE849DE64CD7" isClosed="false" isExecutable="false" name="Recourse" processType="None">
       <extensionElements/>
       <laneSet id="sid-6c42ee1c-3e32-4192-af95-e6bc73ceb2fc">
          <lane id="sid-31A11E07-BDD8-4394-BD90-6505DEE3B0C2">
             <extensionElements>
                <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
             </extensionElements>
             <flowNodeRef>sid-15EED255-2A55-42ED-ACC9-EC0F91AD1490</flowNodeRef>
             <flowNodeRef>sid-1F817731-2B76-4F10-8EE0-7A6D8A675F43</flowNodeRef>
             <flowNodeRef>sid-03F03724-A690-4992-A850-45048D01138A</flowNodeRef>
             <flowNodeRef>sid-02E8E80D-2A59-41AF-8257-7E1B2F5B72DE</flowNodeRef>
             <flowNodeRef>sid-5C4AEFF7-80D3-4C60-91CA-1E7C4E386B73</flowNodeRef>
             <flowNodeRef>sid-644EA7CD-0940-4A4C-9285-15FB65EC4585</flowNodeRef>
             <flowNodeRef>sid-B4B7E4AE-9152-4154-A19E-F9010AC27D0D</flowNodeRef>
             <flowNodeRef>sid-1972FA37-DACD-4189-AD97-13B9042F6522</flowNodeRef>
             <flowNodeRef>sid-0E7AFEA3-4F35-49D8-AF4B-7319B594CCB9</flowNodeRef>
             <flowNodeRef>sid-610D3B8F-F723-4F50-AE48-9FD868F44910</flowNodeRef>
             <flowNodeRef>sid-25C4AB20-F622-404B-8E3C-46E33F091EC2</flowNodeRef>
             <flowNodeRef>sid-F23582BD-B993-4649-B3A2-48B8B6716004</flowNodeRef>
             <flowNodeRef>sid-9B143944-6BF1-483E-A70D-E1C89F297A35</flowNodeRef>
             <flowNodeRef>sid-CA400604-6343-4D36-BCA4-0EC4559B323C</flowNodeRef>
             <flowNodeRef>sid-F856E621-21EB-4470-9B8A-9454F4400C9D</flowNodeRef>
             <flowNodeRef>sid-09BD6507-3FE1-4B7D-AEE9-CE2BCCF5487C</flowNodeRef>
             <flowNodeRef>sid-E9B5ED58-6DB2-45E7-9525-0A5AB832772C</flowNodeRef>
             <flowNodeRef>sid-80831654-2B94-4B33-B21B-3FD16FAAA807</flowNodeRef>
             <flowNodeRef>sid-9A1607F6-F352-4EAA-ADB1-0F127DFA63BC</flowNodeRef>
             <flowNodeRef>sid-5AB77972-136B-4DA9-B267-FBC5CE89878C</flowNodeRef>
             <flowNodeRef>sid-0D8661DD-19F2-424C-B576-ED3D8EB40ECD</flowNodeRef>
             <flowNodeRef>sid-1F590963-5F24-4355-9EEE-6B0674206FF4</flowNodeRef>
             <flowNodeRef>sid-0DBB0026-0282-416C-BA18-405E16A761F1</flowNodeRef>
             <flowNodeRef>sid-285F25B4-2210-418B-A267-C44C869FF48A</flowNodeRef>
             <flowNodeRef>sid-6943BFC6-67C8-4326-9D9D-19875E0E7B2B</flowNodeRef>
             <flowNodeRef>sid-A0606A8E-BC7C-4AA8-A61D-A264D8143F60</flowNodeRef>
             <flowNodeRef>sid-D9F6E540-B8CD-4694-BD7E-90A4079093C6</flowNodeRef>
          </lane>
       </laneSet>
       <startEvent id="sid-15EED255-2A55-42ED-ACC9-EC0F91AD1490" name="Subrogation request received">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
             <signavio:signavioLabel ref="text_name" valign="middle" x="13.0" y="66.0"/>
          </extensionElements>
          <outgoing>sid-B41D6291-2D93-4828-BC35-47697AFBF77F</outgoing>
       </startEvent>
       <task completionQuantity="1" id="sid-1F817731-2B76-4F10-8EE0-7A6D8A675F43" isForCompensation="false" name="Check if subrogation is needed" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
          </extensionElements>
          <incoming>sid-B41D6291-2D93-4828-BC35-47697AFBF77F</incoming>
          <outgoing>sid-E340A616-377D-4EC9-AED4-2D9B2D7FBFB3</outgoing>
       </task>
       <exclusiveGateway gatewayDirection="Diverging" id="sid-03F03724-A690-4992-A850-45048D01138A" name="Subrogation needed? ">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
             <signavio:signavioLabel align="center" bottom="false" left="false" ref="text_name" right="false" top="true" valign="bottom" x="20.0" y="-9.0"/>
          </extensionElements>
          <incoming>sid-E340A616-377D-4EC9-AED4-2D9B2D7FBFB3</incoming>
          <outgoing>sid-6A7676D5-88B8-4449-8D3F-B3C096113E3E</outgoing>
          <outgoing>sid-8116839A-74E1-4BDC-80D0-2276BC18BFEE</outgoing>
       </exclusiveGateway>
       <intermediateThrowEvent id="sid-02E8E80D-2A59-41AF-8257-7E1B2F5B72DE" name="Send request for payment">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
             <signavio:signavioLabel ref="text_name" valign="middle" x="-28.0" y="-18.0"/>
          </extensionElements>
          <incoming>sid-323537C0-CC0B-47CB-8801-89640F9D4601</incoming>
          <outgoing>sid-1C327290-AF36-4E45-9DA9-EF27171B2007</outgoing>
          <messageEventDefinition id="sid-e0cd62b3-554b-4655-bbdf-fba0d826abfd"/>
       </intermediateThrowEvent>
       <task completionQuantity="1" id="sid-5C4AEFF7-80D3-4C60-91CA-1E7C4E386B73" isForCompensation="false" name="Close the case" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
          </extensionElements>
          <incoming>sid-6A7676D5-88B8-4449-8D3F-B3C096113E3E</incoming>
          <outgoing>sid-F60A8F54-9507-4170-A814-4AD30DD7CD77</outgoing>
       </task>
       <endEvent id="sid-644EA7CD-0940-4A4C-9285-15FB65EC4585" name="Case Closed">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
          </extensionElements>
          <incoming>sid-F60A8F54-9507-4170-A814-4AD30DD7CD77</incoming>
       </endEvent>
       <task completionQuantity="1" id="sid-B4B7E4AE-9152-4154-A19E-F9010AC27D0D" isForCompensation="false" name="Make a booking" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
          </extensionElements>
          <incoming>sid-B7A5FBCB-C449-4F9E-A237-E1D4D859160C</incoming>
          <outgoing>sid-F55CE346-79F4-4348-B823-A463D05C9C42</outgoing>
       </task>
       <endEvent id="sid-1972FA37-DACD-4189-AD97-13B9042F6522" name="Case Closed">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
          </extensionElements>
          <incoming>sid-F55CE346-79F4-4348-B823-A463D05C9C42</incoming>
       </endEvent>
       <exclusiveGateway gatewayDirection="Diverging" id="sid-0E7AFEA3-4F35-49D8-AF4B-7319B594CCB9" name="Is Reasoning satisfactory?">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
             <signavio:signavioLabel align="center" ref="text_name" valign="middle" x="122.0" y="-17.0"/>
          </extensionElements>
          <incoming>sid-F45CE905-F0A3-4460-9894-3E64F22DB21B</incoming>
          <outgoing>sid-EF01D9F5-276F-48B4-B8BB-3CCFBAB1E95B</outgoing>
          <outgoing>sid-185A64EA-E57B-4E09-B152-FB18FD2B674D</outgoing>
       </exclusiveGateway>
       <endEvent id="sid-610D3B8F-F723-4F50-AE48-9FD868F44910" name="Case Closed">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
          </extensionElements>
          <incoming>sid-40443FE9-DB2F-4F9B-A407-9DE7733EB595</incoming>
       </endEvent>
       <intermediateThrowEvent id="sid-25C4AB20-F622-404B-8E3C-46E33F091EC2" name="Send Request to Collection Agency">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
             <signavio:signavioLabel ref="text_name" valign="middle" x="-78.0" y="63.0"/>
          </extensionElements>
          <incoming>sid-185A64EA-E57B-4E09-B152-FB18FD2B674D</incoming>
          <incoming>sid-232A6D08-9D04-4C91-9C5F-FBAE191932DD</incoming>
          <incoming>sid-A78BE937-E0C7-409B-8DDE-2CECF7EBF56B</incoming>
          <outgoing>sid-38FA6C99-0227-4AEB-8984-2D6160DDF8AF</outgoing>
          <messageEventDefinition id="sid-b8309ca2-59b1-48b6-b021-debb5f3fdd5d"/>
       </intermediateThrowEvent>
       <intermediateCatchEvent id="sid-F23582BD-B993-4649-B3A2-48B8B6716004" name="Disagreement deadline reached?">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
             <signavio:signavioLabel ref="text_name" valign="middle" x="-38.0" y="56.0"/>
          </extensionElements>
          <incoming>sid-DB6381EA-01CB-404D-AF9F-BA38A0BC0D25</incoming>
          <outgoing>sid-541C9EA8-7BB5-4AE1-A5BE-CDE89EF10384</outgoing>
          <timerEventDefinition id="sid-6b9755e5-a5a1-4268-be2f-b6efbd9f253d"/>
       </intermediateCatchEvent>
       <intermediateCatchEvent id="sid-9B143944-6BF1-483E-A70D-E1C89F297A35" name="Money received">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
          </extensionElements>
          <incoming>sid-5F57EE38-7AC3-4558-885F-9E76026369F8</incoming>
          <outgoing>sid-9AB70993-7D5B-464D-A931-D451E1CDD0E6</outgoing>
          <messageEventDefinition id="sid-854a0643-586a-498e-a27b-3da9e79c564b"/>
       </intermediateCatchEvent>
       <endEvent id="sid-CA400604-6343-4D36-BCA4-0EC4559B323C" name="Case Closed">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
          </extensionElements>
          <incoming>sid-C66A36B9-0A14-4792-A1A7-7CFE88BCFC15</incoming>
       </endEvent>
       <eventBasedGateway eventGatewayType="Exclusive" gatewayDirection="Diverging" id="sid-F856E621-21EB-4470-9B8A-9454F4400C9D" instantiate="false" name="Insurant responded">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
             <signavio:signavioLabel align="center" ref="text_name" valign="middle" x="32.0" y="-18.0"/>
          </extensionElements>
          <incoming>sid-38FA6C99-0227-4AEB-8984-2D6160DDF8AF</incoming>
          <outgoing>sid-5F57EE38-7AC3-4558-885F-9E76026369F8</outgoing>
          <outgoing>sid-E6D8D26B-6FCD-4CEC-A545-6B88DBA05734</outgoing>
       </eventBasedGateway>
       <task completionQuantity="1" id="sid-09BD6507-3FE1-4B7D-AEE9-CE2BCCF5487C" isForCompensation="false" name="Setup a reminder" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
          </extensionElements>
          <incoming>sid-E6D8D26B-6FCD-4CEC-A545-6B88DBA05734</incoming>
          <outgoing>sid-DB6381EA-01CB-404D-AF9F-BA38A0BC0D25</outgoing>
       </task>
       <task completionQuantity="1" id="sid-E9B5ED58-6DB2-45E7-9525-0A5AB832772C" isForCompensation="false" name="Check If payment is received" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
          </extensionElements>
          <incoming>sid-541C9EA8-7BB5-4AE1-A5BE-CDE89EF10384</incoming>
          <outgoing>sid-A394622C-C72D-4FD5-B021-95D9ED24C774</outgoing>
       </task>
       <exclusiveGateway gatewayDirection="Diverging" id="sid-80831654-2B94-4B33-B21B-3FD16FAAA807" name="Money received?">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
             <signavio:signavioLabel align="center" bottom="false" left="false" ref="text_name" right="false" top="true" valign="bottom" x="20.0" y="-9.0"/>
          </extensionElements>
          <incoming>sid-A394622C-C72D-4FD5-B021-95D9ED24C774</incoming>
          <outgoing>sid-232A6D08-9D04-4C91-9C5F-FBAE191932DD</outgoing>
          <outgoing>sid-909FF6B4-C874-459A-A621-8068D4C72BA8</outgoing>
       </exclusiveGateway>
       <eventBasedGateway eventGatewayType="Exclusive" gatewayDirection="Diverging" id="sid-9A1607F6-F352-4EAA-ADB1-0F127DFA63BC" instantiate="false" name="Insurant responded">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
             <signavio:signavioLabel align="center" ref="text_name" valign="middle" x="52.0" y="-29.0"/>
          </extensionElements>
          <incoming>sid-1C327290-AF36-4E45-9DA9-EF27171B2007</incoming>
          <outgoing>sid-E8A4EA59-21DC-43A4-A016-B6F50F1AB452</outgoing>
          <outgoing>sid-5C551384-6F28-4428-A05C-ADD7EFCF2964</outgoing>
          <outgoing>sid-413C6C48-0E52-4182-95A0-1706253DBEED</outgoing>
       </eventBasedGateway>
       <task completionQuantity="1" id="sid-5AB77972-136B-4DA9-B267-FBC5CE89878C" isForCompensation="false" name="Setup Reminder" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
          </extensionElements>
          <incoming>sid-8116839A-74E1-4BDC-80D0-2276BC18BFEE</incoming>
          <outgoing>sid-323537C0-CC0B-47CB-8801-89640F9D4601</outgoing>
       </task>
       <intermediateCatchEvent id="sid-0D8661DD-19F2-424C-B576-ED3D8EB40ECD" name="Received Payment">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
          </extensionElements>
          <incoming>sid-E8A4EA59-21DC-43A4-A016-B6F50F1AB452</incoming>
          <outgoing>sid-B7A5FBCB-C449-4F9E-A237-E1D4D859160C</outgoing>
          <messageEventDefinition id="sid-0fbbe896-36f5-469b-b396-8db3743f3355"/>
       </intermediateCatchEvent>
       <intermediateCatchEvent id="sid-1F590963-5F24-4355-9EEE-6B0674206FF4" name="Response received without Payament">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
             <signavio:signavioLabel ref="text_name" valign="middle" x="22.0" y="-25.0"/>
          </extensionElements>
          <incoming>sid-5C551384-6F28-4428-A05C-ADD7EFCF2964</incoming>
          <outgoing>sid-F45CE905-F0A3-4460-9894-3E64F22DB21B</outgoing>
          <messageEventDefinition id="sid-0ab58121-3df9-4262-a19b-bf557bd5c8e5"/>
       </intermediateCatchEvent>
       <intermediateCatchEvent id="sid-0DBB0026-0282-416C-BA18-405E16A761F1" name="Reminder time reached">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
             <signavio:signavioLabel ref="text_name" valign="middle" x="94.0" y="-20.0"/>
          </extensionElements>
          <incoming>sid-413C6C48-0E52-4182-95A0-1706253DBEED</incoming>
          <outgoing>sid-A78BE937-E0C7-409B-8DDE-2CECF7EBF56B</outgoing>
          <timerEventDefinition id="sid-b3fb62bb-ee42-454f-a801-e4740239e73c"/>
       </intermediateCatchEvent>
       <task completionQuantity="1" id="sid-285F25B4-2210-418B-A267-C44C869FF48A" isForCompensation="false" name="Close case" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
          </extensionElements>
          <incoming>sid-EF01D9F5-276F-48B4-B8BB-3CCFBAB1E95B</incoming>
          <outgoing>sid-40443FE9-DB2F-4F9B-A407-9DE7733EB595</outgoing>
       </task>
       <task completionQuantity="1" id="sid-6943BFC6-67C8-4326-9D9D-19875E0E7B2B" isForCompensation="false" name="Make a booking" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue="[]"/>
          </extensionElements>
          <incoming>sid-9AB70993-7D5B-464D-A931-D451E1CDD0E6</incoming>
          <outgoing>sid-C66A36B9-0A14-4792-A1A7-7CFE88BCFC15</outgoing>
       </task>
       <endEvent id="sid-A0606A8E-BC7C-4AA8-A61D-A264D8143F60" name="Case Closed">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
             <signavio:signavioLabel ref="text_name" valign="middle" x="16.0" y="52.0"/>
          </extensionElements>
          <incoming>sid-A57C555F-C8E6-4402-B7E6-B57804419A94</incoming>
       </endEvent>
       <task completionQuantity="1" id="sid-D9F6E540-B8CD-4694-BD7E-90A4079093C6" isForCompensation="false" name="Make a booking" startQuantity="1">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
             <signavio:signavioMetaData metaKey="userstory" metaValue="[]"/>
          </extensionElements>
          <incoming>sid-909FF6B4-C874-459A-A621-8068D4C72BA8</incoming>
          <outgoing>sid-A57C555F-C8E6-4402-B7E6-B57804419A94</outgoing>
       </task>
       <sequenceFlow id="sid-B41D6291-2D93-4828-BC35-47697AFBF77F" name="" sourceRef="sid-15EED255-2A55-42ED-ACC9-EC0F91AD1490" targetRef="sid-1F817731-2B76-4F10-8EE0-7A6D8A675F43"/>
       <sequenceFlow id="sid-E340A616-377D-4EC9-AED4-2D9B2D7FBFB3" name="" sourceRef="sid-1F817731-2B76-4F10-8EE0-7A6D8A675F43" targetRef="sid-03F03724-A690-4992-A850-45048D01138A"/>
       <sequenceFlow id="sid-F60A8F54-9507-4170-A814-4AD30DD7CD77" name="" sourceRef="sid-5C4AEFF7-80D3-4C60-91CA-1E7C4E386B73" targetRef="sid-644EA7CD-0940-4A4C-9285-15FB65EC4585"/>
       <sequenceFlow id="sid-F55CE346-79F4-4348-B823-A463D05C9C42" name="" sourceRef="sid-B4B7E4AE-9152-4154-A19E-F9010AC27D0D" targetRef="sid-1972FA37-DACD-4189-AD97-13B9042F6522"/>
       <sequenceFlow id="sid-E8A4EA59-21DC-43A4-A016-B6F50F1AB452" name="Yes" sourceRef="sid-9A1607F6-F352-4EAA-ADB1-0F127DFA63BC" targetRef="sid-0D8661DD-19F2-424C-B576-ED3D8EB40ECD">
          <extensionElements>
             <signavio:signavioLabel align="right" distance="7.0" from="0" orientation="lr" ref="text_name" to="1" valign="bottom" x="749.0928252481008" y="305.4113045097854"/>
          </extensionElements>
       </sequenceFlow>
       <sequenceFlow id="sid-EF01D9F5-276F-48B4-B8BB-3CCFBAB1E95B" name="Yes" sourceRef="sid-0E7AFEA3-4F35-49D8-AF4B-7319B594CCB9" targetRef="sid-285F25B4-2210-418B-A267-C44C869FF48A"/>
       <sequenceFlow id="sid-185A64EA-E57B-4E09-B152-FB18FD2B674D" name="No" sourceRef="sid-0E7AFEA3-4F35-49D8-AF4B-7319B594CCB9" targetRef="sid-25C4AB20-F622-404B-8E3C-46E33F091EC2"/>
       <sequenceFlow id="sid-6A7676D5-88B8-4449-8D3F-B3C096113E3E" name="No" sourceRef="sid-03F03724-A690-4992-A850-45048D01138A" targetRef="sid-5C4AEFF7-80D3-4C60-91CA-1E7C4E386B73"/>
       <sequenceFlow id="sid-38FA6C99-0227-4AEB-8984-2D6160DDF8AF" name="" sourceRef="sid-25C4AB20-F622-404B-8E3C-46E33F091EC2" targetRef="sid-F856E621-21EB-4470-9B8A-9454F4400C9D"/>
       <sequenceFlow id="sid-5F57EE38-7AC3-4558-885F-9E76026369F8" name="" sourceRef="sid-F856E621-21EB-4470-9B8A-9454F4400C9D" targetRef="sid-9B143944-6BF1-483E-A70D-E1C89F297A35"/>
       <sequenceFlow id="sid-9AB70993-7D5B-464D-A931-D451E1CDD0E6" name="" sourceRef="sid-9B143944-6BF1-483E-A70D-E1C89F297A35" targetRef="sid-6943BFC6-67C8-4326-9D9D-19875E0E7B2B"/>
       <sequenceFlow id="sid-E6D8D26B-6FCD-4CEC-A545-6B88DBA05734" name="" sourceRef="sid-F856E621-21EB-4470-9B8A-9454F4400C9D" targetRef="sid-09BD6507-3FE1-4B7D-AEE9-CE2BCCF5487C"/>
       <sequenceFlow id="sid-DB6381EA-01CB-404D-AF9F-BA38A0BC0D25" name="" sourceRef="sid-09BD6507-3FE1-4B7D-AEE9-CE2BCCF5487C" targetRef="sid-F23582BD-B993-4649-B3A2-48B8B6716004"/>
       <sequenceFlow id="sid-541C9EA8-7BB5-4AE1-A5BE-CDE89EF10384" name="" sourceRef="sid-F23582BD-B993-4649-B3A2-48B8B6716004" targetRef="sid-E9B5ED58-6DB2-45E7-9525-0A5AB832772C"/>
       <sequenceFlow id="sid-A394622C-C72D-4FD5-B021-95D9ED24C774" name="" sourceRef="sid-E9B5ED58-6DB2-45E7-9525-0A5AB832772C" targetRef="sid-80831654-2B94-4B33-B21B-3FD16FAAA807"/>
       <sequenceFlow id="sid-232A6D08-9D04-4C91-9C5F-FBAE191932DD" name="No" sourceRef="sid-80831654-2B94-4B33-B21B-3FD16FAAA807" targetRef="sid-25C4AB20-F622-404B-8E3C-46E33F091EC2">
          <extensionElements>
             <signavio:signavioLabel align="right" distance="-8.5" from="0" orientation="ur" ref="text_name" to="1" valign="top" x="1320.5" y="637.5"/>
          </extensionElements>
       </sequenceFlow>
       <sequenceFlow id="sid-909FF6B4-C874-459A-A621-8068D4C72BA8" name="Yes" sourceRef="sid-80831654-2B94-4B33-B21B-3FD16FAAA807" targetRef="sid-D9F6E540-B8CD-4694-BD7E-90A4079093C6"/>
       <sequenceFlow id="sid-1C327290-AF36-4E45-9DA9-EF27171B2007" name="" sourceRef="sid-02E8E80D-2A59-41AF-8257-7E1B2F5B72DE" targetRef="sid-9A1607F6-F352-4EAA-ADB1-0F127DFA63BC"/>
       <sequenceFlow id="sid-323537C0-CC0B-47CB-8801-89640F9D4601" name="" sourceRef="sid-5AB77972-136B-4DA9-B267-FBC5CE89878C" targetRef="sid-02E8E80D-2A59-41AF-8257-7E1B2F5B72DE"/>
       <sequenceFlow id="sid-8116839A-74E1-4BDC-80D0-2276BC18BFEE" name="Yes" sourceRef="sid-03F03724-A690-4992-A850-45048D01138A" targetRef="sid-5AB77972-136B-4DA9-B267-FBC5CE89878C"/>
       <sequenceFlow id="sid-B7A5FBCB-C449-4F9E-A237-E1D4D859160C" name="" sourceRef="sid-0D8661DD-19F2-424C-B576-ED3D8EB40ECD" targetRef="sid-B4B7E4AE-9152-4154-A19E-F9010AC27D0D"/>
       <sequenceFlow id="sid-5C551384-6F28-4428-A05C-ADD7EFCF2964" name="" sourceRef="sid-9A1607F6-F352-4EAA-ADB1-0F127DFA63BC" targetRef="sid-1F590963-5F24-4355-9EEE-6B0674206FF4"/>
       <sequenceFlow id="sid-F45CE905-F0A3-4460-9894-3E64F22DB21B" name="" sourceRef="sid-1F590963-5F24-4355-9EEE-6B0674206FF4" targetRef="sid-0E7AFEA3-4F35-49D8-AF4B-7319B594CCB9"/>
       <sequenceFlow id="sid-413C6C48-0E52-4182-95A0-1706253DBEED" name="" sourceRef="sid-9A1607F6-F352-4EAA-ADB1-0F127DFA63BC" targetRef="sid-0DBB0026-0282-416C-BA18-405E16A761F1"/>
       <sequenceFlow id="sid-A78BE937-E0C7-409B-8DDE-2CECF7EBF56B" name="" sourceRef="sid-0DBB0026-0282-416C-BA18-405E16A761F1" targetRef="sid-25C4AB20-F622-404B-8E3C-46E33F091EC2"/>
       <sequenceFlow id="sid-40443FE9-DB2F-4F9B-A407-9DE7733EB595" name="" sourceRef="sid-285F25B4-2210-418B-A267-C44C869FF48A" targetRef="sid-610D3B8F-F723-4F50-AE48-9FD868F44910"/>
       <sequenceFlow id="sid-C66A36B9-0A14-4792-A1A7-7CFE88BCFC15" name="" sourceRef="sid-6943BFC6-67C8-4326-9D9D-19875E0E7B2B" targetRef="sid-CA400604-6343-4D36-BCA4-0EC4559B323C"/>
       <sequenceFlow id="sid-A57C555F-C8E6-4402-B7E6-B57804419A94" name="" sourceRef="sid-D9F6E540-B8CD-4694-BD7E-90A4079093C6" targetRef="sid-A0606A8E-BC7C-4AA8-A61D-A264D8143F60"/>
    </process>
    <bpmndi:BPMNDiagram id="sid-b1328ee6-82b2-489f-8ffa-365ce3279792">
       <bpmndi:BPMNPlane bpmnElement="sid-3d0cb58a-f342-4a97-af66-171cd4f3d48d" id="sid-9c8fada0-f44d-4a49-9e23-a29cf98e61fa">
          <bpmndi:BPMNShape bpmnElement="sid-18423844-0562-4C45-BA23-99A4310F62C0" id="sid-18423844-0562-4C45-BA23-99A4310F62C0_gui" isHorizontal="true">
             <omgdc:Bounds height="655.0" width="1512.0" x="60.0" y="120.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-6d4298f3-0ef3-435c-883c-994f9b5dfb63">
                <omgdc:Bounds height="50.14285659790039" width="12.000000000000014" x="65.0" y="422.4285717010498"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-31A11E07-BDD8-4394-BD90-6505DEE3B0C2" id="sid-31A11E07-BDD8-4394-BD90-6505DEE3B0C2_gui" isHorizontal="true">
             <omgdc:Bounds height="655.0" width="1482.0" x="90.0" y="120.0"/>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-15EED255-2A55-42ED-ACC9-EC0F91AD1490" id="sid-15EED255-2A55-42ED-ACC9-EC0F91AD1490_gui">
             <omgdc:Bounds height="30.0" width="30.0" x="165.0" y="290.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="11.0" width="147.08570861816406" x="104.45714569091797" y="349.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-1F817731-2B76-4F10-8EE0-7A6D8A675F43" id="sid-1F817731-2B76-4F10-8EE0-7A6D8A675F43_gui">
             <omgdc:Bounds height="80.0" width="100.0" x="240.0" y="265.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-6d4298f3-0ef3-435c-883c-994f9b5dfb63">
                <omgdc:Bounds height="36.0" width="77.9142837524414" x="251.0428581237793" y="285.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-03F03724-A690-4992-A850-45048D01138A" id="sid-03F03724-A690-4992-A850-45048D01138A_gui" isMarkerVisible="true">
             <omgdc:Bounds height="40.0" width="40.0" x="385.0" y="285.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="12.0" width="116.4857177734375" x="346.75714111328125" y="264.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-02E8E80D-2A59-41AF-8257-7E1B2F5B72DE" id="sid-02E8E80D-2A59-41AF-8257-7E1B2F5B72DE_gui">
             <omgdc:Bounds height="30.0" width="30.0" x="600.0" y="290.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="11.0" width="131.528564453125" x="506.2357177734375" y="265.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-5C4AEFF7-80D3-4C60-91CA-1E7C4E386B73" id="sid-5C4AEFF7-80D3-4C60-91CA-1E7C4E386B73_gui">
             <omgdc:Bounds height="80.0" width="100.0" x="435.0" y="495.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-6d4298f3-0ef3-435c-883c-994f9b5dfb63">
                <omgdc:Bounds height="12.0" width="78.68571472167969" x="445.65714263916016" y="527.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-644EA7CD-0940-4A4C-9285-15FB65EC4585" id="sid-644EA7CD-0940-4A4C-9285-15FB65EC4585_gui">
             <omgdc:Bounds height="28.0" width="28.0" x="585.0" y="521.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="11.0" width="60.81428527832031" x="568.5928573608398" y="551.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-B4B7E4AE-9152-4154-A19E-F9010AC27D0D" id="sid-B4B7E4AE-9152-4154-A19E-F9010AC27D0D_gui">
             <omgdc:Bounds height="40.0" width="100.0" x="960.0" y="285.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-6d4298f3-0ef3-435c-883c-994f9b5dfb63">
                <omgdc:Bounds height="12.0" width="84.08572387695312" x="967.9571380615234" y="297.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-1972FA37-DACD-4189-AD97-13B9042F6522" id="sid-1972FA37-DACD-4189-AD97-13B9042F6522_gui">
             <omgdc:Bounds height="28.0" width="28.0" x="1215.0" y="291.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="11.0" width="60.81428527832031" x="1198.5928573608398" y="321.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-0E7AFEA3-4F35-49D8-AF4B-7319B594CCB9" id="sid-0E7AFEA3-4F35-49D8-AF4B-7319B594CCB9_gui" isMarkerVisible="true">
             <omgdc:Bounds height="40.0" width="40.0" x="865.0" y="395.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="12.0" width="143.4857177734375" x="915.2571411132812" y="370.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-610D3B8F-F723-4F50-AE48-9FD868F44910" id="sid-610D3B8F-F723-4F50-AE48-9FD868F44910_gui">
             <omgdc:Bounds height="28.0" width="28.0" x="1215.0" y="401.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="11.0" width="60.81428527832031" x="1198.5928573608398" y="431.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-25C4AB20-F622-404B-8E3C-46E33F091EC2" id="sid-25C4AB20-F622-404B-8E3C-46E33F091EC2_gui">
             <omgdc:Bounds height="30.0" width="30.0" x="870.0" y="495.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="11.0" width="174.66429138183594" x="704.667854309082" y="551.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-F23582BD-B993-4649-B3A2-48B8B6716004" id="sid-F23582BD-B993-4649-B3A2-48B8B6716004_gui">
             <omgdc:Bounds height="30.0" width="30.0" x="1095.0" y="575.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="11.0" width="160.52142333984375" x="976.7392883300781" y="624.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-9B143944-6BF1-483E-A70D-E1C89F297A35" id="sid-9B143944-6BF1-483E-A70D-E1C89F297A35_gui">
             <omgdc:Bounds height="30.0" width="30.0" x="1065.0" y="495.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="11.0" width="75.6642837524414" x="1042.1678581237793" y="527.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-CA400604-6343-4D36-BCA4-0EC4559B323C" id="sid-CA400604-6343-4D36-BCA4-0EC4559B323C_gui">
             <omgdc:Bounds height="28.0" width="28.0" x="1306.0" y="496.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="11.0" width="60.81428527832031" x="1289.5928573608398" y="526.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-F856E621-21EB-4470-9B8A-9454F4400C9D" id="sid-F856E621-21EB-4470-9B8A-9454F4400C9D_gui">
             <omgdc:Bounds height="40.0" width="40.0" x="985.0" y="490.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="12.0" width="108.0" x="963.0" y="464.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-09BD6507-3FE1-4B7D-AEE9-CE2BCCF5487C" id="sid-09BD6507-3FE1-4B7D-AEE9-CE2BCCF5487C_gui">
             <omgdc:Bounds height="40.0" width="100.0" x="960.0" y="570.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-6d4298f3-0ef3-435c-883c-994f9b5dfb63">
                <omgdc:Bounds height="24.0" width="47.82856750488281" x="986.0857162475586" y="576.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-E9B5ED58-6DB2-45E7-9525-0A5AB832772C" id="sid-E9B5ED58-6DB2-45E7-9525-0A5AB832772C_gui">
             <omgdc:Bounds height="80.0" width="100.0" x="1155.0" y="550.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-6d4298f3-0ef3-435c-883c-994f9b5dfb63">
                <omgdc:Bounds height="36.0" width="59.400001525878906" x="1175.2999992370605" y="570.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-80831654-2B94-4B33-B21B-3FD16FAAA807" id="sid-80831654-2B94-4B33-B21B-3FD16FAAA807_gui" isMarkerVisible="true">
             <omgdc:Bounds height="40.0" width="40.0" x="1300.0" y="570.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="12.0" width="88.71428680419922" x="1275.6428565979004" y="549.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-9A1607F6-F352-4EAA-ADB1-0F127DFA63BC" id="sid-9A1607F6-F352-4EAA-ADB1-0F127DFA63BC_gui">
             <omgdc:Bounds height="40.0" width="40.0" x="660.0" y="285.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="12.0" width="108.0" x="658.0" y="248.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-5AB77972-136B-4DA9-B267-FBC5CE89878C" id="sid-5AB77972-136B-4DA9-B267-FBC5CE89878C_gui">
             <omgdc:Bounds height="40.0" width="100.0" x="465.0" y="285.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-6d4298f3-0ef3-435c-883c-994f9b5dfb63">
                <omgdc:Bounds height="12.0" width="87.17141723632812" x="471.41429138183594" y="297.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-0D8661DD-19F2-424C-B576-ED3D8EB40ECD" id="sid-0D8661DD-19F2-424C-B576-ED3D8EB40ECD_gui">
             <omgdc:Bounds height="30.0" width="30.0" x="810.0" y="290.31315103599167"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="11.0" width="89.0999984741211" x="780.4500007629395" y="322.31315103599167"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-1F590963-5F24-4355-9EEE-6B0674206FF4" id="sid-1F590963-5F24-4355-9EEE-6B0674206FF4_gui">
             <omgdc:Bounds height="30.0" width="30.0" x="766.0" y="400.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="11.0" width="185.27142333984375" x="695.3642883300781" y="368.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-0DBB0026-0282-416C-BA18-405E16A761F1" id="sid-0DBB0026-0282-416C-BA18-405E16A761F1_gui">
             <omgdc:Bounds height="30.0" width="30.0" x="665.0" y="495.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="11.0" width="113.85000610351562" x="702.0749969482422" y="468.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-285F25B4-2210-418B-A267-C44C869FF48A" id="sid-285F25B4-2210-418B-A267-C44C869FF48A_gui">
             <omgdc:Bounds height="53.7831154522533" width="100.0" x="1030.0003156980317" y="388.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-6d4298f3-0ef3-435c-883c-994f9b5dfb63">
                <omgdc:Bounds height="12.0" width="57.08570861816406" x="1051.4574613889497" y="406.89200019836426"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-6943BFC6-67C8-4326-9D9D-19875E0E7B2B" id="sid-6943BFC6-67C8-4326-9D9D-19875E0E7B2B_gui">
             <omgdc:Bounds height="53.78311545225324" width="100.0" x="1155.0" y="483.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-6d4298f3-0ef3-435c-883c-994f9b5dfb63">
                <omgdc:Bounds height="12.0" width="84.08572387695312" x="1162.9571380615234" y="501.89200019836426"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-A0606A8E-BC7C-4AA8-A61D-A264D8143F60" id="sid-A0606A8E-BC7C-4AA8-A61D-A264D8143F60_gui">
             <omgdc:Bounds height="28.0" width="28.0" x="1530.0" y="576.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="11.0" width="60.81428527832031" x="1515.5928573608398" y="621.0"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNShape bpmnElement="sid-D9F6E540-B8CD-4694-BD7E-90A4079093C6" id="sid-D9F6E540-B8CD-4694-BD7E-90A4079093C6_gui">
             <omgdc:Bounds height="53.7831154522533" width="100.0" x="1380.0" y="563.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-6d4298f3-0ef3-435c-883c-994f9b5dfb63">
                <omgdc:Bounds height="12.0" width="84.08572387695312" x="1387.9571380615234" y="581.8920001983643"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
          <bpmndi:BPMNEdge bpmnElement="sid-B41D6291-2D93-4828-BC35-47697AFBF77F" id="sid-B41D6291-2D93-4828-BC35-47697AFBF77F_gui">
             <omgdi:waypoint x="195.0" y="305.0"/>
             <omgdi:waypoint x="240.0" y="305.0"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-E340A616-377D-4EC9-AED4-2D9B2D7FBFB3" id="sid-E340A616-377D-4EC9-AED4-2D9B2D7FBFB3_gui">
             <omgdi:waypoint x="340.0" y="305.2164502164502"/>
             <omgdi:waypoint x="385.0" y="305.4112554112554"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-F60A8F54-9507-4170-A814-4AD30DD7CD77" id="sid-F60A8F54-9507-4170-A814-4AD30DD7CD77_gui">
             <omgdi:waypoint x="535.0" y="535.0"/>
             <omgdi:waypoint x="585.0" y="535.0"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-F55CE346-79F4-4348-B823-A463D05C9C42" id="sid-F55CE346-79F4-4348-B823-A463D05C9C42_gui">
             <omgdi:waypoint x="1060.0" y="305.0"/>
             <omgdi:waypoint x="1215.0" y="305.0"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-E8A4EA59-21DC-43A4-A016-B6F50F1AB452" id="sid-E8A4EA59-21DC-43A4-A016-B6F50F1AB452_gui">
             <omgdi:waypoint x="700.0" y="305.474785087902"/>
             <omgdi:waypoint x="810.0" y="305.3325471222209"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="12.0" width="19.28570556640625" x="729.7982788085938" y="286.4110107421875"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-EF01D9F5-276F-48B4-B8BB-3CCFBAB1E95B" id="sid-EF01D9F5-276F-48B4-B8BB-3CCFBAB1E95B_gui">
             <omgdi:waypoint x="905.0" y="415.5"/>
             <omgdi:waypoint x="967.5001578490159" y="415.5"/>
             <omgdi:waypoint x="967.5001578490159" y="406.07889692344"/>
             <omgdi:waypoint x="1030.0003156980317" y="406.07889692344"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="12.0" width="19.28570556640625" x="913.0" y="395.5"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-185A64EA-E57B-4E09-B152-FB18FD2B674D" id="sid-185A64EA-E57B-4E09-B152-FB18FD2B674D_gui">
             <omgdi:waypoint x="885.3968253968254" y="435.0"/>
             <omgdi:waypoint x="885.0793650793651" y="495.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="14.72045407859946" width="12.077385191600001" x="865.2773960465453" y="412.3509566810973"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-6A7676D5-88B8-4449-8D3F-B3C096113E3E" id="sid-6A7676D5-88B8-4449-8D3F-B3C096113E3E_gui">
             <omgdi:waypoint x="405.5" y="325.0"/>
             <omgdi:waypoint x="405.5" y="535.0"/>
             <omgdi:waypoint x="435.0" y="535.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="14.657135009765625" width="12.0" x="385.5" y="302.3428649902344"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-38FA6C99-0227-4AEB-8984-2D6160DDF8AF" id="sid-38FA6C99-0227-4AEB-8984-2D6160DDF8AF_gui">
             <omgdi:waypoint x="900.0" y="510.0622406639004"/>
             <omgdi:waypoint x="985.0" y="510.4149377593361"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-5F57EE38-7AC3-4558-885F-9E76026369F8" id="sid-5F57EE38-7AC3-4558-885F-9E76026369F8_gui">
             <omgdi:waypoint x="1025.0" y="510.3691275167785"/>
             <omgdi:waypoint x="1065.0" y="510.1006711409396"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-9AB70993-7D5B-464D-A931-D451E1CDD0E6" id="sid-9AB70993-7D5B-464D-A931-D451E1CDD0E6_gui">
             <omgdi:waypoint x="1095.0" y="509.9869869271352"/>
             <omgdi:waypoint x="1155.0" y="509.934934635676"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-E6D8D26B-6FCD-4CEC-A545-6B88DBA05734" id="sid-E6D8D26B-6FCD-4CEC-A545-6B88DBA05734_gui">
             <omgdi:waypoint x="1005.5" y="530.0"/>
             <omgdi:waypoint x="1005.5" y="570.0"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-DB6381EA-01CB-404D-AF9F-BA38A0BC0D25" id="sid-DB6381EA-01CB-404D-AF9F-BA38A0BC0D25_gui">
             <omgdi:waypoint x="1060.0" y="590.0"/>
             <omgdi:waypoint x="1095.0" y="590.0"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-541C9EA8-7BB5-4AE1-A5BE-CDE89EF10384" id="sid-541C9EA8-7BB5-4AE1-A5BE-CDE89EF10384_gui">
             <omgdi:waypoint x="1125.0" y="590.0"/>
             <omgdi:waypoint x="1155.0" y="590.0"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-A394622C-C72D-4FD5-B021-95D9ED24C774" id="sid-A394622C-C72D-4FD5-B021-95D9ED24C774_gui">
             <omgdi:waypoint x="1255.0" y="590.2164502164502"/>
             <omgdi:waypoint x="1300.0" y="590.4112554112554"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-232A6D08-9D04-4C91-9C5F-FBAE191932DD" id="sid-232A6D08-9D04-4C91-9C5F-FBAE191932DD_gui">
             <omgdi:waypoint x="1320.5" y="610.0"/>
             <omgdi:waypoint x="1320.5" y="696.0"/>
             <omgdi:waypoint x="885.0" y="696.0"/>
             <omgdi:waypoint x="885.0" y="525.0"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="12.0" width="14.6571044921875" x="1297.3428955078125" y="637.5"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-909FF6B4-C874-459A-A621-8068D4C72BA8" id="sid-909FF6B4-C874-459A-A621-8068D4C72BA8_gui">
             <omgdi:waypoint x="1340.0" y="590.3916472662966"/>
             <omgdi:waypoint x="1380.0" y="590.1693852484433"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="12.106974012028218" width="19.352145578407317" x="1347.785720309587" y="570.2407299580233"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-1C327290-AF36-4E45-9DA9-EF27171B2007" id="sid-1C327290-AF36-4E45-9DA9-EF27171B2007_gui">
             <omgdi:waypoint x="630.0" y="305.0"/>
             <omgdi:waypoint x="660.0" y="305.0"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-323537C0-CC0B-47CB-8801-89640F9D4601" id="sid-323537C0-CC0B-47CB-8801-89640F9D4601_gui">
             <omgdi:waypoint x="565.0" y="305.0"/>
             <omgdi:waypoint x="600.0" y="305.0"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-8116839A-74E1-4BDC-80D0-2276BC18BFEE" id="sid-8116839A-74E1-4BDC-80D0-2276BC18BFEE_gui">
             <omgdi:waypoint x="425.0" y="305.5"/>
             <omgdi:waypoint x="465.0" y="305.5"/>
             <bpmndi:BPMNLabel labelStyle="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
                <omgdc:Bounds height="12.0" width="19.28570556640625" x="433.0" y="285.5"/>
             </bpmndi:BPMNLabel>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-B7A5FBCB-C449-4F9E-A237-E1D4D859160C" id="sid-B7A5FBCB-C449-4F9E-A237-E1D4D859160C_gui">
             <omgdi:waypoint x="840.0" y="305.2877604114518"/>
             <omgdi:waypoint x="960.0" y="305.0846354151329"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-5C551384-6F28-4428-A05C-ADD7EFCF2964" id="sid-5C551384-6F28-4428-A05C-ADD7EFCF2964_gui">
             <omgdi:waypoint x="680.5" y="325.0"/>
             <omgdi:waypoint x="680.5" y="415.0"/>
             <omgdi:waypoint x="766.0" y="415.0"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-F45CE905-F0A3-4460-9894-3E64F22DB21B" id="sid-F45CE905-F0A3-4460-9894-3E64F22DB21B_gui">
             <omgdi:waypoint x="796.0" y="415.0717703349282"/>
             <omgdi:waypoint x="865.0" y="415.4019138755981"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-413C6C48-0E52-4182-95A0-1706253DBEED" id="sid-413C6C48-0E52-4182-95A0-1706253DBEED_gui">
             <omgdi:waypoint x="680.4523227383863" y="325.0"/>
             <omgdi:waypoint x="680.0366748166259" y="495.0"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-A78BE937-E0C7-409B-8DDE-2CECF7EBF56B" id="sid-A78BE937-E0C7-409B-8DDE-2CECF7EBF56B_gui">
             <omgdi:waypoint x="695.0" y="510.0"/>
             <omgdi:waypoint x="870.0" y="510.0"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-40443FE9-DB2F-4F9B-A407-9DE7733EB595" id="sid-40443FE9-DB2F-4F9B-A407-9DE7733EB595_gui">
             <omgdi:waypoint x="1130.0003156980317" y="406.07889692344"/>
             <omgdi:waypoint x="1172.500157849016" y="406.07889692344"/>
             <omgdi:waypoint x="1172.500157849016" y="415.0"/>
             <omgdi:waypoint x="1215.0" y="415.0"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-C66A36B9-0A14-4792-A1A7-7CFE88BCFC15" id="sid-C66A36B9-0A14-4792-A1A7-7CFE88BCFC15_gui">
             <omgdi:waypoint x="1255.0" y="509.9387065408542"/>
             <omgdi:waypoint x="1306.0" y="509.9867983318763"/>
          </bpmndi:BPMNEdge>
          <bpmndi:BPMNEdge bpmnElement="sid-A57C555F-C8E6-4402-B7E6-B57804419A94" id="sid-A57C555F-C8E6-4402-B7E6-B57804419A94_gui">
             <omgdi:waypoint x="1480.0" y="589.9391201269483"/>
             <omgdi:waypoint x="1530.0" y="589.98668252777"/>
          </bpmndi:BPMNEdge>
       </bpmndi:BPMNPlane>
       <bpmndi:BPMNLabelStyle id="sid-15e039d8-360b-484e-8fd1-1f5bfa774d78">
          <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="11.0"/>
       </bpmndi:BPMNLabelStyle>
       <bpmndi:BPMNLabelStyle id="sid-6d4298f3-0ef3-435c-883c-994f9b5dfb63">
          <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="12.0"/>
       </bpmndi:BPMNLabelStyle>
    </bpmndi:BPMNDiagram>
 </definitions>`,
    credit: `<?xml version="1.0" encoding="UTF-8"?><definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:signavio="http://www.signavio.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" exporter="Signavio Process Editor, http://www.signavio.com" exporterVersion="9.3.2" expressionLanguage="http://www.w3.org/TR/XPath" id="sid-d7118298-6058-4993-8cbd-75d3d080b949" targetNamespace="http://www.signavio.com" typeLanguage="http://www.w3.org/2001/XMLSchema" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">
 <collaboration id="sid-c390a7f4-30a3-4695-b293-4fb242eed953">
    <extensionElements>
       <signavio:signavioDiagramMetaData metaKey="revisionid" metaValue="302acd49b6094cd98eabfc17f1551e37"/>
    </extensionElements>
    <participant id="sid-1497CEF6-7828-4FA5-99FF-0FCCD7056AE9" name="Bank" processRef="sid-E8B2740F-8657-460F-854C-3F52B162585D">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
       </extensionElements>
    </participant>
    <participant id="sid-1DC5C75F-8548-4589-88EC-97A2605398B9" name="Credit protection agency" processRef="sid-055D7A84-2962-48BC-9B05-751F2E8B1CBB">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
       </extensionElements>
    </participant>
    <participant id="sid-4223EF2E-8944-426E-B53D-F3068F474699" name="Banking Frontend">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
       </extensionElements>
    </participant>
    <messageFlow id="sid-B22A3130-53BC-43FF-A927-C10F94D3EB16" name="" sourceRef="sid-4223EF2E-8944-426E-B53D-F3068F474699" targetRef="sid-0B1525C5-DB22-4F43-A248-AE04B065CFA0"/>
    <messageFlow id="sid-866E1E75-1376-487F-A049-F599523AAD71" name="" sourceRef="sid-AF768B08-A00D-4296-B805-D544DBCE54BF" targetRef="sid-C2485323-3A1E-4141-804F-3812A4C99F2F"/>
    <messageFlow id="sid-99E4B099-EC83-47D4-BE83-192F97AABCBC" name="" sourceRef="sid-995B58D9-88DC-4ED0-8961-34CD12EE8157" targetRef="sid-9FF9AA95-1B07-4D02-999C-6353B0C79A70"/>
    <messageFlow id="sid-28F76CC6-7AAF-4904-B67B-28D2783F4558" name="" sourceRef="sid-6D927729-6DAF-44EC-9D4B-9E8620D6F4EC" targetRef="sid-43876491-60D5-48BC-9609-0BCF8A13C59B"/>
    <messageFlow id="sid-E74BD453-3C8E-4F9D-8884-49023FD3DECA" name="" sourceRef="sid-2529C858-BFED-442F-AD44-D12A79298DD7" targetRef="sid-9D5A255B-26AA-47DF-975C-E6D84F22A913"/>
    <messageFlow id="sid-FBD55589-4614-4F42-9C8F-0B39FA42B353" name="" sourceRef="sid-F450C97D-1A86-417A-BC1E-DF5A2CE3F331" targetRef="sid-4223EF2E-8944-426E-B53D-F3068F474699"/>
    <messageFlow id="sid-E7A2B990-202D-4A90-B98D-BB02E3F1A2F6" name="" sourceRef="sid-DBCD086F-E870-445F-8902-A1E860E9799D" targetRef="sid-4223EF2E-8944-426E-B53D-F3068F474699"/>
 </collaboration>
 <process id="sid-E8B2740F-8657-460F-854C-3F52B162585D" isClosed="false" isExecutable="false" name="Bank" processType="None">
    <extensionElements/>
    <laneSet id="sid-8404e027-901d-486d-8527-bf3fb15f28c6">
       <lane id="sid-3C37A961-8EB0-48BB-84E4-13CE38C4CADB">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
          </extensionElements>
          <flowNodeRef>sid-0B1525C5-DB22-4F43-A248-AE04B065CFA0</flowNodeRef>
          <flowNodeRef>sid-AF768B08-A00D-4296-B805-D544DBCE54BF</flowNodeRef>
          <flowNodeRef>sid-9FF9AA95-1B07-4D02-999C-6353B0C79A70</flowNodeRef>
          <flowNodeRef>sid-43876491-60D5-48BC-9609-0BCF8A13C59B</flowNodeRef>
          <flowNodeRef>sid-9D5A255B-26AA-47DF-975C-E6D84F22A913</flowNodeRef>
          <flowNodeRef>sid-99E2D998-74C6-450D-AD57-965FD3B6E82F</flowNodeRef>
          <flowNodeRef>sid-F450C97D-1A86-417A-BC1E-DF5A2CE3F331</flowNodeRef>
          <flowNodeRef>sid-9FBCED57-365F-47F3-9CB6-620AF914E89D</flowNodeRef>
          <flowNodeRef>sid-DBCD086F-E870-445F-8902-A1E860E9799D</flowNodeRef>
          <flowNodeRef>sid-BF9B90DB-D720-4F2E-83D1-0ADE68522598</flowNodeRef>
       </lane>
    </laneSet>
    <startEvent id="sid-0B1525C5-DB22-4F43-A248-AE04B065CFA0" isInterrupting="true" name="">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
       </extensionElements>
       <outgoing>sid-7698A08F-0083-40DE-8DC6-5BC7A3D0A667</outgoing>
       <messageEventDefinition id="sid-e925e15a-2f57-4388-9564-e55b884b9cf0"/>
    </startEvent>
    <task completionQuantity="1" id="sid-AF768B08-A00D-4296-B805-D544DBCE54BF" isForCompensation="false" name="Send request for scoring" startQuantity="1">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
          <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
       </extensionElements>
       <incoming>sid-7698A08F-0083-40DE-8DC6-5BC7A3D0A667</incoming>
       <outgoing>sid-0AB19B5B-E483-4468-8345-88A5F45C8447</outgoing>
    </task>
    <intermediateCatchEvent id="sid-9FF9AA95-1B07-4D02-999C-6353B0C79A70" name="delay report received">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
       </extensionElements>
       <incoming>sid-0FC1258E-582C-41AD-A261-936CC3953539</incoming>
       <outgoing>sid-3A0F69D6-E73A-4E94-BF42-D1789BAB898E</outgoing>
       <messageEventDefinition id="sid-d30165fd-8239-4e1a-81fc-387c9a2e2d63"/>
    </intermediateCatchEvent>
    <intermediateCatchEvent id="sid-43876491-60D5-48BC-9609-0BCF8A13C59B" name="Report level 2 report returned">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
       </extensionElements>
       <outgoing>sid-4EF42E81-1567-4EEE-9ACB-DD82E1D32E34</outgoing>
       <messageEventDefinition id="sid-fdc79ea5-2e1c-4fad-b7c3-07292ebd1c62"/>
    </intermediateCatchEvent>
    <intermediateCatchEvent id="sid-9D5A255B-26AA-47DF-975C-E6D84F22A913" name="Report Level 1 report returned">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
       </extensionElements>
       <incoming>sid-5F26B527-7673-4870-BD49-A88D0D42C2B1</incoming>
       <outgoing>sid-AC6988FB-B8FF-4C16-83B8-DDA73EDCDD9B</outgoing>
       <messageEventDefinition id="sid-aeb6b5f0-d84f-4eaf-bd74-22ef40ff237d"/>
    </intermediateCatchEvent>
    <eventBasedGateway eventGatewayType="Exclusive" gatewayDirection="Diverging" id="sid-99E2D998-74C6-450D-AD57-965FD3B6E82F" instantiate="false" name="">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
       </extensionElements>
       <incoming>sid-0AB19B5B-E483-4468-8345-88A5F45C8447</incoming>
       <outgoing>sid-0FC1258E-582C-41AD-A261-936CC3953539</outgoing>
       <outgoing>sid-5F26B527-7673-4870-BD49-A88D0D42C2B1</outgoing>
    </eventBasedGateway>
    <task completionQuantity="1" id="sid-F450C97D-1A86-417A-BC1E-DF5A2CE3F331" isForCompensation="false" name="forward delay" startQuantity="1">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
          <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
       </extensionElements>
       <incoming>sid-3A0F69D6-E73A-4E94-BF42-D1789BAB898E</incoming>
    </task>
    <exclusiveGateway gatewayDirection="Converging" id="sid-9FBCED57-365F-47F3-9CB6-620AF914E89D" name="">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
       </extensionElements>
       <incoming>sid-4EF42E81-1567-4EEE-9ACB-DD82E1D32E34</incoming>
       <incoming>sid-AC6988FB-B8FF-4C16-83B8-DDA73EDCDD9B</incoming>
       <outgoing>sid-BD66CF95-8B41-4EC0-9F66-AA36F6F4911F</outgoing>
    </exclusiveGateway>
    <task completionQuantity="1" id="sid-DBCD086F-E870-445F-8902-A1E860E9799D" isForCompensation="false" name="Send scoring" startQuantity="1">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
          <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
       </extensionElements>
       <incoming>sid-BD66CF95-8B41-4EC0-9F66-AA36F6F4911F</incoming>
       <outgoing>sid-6DAE7594-FA31-4E06-A15A-95B5C38F00F2</outgoing>
    </task>
    <endEvent id="sid-BF9B90DB-D720-4F2E-83D1-0ADE68522598" name="">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
       </extensionElements>
       <incoming>sid-6DAE7594-FA31-4E06-A15A-95B5C38F00F2</incoming>
    </endEvent>
    <sequenceFlow id="sid-7698A08F-0083-40DE-8DC6-5BC7A3D0A667" name="" sourceRef="sid-0B1525C5-DB22-4F43-A248-AE04B065CFA0" targetRef="sid-AF768B08-A00D-4296-B805-D544DBCE54BF"/>
    <sequenceFlow id="sid-0FC1258E-582C-41AD-A261-936CC3953539" name="" sourceRef="sid-99E2D998-74C6-450D-AD57-965FD3B6E82F" targetRef="sid-9FF9AA95-1B07-4D02-999C-6353B0C79A70"/>
    <sequenceFlow id="sid-5F26B527-7673-4870-BD49-A88D0D42C2B1" name="" sourceRef="sid-99E2D998-74C6-450D-AD57-965FD3B6E82F" targetRef="sid-9D5A255B-26AA-47DF-975C-E6D84F22A913"/>
    <sequenceFlow id="sid-0AB19B5B-E483-4468-8345-88A5F45C8447" name="" sourceRef="sid-AF768B08-A00D-4296-B805-D544DBCE54BF" targetRef="sid-99E2D998-74C6-450D-AD57-965FD3B6E82F"/>
    <sequenceFlow id="sid-3A0F69D6-E73A-4E94-BF42-D1789BAB898E" name="" sourceRef="sid-9FF9AA95-1B07-4D02-999C-6353B0C79A70" targetRef="sid-F450C97D-1A86-417A-BC1E-DF5A2CE3F331"/>
    <sequenceFlow id="sid-4EF42E81-1567-4EEE-9ACB-DD82E1D32E34" name="" sourceRef="sid-43876491-60D5-48BC-9609-0BCF8A13C59B" targetRef="sid-9FBCED57-365F-47F3-9CB6-620AF914E89D"/>
    <sequenceFlow id="sid-AC6988FB-B8FF-4C16-83B8-DDA73EDCDD9B" name="" sourceRef="sid-9D5A255B-26AA-47DF-975C-E6D84F22A913" targetRef="sid-9FBCED57-365F-47F3-9CB6-620AF914E89D"/>
    <sequenceFlow id="sid-BD66CF95-8B41-4EC0-9F66-AA36F6F4911F" name="" sourceRef="sid-9FBCED57-365F-47F3-9CB6-620AF914E89D" targetRef="sid-DBCD086F-E870-445F-8902-A1E860E9799D"/>
    <sequenceFlow id="sid-6DAE7594-FA31-4E06-A15A-95B5C38F00F2" name="" sourceRef="sid-DBCD086F-E870-445F-8902-A1E860E9799D" targetRef="sid-BF9B90DB-D720-4F2E-83D1-0ADE68522598"/>
 </process>
 <process id="sid-055D7A84-2962-48BC-9B05-751F2E8B1CBB" isClosed="false" isExecutable="false" name="Credit protection agency" processType="None">
    <extensionElements/>
    <laneSet id="sid-de16ee52-c1d5-435e-b54a-96925b4a0121">
       <lane id="sid-02364F1A-A8BB-40DD-8C2F-D3BC1612FFD7">
          <extensionElements>
             <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
          </extensionElements>
          <flowNodeRef>sid-C2485323-3A1E-4141-804F-3812A4C99F2F</flowNodeRef>
          <flowNodeRef>sid-86FAD026-6D49-4E8B-AB2B-658236435FEC</flowNodeRef>
          <flowNodeRef>sid-F024EC18-D9AB-40E6-9CF9-2736D4C80534</flowNodeRef>
          <flowNodeRef>sid-995B58D9-88DC-4ED0-8961-34CD12EE8157</flowNodeRef>
          <flowNodeRef>sid-302A3BA8-910B-4D52-A611-909464205FB2</flowNodeRef>
          <flowNodeRef>sid-6D927729-6DAF-44EC-9D4B-9E8620D6F4EC</flowNodeRef>
          <flowNodeRef>sid-2529C858-BFED-442F-AD44-D12A79298DD7</flowNodeRef>
       </lane>
    </laneSet>
    <startEvent id="sid-C2485323-3A1E-4141-804F-3812A4C99F2F" isInterrupting="true" name="">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
       </extensionElements>
       <outgoing>sid-5E6EEBF7-07C3-48DA-8715-782EFDA661B6</outgoing>
       <messageEventDefinition id="sid-e852b953-0981-401e-931d-b04433074476"/>
    </startEvent>
    <task completionQuantity="1" id="sid-86FAD026-6D49-4E8B-AB2B-658236435FEC" isForCompensation="false" name="Start first scoring" startQuantity="1">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
          <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
       </extensionElements>
       <incoming>sid-5E6EEBF7-07C3-48DA-8715-782EFDA661B6</incoming>
       <outgoing>sid-9DBB6E10-4731-474D-B881-3FAA25CE4939</outgoing>
    </task>
    <exclusiveGateway gatewayDirection="Diverging" id="sid-F024EC18-D9AB-40E6-9CF9-2736D4C80534" name="delay?">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
       </extensionElements>
       <incoming>sid-9DBB6E10-4731-474D-B881-3FAA25CE4939</incoming>
       <outgoing>sid-483B73AD-47A0-4496-9EA0-D8195AA07CB1</outgoing>
       <outgoing>sid-D5F518F9-7374-444D-8417-A64CA534D655</outgoing>
    </exclusiveGateway>
    <task completionQuantity="1" id="sid-995B58D9-88DC-4ED0-8961-34CD12EE8157" isForCompensation="false" name="Send ´delay eport" startQuantity="1">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
          <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
       </extensionElements>
       <incoming>sid-483B73AD-47A0-4496-9EA0-D8195AA07CB1</incoming>
       <outgoing>sid-D60855BD-85D6-42DF-8C9C-5E344DD14B8C</outgoing>
    </task>
    <task completionQuantity="1" id="sid-302A3BA8-910B-4D52-A611-909464205FB2" isForCompensation="false" name="Start second scoring" startQuantity="1">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
          <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
       </extensionElements>
       <incoming>sid-D60855BD-85D6-42DF-8C9C-5E344DD14B8C</incoming>
       <outgoing>sid-948B4FB5-6E2F-4B00-A8C8-D2EA1924C2FC</outgoing>
    </task>
    <task completionQuantity="1" id="sid-6D927729-6DAF-44EC-9D4B-9E8620D6F4EC" isForCompensation="false" name="Sending result" startQuantity="1">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
          <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
       </extensionElements>
       <incoming>sid-948B4FB5-6E2F-4B00-A8C8-D2EA1924C2FC</incoming>
    </task>
    <task completionQuantity="1" id="sid-2529C858-BFED-442F-AD44-D12A79298DD7" isForCompensation="false" name="Send scoring level 1" startQuantity="1">
       <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
          <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
       </extensionElements>
       <incoming>sid-D5F518F9-7374-444D-8417-A64CA534D655</incoming>
    </task>
    <sequenceFlow id="sid-5E6EEBF7-07C3-48DA-8715-782EFDA661B6" name="" sourceRef="sid-C2485323-3A1E-4141-804F-3812A4C99F2F" targetRef="sid-86FAD026-6D49-4E8B-AB2B-658236435FEC"/>
    <sequenceFlow id="sid-9DBB6E10-4731-474D-B881-3FAA25CE4939" name="" sourceRef="sid-86FAD026-6D49-4E8B-AB2B-658236435FEC" targetRef="sid-F024EC18-D9AB-40E6-9CF9-2736D4C80534"/>
    <sequenceFlow id="sid-D60855BD-85D6-42DF-8C9C-5E344DD14B8C" name="" sourceRef="sid-995B58D9-88DC-4ED0-8961-34CD12EE8157" targetRef="sid-302A3BA8-910B-4D52-A611-909464205FB2"/>
    <sequenceFlow id="sid-948B4FB5-6E2F-4B00-A8C8-D2EA1924C2FC" name="" sourceRef="sid-302A3BA8-910B-4D52-A611-909464205FB2" targetRef="sid-6D927729-6DAF-44EC-9D4B-9E8620D6F4EC"/>
    <sequenceFlow id="sid-483B73AD-47A0-4496-9EA0-D8195AA07CB1" name="Yes" sourceRef="sid-F024EC18-D9AB-40E6-9CF9-2736D4C80534" targetRef="sid-995B58D9-88DC-4ED0-8961-34CD12EE8157"/>
    <sequenceFlow id="sid-D5F518F9-7374-444D-8417-A64CA534D655" name="" sourceRef="sid-F024EC18-D9AB-40E6-9CF9-2736D4C80534" targetRef="sid-2529C858-BFED-442F-AD44-D12A79298DD7"/>
 </process>
 <bpmndi:BPMNDiagram id="sid-3c5197fc-30e0-45ca-b736-eaabefc46d4e">
    <bpmndi:BPMNPlane bpmnElement="sid-c390a7f4-30a3-4695-b293-4fb242eed953" id="sid-8b5e248d-8584-406b-83a6-0b1a37a6b8e3">
       <bpmndi:BPMNShape bpmnElement="sid-1497CEF6-7828-4FA5-99FF-0FCCD7056AE9" id="sid-1497CEF6-7828-4FA5-99FF-0FCCD7056AE9_gui" isHorizontal="true">
          <omgdc:Bounds height="245.0" width="1075.0" x="150.0" y="435.0"/>
          <bpmndi:BPMNLabel labelStyle="sid-86f3f3ab-65a7-4843-950d-dcaf62cd8b38">
             <omgdc:Bounds height="27.0" width="12.0" x="155.0" y="544.0"/>
          </bpmndi:BPMNLabel>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-1DC5C75F-8548-4589-88EC-97A2605398B9" id="sid-1DC5C75F-8548-4589-88EC-97A2605398B9_gui" isHorizontal="true">
          <omgdc:Bounds height="292.0" width="1063.0" x="150.0" y="718.0"/>
          <bpmndi:BPMNLabel labelStyle="sid-86f3f3ab-65a7-4843-950d-dcaf62cd8b38">
             <omgdc:Bounds height="133.45713806152344" width="12.000000000000028" x="155.0" y="797.2714309692383"/>
          </bpmndi:BPMNLabel>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-4223EF2E-8944-426E-B53D-F3068F474699" id="sid-4223EF2E-8944-426E-B53D-F3068F474699_gui" isHorizontal="true">
          <omgdc:Bounds height="60.0" width="875.0" x="150.0" y="330.0"/>
          <bpmndi:BPMNLabel labelStyle="sid-86f3f3ab-65a7-4843-950d-dcaf62cd8b38">
             <omgdc:Bounds height="20.0" width="160.71429443359375" x="507.1428527832031" y="347.0"/>
          </bpmndi:BPMNLabel>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-3C37A961-8EB0-48BB-84E4-13CE38C4CADB" id="sid-3C37A961-8EB0-48BB-84E4-13CE38C4CADB_gui" isHorizontal="true">
          <omgdc:Bounds height="245.0" width="1045.0" x="180.0" y="435.0"/>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-0B1525C5-DB22-4F43-A248-AE04B065CFA0" id="sid-0B1525C5-DB22-4F43-A248-AE04B065CFA0_gui">
          <omgdc:Bounds height="30.0" width="30.0" x="210.0" y="625.0"/>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-AF768B08-A00D-4296-B805-D544DBCE54BF" id="sid-AF768B08-A00D-4296-B805-D544DBCE54BF_gui">
          <omgdc:Bounds height="80.0" width="100.0" x="285.0" y="520.0"/>
          <bpmndi:BPMNLabel labelStyle="sid-86f3f3ab-65a7-4843-950d-dcaf62cd8b38">
             <omgdc:Bounds height="24.0" width="73.28571319580078" x="298.3571434020996" y="546.0"/>
          </bpmndi:BPMNLabel>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-9FF9AA95-1B07-4D02-999C-6353B0C79A70" id="sid-9FF9AA95-1B07-4D02-999C-6353B0C79A70_gui">
          <omgdc:Bounds height="30.0" width="30.0" x="660.0" y="470.0"/>
          <bpmndi:BPMNLabel labelStyle="sid-bcd54e80-a962-47df-af8a-fd92f47b567d">
             <omgdc:Bounds height="11.0" width="103.94999694824219" x="623.0250015258789" y="502.0"/>
          </bpmndi:BPMNLabel>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-43876491-60D5-48BC-9609-0BCF8A13C59B" id="sid-43876491-60D5-48BC-9609-0BCF8A13C59B_gui">
          <omgdc:Bounds height="30.0" width="30.0" x="950.0" y="625.0"/>
          <bpmndi:BPMNLabel labelStyle="sid-bcd54e80-a962-47df-af8a-fd92f47b567d">
             <omgdc:Bounds height="11.0" width="149.91429138183594" x="890.042854309082" y="657.0"/>
          </bpmndi:BPMNLabel>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-9D5A255B-26AA-47DF-975C-E6D84F22A913" id="sid-9D5A255B-26AA-47DF-975C-E6D84F22A913_gui">
          <omgdc:Bounds height="30.0" width="30.0" x="750.0" y="625.0"/>
          <bpmndi:BPMNLabel labelStyle="sid-bcd54e80-a962-47df-af8a-fd92f47b567d">
             <omgdc:Bounds height="11.0" width="153.4499969482422" x="688.2750015258789" y="657.0"/>
          </bpmndi:BPMNLabel>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-99E2D998-74C6-450D-AD57-965FD3B6E82F" id="sid-99E2D998-74C6-450D-AD57-965FD3B6E82F_gui">
          <omgdc:Bounds height="40.0" width="40.0" x="455.0" y="620.0"/>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-F450C97D-1A86-417A-BC1E-DF5A2CE3F331" id="sid-F450C97D-1A86-417A-BC1E-DF5A2CE3F331_gui">
          <omgdc:Bounds height="80.0" width="100.0" x="735.0" y="445.0"/>
          <bpmndi:BPMNLabel labelStyle="sid-86f3f3ab-65a7-4843-950d-dcaf62cd8b38">
             <omgdc:Bounds height="12.0" width="73.28571319580078" x="748.3571434020996" y="477.0"/>
          </bpmndi:BPMNLabel>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-9FBCED57-365F-47F3-9CB6-620AF914E89D" id="sid-9FBCED57-365F-47F3-9CB6-620AF914E89D_gui" isMarkerVisible="true">
          <omgdc:Bounds height="40.0" width="40.0" x="945.0" y="522.0"/>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-DBCD086F-E870-445F-8902-A1E860E9799D" id="sid-DBCD086F-E870-445F-8902-A1E860E9799D_gui">
          <omgdc:Bounds height="80.0" width="100.0" x="1025.0" y="520.0"/>
          <bpmndi:BPMNLabel labelStyle="sid-86f3f3ab-65a7-4843-950d-dcaf62cd8b38">
             <omgdc:Bounds height="12.0" width="70.97142791748047" x="1039.5142860412598" y="552.0"/>
          </bpmndi:BPMNLabel>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-BF9B90DB-D720-4F2E-83D1-0ADE68522598" id="sid-BF9B90DB-D720-4F2E-83D1-0ADE68522598_gui">
          <omgdc:Bounds height="28.0" width="28.0" x="1170.0" y="546.0"/>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-02364F1A-A8BB-40DD-8C2F-D3BC1612FFD7" id="sid-02364F1A-A8BB-40DD-8C2F-D3BC1612FFD7_gui" isHorizontal="true">
          <omgdc:Bounds height="292.0" width="1033.0" x="180.0" y="718.0"/>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-C2485323-3A1E-4141-804F-3812A4C99F2F" id="sid-C2485323-3A1E-4141-804F-3812A4C99F2F_gui">
          <omgdc:Bounds height="30.0" width="30.0" x="320.0" y="778.0"/>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-86FAD026-6D49-4E8B-AB2B-658236435FEC" id="sid-86FAD026-6D49-4E8B-AB2B-658236435FEC_gui">
          <omgdc:Bounds height="80.0" width="100.0" x="395.0" y="753.0"/>
          <bpmndi:BPMNLabel labelStyle="sid-86f3f3ab-65a7-4843-950d-dcaf62cd8b38">
             <omgdc:Bounds height="24.0" width="53.22857666015625" x="418.3857116699219" y="779.0"/>
          </bpmndi:BPMNLabel>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-F024EC18-D9AB-40E6-9CF9-2736D4C80534" id="sid-F024EC18-D9AB-40E6-9CF9-2736D4C80534_gui" isMarkerVisible="true">
          <omgdc:Bounds height="40.0" width="40.0" x="540.0" y="773.0"/>
          <bpmndi:BPMNLabel labelStyle="sid-bcd54e80-a962-47df-af8a-fd92f47b567d">
             <omgdc:Bounds height="12.0" width="33.94285583496094" x="570.5" y="803.5"/>
          </bpmndi:BPMNLabel>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-995B58D9-88DC-4ED0-8961-34CD12EE8157" id="sid-995B58D9-88DC-4ED0-8961-34CD12EE8157_gui">
          <omgdc:Bounds height="80.0" width="100.0" x="625.0" y="753.0"/>
          <bpmndi:BPMNLabel labelStyle="sid-86f3f3ab-65a7-4843-950d-dcaf62cd8b38">
             <omgdc:Bounds height="24.0" width="66.34285736083984" x="641.8285713195801" y="779.0"/>
          </bpmndi:BPMNLabel>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-302A3BA8-910B-4D52-A611-909464205FB2" id="sid-302A3BA8-910B-4D52-A611-909464205FB2_gui">
          <omgdc:Bounds height="80.0" width="100.0" x="770.0" y="753.0"/>
          <bpmndi:BPMNLabel labelStyle="sid-86f3f3ab-65a7-4843-950d-dcaf62cd8b38">
             <omgdc:Bounds height="24.0" width="70.19999694824219" x="784.9000015258789" y="779.0"/>
          </bpmndi:BPMNLabel>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-6D927729-6DAF-44EC-9D4B-9E8620D6F4EC" id="sid-6D927729-6DAF-44EC-9D4B-9E8620D6F4EC_gui">
          <omgdc:Bounds height="80.0" width="100.0" x="915.0" y="753.0"/>
          <bpmndi:BPMNLabel labelStyle="sid-86f3f3ab-65a7-4843-950d-dcaf62cd8b38">
             <omgdc:Bounds height="12.0" width="78.68571472167969" x="925.6571426391602" y="785.0"/>
          </bpmndi:BPMNLabel>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape bpmnElement="sid-2529C858-BFED-442F-AD44-D12A79298DD7" id="sid-2529C858-BFED-442F-AD44-D12A79298DD7_gui">
          <omgdc:Bounds height="80.0" width="100.0" x="625.0" y="858.0"/>
          <bpmndi:BPMNLabel labelStyle="sid-86f3f3ab-65a7-4843-950d-dcaf62cd8b38">
             <omgdc:Bounds height="24.0" width="70.97142791748047" x="639.5142860412598" y="884.0"/>
          </bpmndi:BPMNLabel>
       </bpmndi:BPMNShape>
       <bpmndi:BPMNEdge bpmnElement="sid-B22A3130-53BC-43FF-A927-C10F94D3EB16" id="sid-B22A3130-53BC-43FF-A927-C10F94D3EB16_gui">
          <omgdi:waypoint x="225.0" y="390.0"/>
          <omgdi:waypoint x="225.0" y="625.0"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-7698A08F-0083-40DE-8DC6-5BC7A3D0A667" id="sid-7698A08F-0083-40DE-8DC6-5BC7A3D0A667_gui">
          <omgdi:waypoint x="240.0" y="629.0909090909091"/>
          <omgdi:waypoint x="285.0" y="596.3636363636364"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-866E1E75-1376-487F-A049-F599523AAD71" id="sid-866E1E75-1376-487F-A049-F599523AAD71_gui">
          <omgdi:waypoint x="335.0" y="600.0"/>
          <omgdi:waypoint x="335.0" y="778.0"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-5E6EEBF7-07C3-48DA-8715-782EFDA661B6" id="sid-5E6EEBF7-07C3-48DA-8715-782EFDA661B6_gui">
          <omgdi:waypoint x="350.0" y="793.0"/>
          <omgdi:waypoint x="395.0" y="793.0"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-9DBB6E10-4731-474D-B881-3FAA25CE4939" id="sid-9DBB6E10-4731-474D-B881-3FAA25CE4939_gui">
          <omgdi:waypoint x="495.0" y="793.2164502164502"/>
          <omgdi:waypoint x="540.0" y="793.4112554112554"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-99E4B099-EC83-47D4-BE83-192F97AABCBC" id="sid-99E4B099-EC83-47D4-BE83-192F97AABCBC_gui">
          <omgdi:waypoint x="675.0" y="753.0"/>
          <omgdi:waypoint x="675.0" y="500.0"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-D60855BD-85D6-42DF-8C9C-5E344DD14B8C" id="sid-D60855BD-85D6-42DF-8C9C-5E344DD14B8C_gui">
          <omgdi:waypoint x="725.0" y="793.0"/>
          <omgdi:waypoint x="770.0" y="793.0"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-948B4FB5-6E2F-4B00-A8C8-D2EA1924C2FC" id="sid-948B4FB5-6E2F-4B00-A8C8-D2EA1924C2FC_gui">
          <omgdi:waypoint x="870.0" y="793.0"/>
          <omgdi:waypoint x="915.0" y="793.0"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-28F76CC6-7AAF-4904-B67B-28D2783F4558" id="sid-28F76CC6-7AAF-4904-B67B-28D2783F4558_gui">
          <omgdi:waypoint x="965.0" y="753.0"/>
          <omgdi:waypoint x="965.0" y="655.0"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-483B73AD-47A0-4496-9EA0-D8195AA07CB1" id="sid-483B73AD-47A0-4496-9EA0-D8195AA07CB1_gui">
          <omgdi:waypoint x="580.0" y="793.4148471615721"/>
          <omgdi:waypoint x="625.0" y="793.2183406113537"/>
          <bpmndi:BPMNLabel labelStyle="sid-bcd54e80-a962-47df-af8a-fd92f47b567d">
             <omgdc:Bounds height="12.084096731959221" width="19.33791977193755" x="587.8315990173669" y="773.2960269624606"/>
          </bpmndi:BPMNLabel>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-D5F518F9-7374-444D-8417-A64CA534D655" id="sid-D5F518F9-7374-444D-8417-A64CA534D655_gui">
          <omgdi:waypoint x="560.5" y="813.0"/>
          <omgdi:waypoint x="560.5" y="898.0"/>
          <omgdi:waypoint x="625.0" y="898.0"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-E74BD453-3C8E-4F9D-8884-49023FD3DECA" id="sid-E74BD453-3C8E-4F9D-8884-49023FD3DECA_gui">
          <omgdi:waypoint x="725.0" y="898.0"/>
          <omgdi:waypoint x="765.0" y="898.0"/>
          <omgdi:waypoint x="765.0" y="655.0"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-0FC1258E-582C-41AD-A261-936CC3953539" id="sid-0FC1258E-582C-41AD-A261-936CC3953539_gui">
          <omgdi:waypoint x="475.5" y="620.0"/>
          <omgdi:waypoint x="475.5" y="485.0"/>
          <omgdi:waypoint x="660.0" y="485.0"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-5F26B527-7673-4870-BD49-A88D0D42C2B1" id="sid-5F26B527-7673-4870-BD49-A88D0D42C2B1_gui">
          <omgdi:waypoint x="495.0" y="640.4663212435233"/>
          <omgdi:waypoint x="750.0" y="640.0259067357513"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-0AB19B5B-E483-4468-8345-88A5F45C8447" id="sid-0AB19B5B-E483-4468-8345-88A5F45C8447_gui">
          <omgdi:waypoint x="385.0" y="588.6476868327402"/>
          <omgdi:waypoint x="455.0" y="628.7544483985765"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-3A0F69D6-E73A-4E94-BF42-D1789BAB898E" id="sid-3A0F69D6-E73A-4E94-BF42-D1789BAB898E_gui">
          <omgdi:waypoint x="690.0" y="485.0"/>
          <omgdi:waypoint x="735.0" y="485.0"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-FBD55589-4614-4F42-9C8F-0B39FA42B353" id="sid-FBD55589-4614-4F42-9C8F-0B39FA42B353_gui">
          <omgdi:waypoint x="785.0" y="445.0"/>
          <omgdi:waypoint x="785.0" y="390.0"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-4EF42E81-1567-4EEE-9ACB-DD82E1D32E34" id="sid-4EF42E81-1567-4EEE-9ACB-DD82E1D32E34_gui">
          <omgdi:waypoint x="965.0769230769231" y="625.0"/>
          <omgdi:waypoint x="965.4" y="562.0"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-AC6988FB-B8FF-4C16-83B8-DDA73EDCDD9B" id="sid-AC6988FB-B8FF-4C16-83B8-DDA73EDCDD9B_gui">
          <omgdi:waypoint x="765.0" y="625.0"/>
          <omgdi:waypoint x="765.0" y="542.5"/>
          <omgdi:waypoint x="945.0" y="542.5"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-BD66CF95-8B41-4EC0-9F66-AA36F6F4911F" id="sid-BD66CF95-8B41-4EC0-9F66-AA36F6F4911F_gui">
          <omgdi:waypoint x="985.0" y="542.5"/>
          <omgdi:waypoint x="1005.0" y="542.5"/>
          <omgdi:waypoint x="1005.0" y="560.0"/>
          <omgdi:waypoint x="1025.0" y="560.0"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-E7A2B990-202D-4A90-B98D-BB02E3F1A2F6" id="sid-E7A2B990-202D-4A90-B98D-BB02E3F1A2F6_gui">
          <omgdi:waypoint x="1075.0" y="520.0"/>
          <omgdi:waypoint x="1075.0" y="359.0"/>
          <omgdi:waypoint x="1025.0" y="359.0"/>
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge bpmnElement="sid-6DAE7594-FA31-4E06-A15A-95B5C38F00F2" id="sid-6DAE7594-FA31-4E06-A15A-95B5C38F00F2_gui">
          <omgdi:waypoint x="1125.0" y="560.0"/>
          <omgdi:waypoint x="1170.0" y="560.0"/>
       </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
    <bpmndi:BPMNLabelStyle id="sid-bcd54e80-a962-47df-af8a-fd92f47b567d">
       <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="11.0"/>
    </bpmndi:BPMNLabelStyle>
    <bpmndi:BPMNLabelStyle id="sid-86f3f3ab-65a7-4843-950d-dcaf62cd8b38">
       <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="12.0"/>
    </bpmndi:BPMNLabelStyle>
 </bpmndi:BPMNDiagram>
</definitions>`,
    restaurant: `<?xml version="1.0" encoding="UTF-8"?><definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:signavio="http://www.signavio.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" exporter="Signavio Process Editor, http://www.signavio.com" exporterVersion="9.3.2" expressionLanguage="http://www.w3.org/TR/XPath" id="sid-54eacbf3-8b5b-4d74-b5e4-086d8d6bcbd2" targetNamespace="http://www.signavio.com" typeLanguage="http://www.w3.org/2001/XMLSchema" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">
<collaboration id="sid-268a71f2-da43-44f5-99d8-12e8f795a6f8">
   <extensionElements>
      <signavio:signavioDiagramMetaData metaKey="revisionid" metaValue="f6a2e3a161b74cd0a5cce60c591bf1e8"/>
   </extensionElements>
   <participant id="sid-93110863-E0AC-4DC6-93E5-A96803DD7DE2" name="Guest" processRef="sid-D548EE60-9E50-4861-8199-FEE9AA5E33D4">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
      </extensionElements>
   </participant>
   <participant id="sid-BCF5DA03-A0F3-4221-B97B-98169020E2C5" name="Employee" processRef="sid-0B9C36ED-1AA6-4E4F-B796-40CD8DD51B5B">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
      </extensionElements>
   </participant>
   <participant id="sid-3844381E-5011-44AC-A61D-53BD66E350F5" name="Chef" processRef="sid-87A70D31-7155-4889-AA4E-662A249C6BDE">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
      </extensionElements>
   </participant>
   <messageFlow id="sid-741AFAA1-4ABF-4546-8D91-DAD982BC24DC" name="" sourceRef="sid-A0F2EC91-4799-4CF3-8ABB-862995400A2E" targetRef="sid-D47039A9-7A3C-4D9C-A60B-587DDCF54E5B"/>
   <messageFlow id="sid-0C6028E6-E8D3-4516-94C3-96BC430745B6" name="" sourceRef="sid-405B556B-BB7B-4F96-874C-216AA06F0C6A" targetRef="sid-76C54FBC-60B0-42DA-93F1-02B6EC62A0DA"/>
   <messageFlow id="sid-911E49BB-3067-4B4E-BA4D-EC7D6E97EF3C" name="" sourceRef="sid-EC36DE52-51A0-4EB6-9524-F576F263153E" targetRef="sid-08B49F57-2632-4510-8E28-340A45045E7B"/>
   <messageFlow id="sid-67BEB452-F697-427D-9162-AA64C5A55B49" name="" sourceRef="sid-3F82907C-95AA-4522-8DCB-0845D0885271" targetRef="sid-DCFD1E71-40AD-4A07-AB36-9A53AF5D5E4D"/>
   <messageFlow id="sid-360235C2-720E-437B-8DAD-47BDBABB2557" name="" sourceRef="sid-9E2D2E0E-5CD9-4446-B911-152C0F703D6E" targetRef="sid-9B3292FB-B4AC-4324-963F-8E35F1244FAE"/>
   <messageFlow id="sid-A1E993E7-5DF0-4094-820C-F4B286D738E2" name="" sourceRef="sid-2E5D283B-F8D8-40C8-A0FF-A0EA19314174" targetRef="sid-EEE9A912-4716-405E-A460-C83538AC55F0"/>
</collaboration>
<process id="sid-D548EE60-9E50-4861-8199-FEE9AA5E33D4" isClosed="false" isExecutable="false" name="Guest" processType="None">
   <extensionElements/>
   <laneSet id="sid-32c57435-dd79-446e-a5b6-c02e6c4eb5b5">
      <lane id="sid-E33C8496-0918-46E7-B18D-9BA01EB6E7D2">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
         </extensionElements>
         <flowNodeRef>sid-35D27D47-22D7-4124-B6C6-5801A7B3BD9B</flowNodeRef>
         <flowNodeRef>sid-5C9626C0-472D-4682-9787-0244D90B308B</flowNodeRef>
         <flowNodeRef>sid-18D14437-0433-4C5C-902D-486FD74D314A</flowNodeRef>
         <flowNodeRef>sid-A0F2EC91-4799-4CF3-8ABB-862995400A2E</flowNodeRef>
         <flowNodeRef>sid-76C54FBC-60B0-42DA-93F1-02B6EC62A0DA</flowNodeRef>
         <flowNodeRef>sid-42B866D8-A43F-45C1-9DD1-B857F3DDED6B</flowNodeRef>
         <flowNodeRef>sid-CFDE8060-D466-4899-9CC8-57C985FE578B</flowNodeRef>
         <flowNodeRef>sid-B0C977C2-971B-44AB-B220-689A0FBCE8CB</flowNodeRef>
         <flowNodeRef>sid-DCFD1E71-40AD-4A07-AB36-9A53AF5D5E4D</flowNodeRef>
         <flowNodeRef>sid-E657744D-632B-48E2-AF49-3B12A7AB1CA3</flowNodeRef>
         <flowNodeRef>sid-EEE9A912-4716-405E-A460-C83538AC55F0</flowNodeRef>
      </lane>
   </laneSet>
   <startEvent id="sid-35D27D47-22D7-4124-B6C6-5801A7B3BD9B" name="Feeling &#10;Hungry">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
      </extensionElements>
      <outgoing>sid-670953EA-195C-428C-8C84-54341553A648</outgoing>
   </startEvent>
   <task completionQuantity="1" id="sid-5C9626C0-472D-4682-9787-0244D90B308B" isForCompensation="false" name="Enter to the restourant" startQuantity="1">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
         <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
      </extensionElements>
      <incoming>sid-670953EA-195C-428C-8C84-54341553A648</incoming>
      <outgoing>sid-63F6D77B-6586-444A-89E6-57F7C04511F4</outgoing>
   </task>
   <task completionQuantity="1" id="sid-18D14437-0433-4C5C-902D-486FD74D314A" isForCompensation="false" name="Choose dish" startQuantity="1">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
         <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
      </extensionElements>
      <incoming>sid-63F6D77B-6586-444A-89E6-57F7C04511F4</incoming>
      <outgoing>sid-C2933564-51E5-43C7-8B20-0750549A9FDE</outgoing>
   </task>
   <task completionQuantity="1" id="sid-A0F2EC91-4799-4CF3-8ABB-862995400A2E" isForCompensation="false" name="place order" startQuantity="1">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
         <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
      </extensionElements>
      <incoming>sid-7436DA35-A95E-40D4-8BDA-064932763F30</incoming>
      <outgoing>sid-DF4F9D16-16B2-4525-9B98-F12E40249B4C</outgoing>
   </task>
   <task completionQuantity="1" id="sid-76C54FBC-60B0-42DA-93F1-02B6EC62A0DA" isForCompensation="false" name="pay the order" startQuantity="1">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
         <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
      </extensionElements>
      <incoming>sid-DF4F9D16-16B2-4525-9B98-F12E40249B4C</incoming>
      <outgoing>sid-02299AA6-6E71-42B5-A79B-68845EB700B7</outgoing>
   </task>
   <eventBasedGateway eventGatewayType="Exclusive" gatewayDirection="Unspecified" id="sid-42B866D8-A43F-45C1-9DD1-B857F3DDED6B" instantiate="false" name="wait until buzzer ring">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         <signavio:signavioLabel align="center" ref="text_name" valign="middle" x="28.0" y="62.0"/>
      </extensionElements>
      <incoming>sid-02299AA6-6E71-42B5-A79B-68845EB700B7</incoming>
      <outgoing>sid-8C01ABEA-1FEA-4B66-B75B-B99F28D91746</outgoing>
   </eventBasedGateway>
   <eventBasedGateway eventGatewayType="Exclusive" gatewayDirection="Unspecified" id="sid-CFDE8060-D466-4899-9CC8-57C985FE578B" instantiate="false" name="wait until turn">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
         <signavio:signavioLabel align="center" ref="text_name" valign="middle" x="28.0" y="64.0"/>
      </extensionElements>
      <incoming>sid-C2933564-51E5-43C7-8B20-0750549A9FDE</incoming>
      <outgoing>sid-7436DA35-A95E-40D4-8BDA-064932763F30</outgoing>
   </eventBasedGateway>
   <endEvent id="sid-B0C977C2-971B-44AB-B220-689A0FBCE8CB" name="Hunger stisfied">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
      </extensionElements>
      <incoming>sid-F80DE652-F93F-4DD1-AA10-B9E9B0588AA4</incoming>
   </endEvent>
   <task completionQuantity="1" id="sid-DCFD1E71-40AD-4A07-AB36-9A53AF5D5E4D" isForCompensation="false" name="Pick up the meal" startQuantity="1">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
         <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
      </extensionElements>
      <incoming>sid-8A3392BB-BB0A-4AA9-80C3-511EED717C85</incoming>
      <outgoing>sid-D5F1263E-610F-4641-85F1-66545EE0A5B3</outgoing>
   </task>
   <task completionQuantity="1" id="sid-E657744D-632B-48E2-AF49-3B12A7AB1CA3" isForCompensation="false" name="eat the meal" startQuantity="1">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
         <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
      </extensionElements>
      <incoming>sid-D5F1263E-610F-4641-85F1-66545EE0A5B3</incoming>
      <outgoing>sid-F80DE652-F93F-4DD1-AA10-B9E9B0588AA4</outgoing>
   </task>
   <startEvent id="sid-EEE9A912-4716-405E-A460-C83538AC55F0" isInterrupting="true" name="buzzer ring">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
      </extensionElements>
      <outgoing>sid-8A3392BB-BB0A-4AA9-80C3-511EED717C85</outgoing>
      <messageEventDefinition id="sid-aee9a1fb-c8f8-40dd-a0a5-f467206b6e89"/>
   </startEvent>
   <sequenceFlow id="sid-670953EA-195C-428C-8C84-54341553A648" name="" sourceRef="sid-35D27D47-22D7-4124-B6C6-5801A7B3BD9B" targetRef="sid-5C9626C0-472D-4682-9787-0244D90B308B"/>
   <sequenceFlow id="sid-63F6D77B-6586-444A-89E6-57F7C04511F4" name="" sourceRef="sid-5C9626C0-472D-4682-9787-0244D90B308B" targetRef="sid-18D14437-0433-4C5C-902D-486FD74D314A"/>
   <sequenceFlow id="sid-DF4F9D16-16B2-4525-9B98-F12E40249B4C" name="" sourceRef="sid-A0F2EC91-4799-4CF3-8ABB-862995400A2E" targetRef="sid-76C54FBC-60B0-42DA-93F1-02B6EC62A0DA"/>
   <sequenceFlow id="sid-C2933564-51E5-43C7-8B20-0750549A9FDE" name="" sourceRef="sid-18D14437-0433-4C5C-902D-486FD74D314A" targetRef="sid-CFDE8060-D466-4899-9CC8-57C985FE578B"/>
   <sequenceFlow id="sid-7436DA35-A95E-40D4-8BDA-064932763F30" name="" sourceRef="sid-CFDE8060-D466-4899-9CC8-57C985FE578B" targetRef="sid-A0F2EC91-4799-4CF3-8ABB-862995400A2E"/>
   <sequenceFlow id="sid-02299AA6-6E71-42B5-A79B-68845EB700B7" name="" sourceRef="sid-76C54FBC-60B0-42DA-93F1-02B6EC62A0DA" targetRef="sid-42B866D8-A43F-45C1-9DD1-B857F3DDED6B"/>
   <sequenceFlow id="sid-F80DE652-F93F-4DD1-AA10-B9E9B0588AA4" name="" sourceRef="sid-E657744D-632B-48E2-AF49-3B12A7AB1CA3" targetRef="sid-B0C977C2-971B-44AB-B220-689A0FBCE8CB"/>
   <sequenceFlow id="sid-D5F1263E-610F-4641-85F1-66545EE0A5B3" name="" sourceRef="sid-DCFD1E71-40AD-4A07-AB36-9A53AF5D5E4D" targetRef="sid-E657744D-632B-48E2-AF49-3B12A7AB1CA3"/>
   <sequenceFlow id="sid-8C01ABEA-1FEA-4B66-B75B-B99F28D91746" name="" sourceRef="sid-42B866D8-A43F-45C1-9DD1-B857F3DDED6B"/>
   <sequenceFlow id="sid-8A3392BB-BB0A-4AA9-80C3-511EED717C85" name="" sourceRef="sid-EEE9A912-4716-405E-A460-C83538AC55F0" targetRef="sid-DCFD1E71-40AD-4A07-AB36-9A53AF5D5E4D"/>
</process>
<process id="sid-0B9C36ED-1AA6-4E4F-B796-40CD8DD51B5B" isClosed="false" isExecutable="false" name="Employee" processType="None">
   <extensionElements/>
   <laneSet id="sid-0580e9b0-31c0-47a8-b6a3-81d4082ff6cb">
      <lane id="sid-16B91973-2FA8-43CE-9E31-A817E0CB87A3">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
         </extensionElements>
         <flowNodeRef>sid-D47039A9-7A3C-4D9C-A60B-587DDCF54E5B</flowNodeRef>
         <flowNodeRef>sid-EC36DE52-51A0-4EB6-9524-F576F263153E</flowNodeRef>
         <flowNodeRef>sid-405B556B-BB7B-4F96-874C-216AA06F0C6A</flowNodeRef>
         <flowNodeRef>sid-B9135A40-CAE1-47C9-9298-D8B0AD29BC5B</flowNodeRef>
         <flowNodeRef>sid-24C4F677-A543-4359-ABC9-CCD9F170D306</flowNodeRef>
         <flowNodeRef>sid-6B90A114-FD4B-4376-91ED-7B99BD06FEA4</flowNodeRef>
         <flowNodeRef>sid-9B3292FB-B4AC-4324-963F-8E35F1244FAE</flowNodeRef>
         <flowNodeRef>sid-2E5D283B-F8D8-40C8-A0FF-A0EA19314174</flowNodeRef>
         <flowNodeRef>sid-3F82907C-95AA-4522-8DCB-0845D0885271</flowNodeRef>
         <flowNodeRef>sid-0EE52866-93EC-42DE-90FB-22BEF014BC04</flowNodeRef>
         <flowNodeRef>sid-EE755406-0C39-4164-9878-8232BDEE88B0</flowNodeRef>
         <flowNodeRef>sid-C3A26B52-40A8-4CB0-A2B5-00C000957DB4</flowNodeRef>
         <flowNodeRef>sid-6CC40E2E-2C71-4083-AB38-A494F68B451E</flowNodeRef>
         <flowNodeRef>sid-CF8D0533-9542-4DCA-901D-2723F15E2FD3</flowNodeRef>
      </lane>
   </laneSet>
   <startEvent id="sid-D47039A9-7A3C-4D9C-A60B-587DDCF54E5B" isInterrupting="true" name="Receive order">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
      </extensionElements>
      <outgoing>sid-82482E2F-A01F-415A-8C56-F66DC8A19862</outgoing>
      <messageEventDefinition id="sid-59a1e14b-75a9-4403-9a03-b397c36b8c01"/>
   </startEvent>
   <task completionQuantity="1" id="sid-EC36DE52-51A0-4EB6-9524-F576F263153E" isForCompensation="false" name="enter the order into system" startQuantity="1">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
         <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
      </extensionElements>
      <incoming>sid-82482E2F-A01F-415A-8C56-F66DC8A19862</incoming>
      <outgoing>sid-54427C58-9FA8-4EBB-A29D-AA4F98B19FDD</outgoing>
   </task>
   <task completionQuantity="1" id="sid-405B556B-BB7B-4F96-874C-216AA06F0C6A" isForCompensation="false" name="Collect the money" startQuantity="1">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
         <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
      </extensionElements>
      <incoming>sid-54427C58-9FA8-4EBB-A29D-AA4F98B19FDD</incoming>
      <outgoing>sid-A050D6BB-DA56-47EA-945C-77A088C31864</outgoing>
   </task>
   <task completionQuantity="1" id="sid-B9135A40-CAE1-47C9-9298-D8B0AD29BC5B" isForCompensation="false" name="set up the buzzer" startQuantity="1">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
         <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
      </extensionElements>
      <incoming>sid-A050D6BB-DA56-47EA-945C-77A088C31864</incoming>
      <outgoing>sid-2C31ADE0-BF28-4279-B3C4-85A300E36054</outgoing>
   </task>
   <endEvent id="sid-24C4F677-A543-4359-ABC9-CCD9F170D306" name="">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
      </extensionElements>
      <incoming>sid-F1B54903-C53A-4DBA-B0C3-6A1310D06DD5</incoming>
   </endEvent>
   <eventBasedGateway eventGatewayType="Exclusive" gatewayDirection="Unspecified" id="sid-6B90A114-FD4B-4376-91ED-7B99BD06FEA4" instantiate="false" name="">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
      </extensionElements>
      <incoming>sid-2C31ADE0-BF28-4279-B3C4-85A300E36054</incoming>
      <outgoing>sid-C2C0EB18-2755-4541-B794-C7265F720FC6</outgoing>
   </eventBasedGateway>
   <task completionQuantity="1" id="sid-9B3292FB-B4AC-4324-963F-8E35F1244FAE" isForCompensation="false" name="the order finished an placed in the hatch" startQuantity="1">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
         <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
      </extensionElements>
      <incoming>sid-C2C0EB18-2755-4541-B794-C7265F720FC6</incoming>
      <outgoing>sid-EB233E5B-4F0D-4059-856C-47F3C5C94321</outgoing>
   </task>
   <task completionQuantity="1" id="sid-2E5D283B-F8D8-40C8-A0FF-A0EA19314174" isForCompensation="false" name="set off the buzzer" startQuantity="1">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
         <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
      </extensionElements>
      <incoming>sid-EB233E5B-4F0D-4059-856C-47F3C5C94321</incoming>
      <outgoing>sid-ECE51826-E905-4DCE-BE8B-A096AEE4F463</outgoing>
   </task>
   <task completionQuantity="1" id="sid-3F82907C-95AA-4522-8DCB-0845D0885271" isForCompensation="false" name="hand over the meal" startQuantity="1">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
         <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
      </extensionElements>
      <incoming>sid-8BB31721-B58F-4823-88C5-893F6B391FE5</incoming>
      <outgoing>sid-F1B54903-C53A-4DBA-B0C3-6A1310D06DD5</outgoing>
   </task>
   <eventBasedGateway eventGatewayType="Exclusive" gatewayDirection="Diverging" id="sid-0EE52866-93EC-42DE-90FB-22BEF014BC04" instantiate="false" name="">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
      </extensionElements>
      <incoming>sid-ECE51826-E905-4DCE-BE8B-A096AEE4F463</incoming>
      <outgoing>sid-08690653-69BC-486F-B78F-3738D0661376</outgoing>
      <outgoing>sid-6BBDB156-92C5-44E4-BB62-CC1836F695CE</outgoing>
   </eventBasedGateway>
   <task completionQuantity="1" id="sid-EE755406-0C39-4164-9878-8232BDEE88B0" isForCompensation="false" name="Call guest" startQuantity="1">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
         <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
      </extensionElements>
      <incoming>sid-64911385-B55A-48A1-9F40-5F2157233D1E</incoming>
      <outgoing>sid-C415142C-50D8-4AD2-8ADD-07416D17CCEE</outgoing>
   </task>
   <task completionQuantity="1" id="sid-C3A26B52-40A8-4CB0-A2B5-00C000957DB4" isForCompensation="false" name="Guest appear in service hatch" startQuantity="1">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
         <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
      </extensionElements>
      <incoming>sid-08690653-69BC-486F-B78F-3738D0661376</incoming>
      <incoming>sid-5B03B331-51A6-4423-9A5E-8F5EDFB682AB</incoming>
      <outgoing>sid-8BB31721-B58F-4823-88C5-893F6B391FE5</outgoing>
   </task>
   <startEvent id="sid-6CC40E2E-2C71-4083-AB38-A494F68B451E" isInterrupting="true" name="wait 5 minutes guest appears">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
      </extensionElements>
      <outgoing>sid-64911385-B55A-48A1-9F40-5F2157233D1E</outgoing>
      <timerEventDefinition id="sid-4783483c-0b3d-45eb-92b9-f3508ff9715d"/>
   </startEvent>
   <eventBasedGateway eventGatewayType="Exclusive" gatewayDirection="Unspecified" id="sid-CF8D0533-9542-4DCA-901D-2723F15E2FD3" instantiate="false" name="">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
      </extensionElements>
      <outgoing>sid-5B03B331-51A6-4423-9A5E-8F5EDFB682AB</outgoing>
   </eventBasedGateway>
   <sequenceFlow id="sid-82482E2F-A01F-415A-8C56-F66DC8A19862" name="" sourceRef="sid-D47039A9-7A3C-4D9C-A60B-587DDCF54E5B" targetRef="sid-EC36DE52-51A0-4EB6-9524-F576F263153E"/>
   <sequenceFlow id="sid-54427C58-9FA8-4EBB-A29D-AA4F98B19FDD" name="" sourceRef="sid-EC36DE52-51A0-4EB6-9524-F576F263153E" targetRef="sid-405B556B-BB7B-4F96-874C-216AA06F0C6A"/>
   <sequenceFlow id="sid-A050D6BB-DA56-47EA-945C-77A088C31864" name="" sourceRef="sid-405B556B-BB7B-4F96-874C-216AA06F0C6A" targetRef="sid-B9135A40-CAE1-47C9-9298-D8B0AD29BC5B"/>
   <sequenceFlow id="sid-2C31ADE0-BF28-4279-B3C4-85A300E36054" name="" sourceRef="sid-B9135A40-CAE1-47C9-9298-D8B0AD29BC5B" targetRef="sid-6B90A114-FD4B-4376-91ED-7B99BD06FEA4"/>
   <sequenceFlow id="sid-C2C0EB18-2755-4541-B794-C7265F720FC6" name="" sourceRef="sid-6B90A114-FD4B-4376-91ED-7B99BD06FEA4" targetRef="sid-9B3292FB-B4AC-4324-963F-8E35F1244FAE"/>
   <sequenceFlow id="sid-EB233E5B-4F0D-4059-856C-47F3C5C94321" name="" sourceRef="sid-9B3292FB-B4AC-4324-963F-8E35F1244FAE" targetRef="sid-2E5D283B-F8D8-40C8-A0FF-A0EA19314174"/>
   <sequenceFlow id="sid-F1B54903-C53A-4DBA-B0C3-6A1310D06DD5" name="" sourceRef="sid-3F82907C-95AA-4522-8DCB-0845D0885271" targetRef="sid-24C4F677-A543-4359-ABC9-CCD9F170D306"/>
   <sequenceFlow id="sid-ECE51826-E905-4DCE-BE8B-A096AEE4F463" name="" sourceRef="sid-2E5D283B-F8D8-40C8-A0FF-A0EA19314174" targetRef="sid-0EE52866-93EC-42DE-90FB-22BEF014BC04"/>
   <sequenceFlow id="sid-08690653-69BC-486F-B78F-3738D0661376" name="" sourceRef="sid-0EE52866-93EC-42DE-90FB-22BEF014BC04" targetRef="sid-C3A26B52-40A8-4CB0-A2B5-00C000957DB4"/>
   <sequenceFlow id="sid-6BBDB156-92C5-44E4-BB62-CC1836F695CE" name="" sourceRef="sid-0EE52866-93EC-42DE-90FB-22BEF014BC04"/>
   <sequenceFlow id="sid-64911385-B55A-48A1-9F40-5F2157233D1E" name="" sourceRef="sid-6CC40E2E-2C71-4083-AB38-A494F68B451E" targetRef="sid-EE755406-0C39-4164-9878-8232BDEE88B0"/>
   <sequenceFlow id="sid-C415142C-50D8-4AD2-8ADD-07416D17CCEE" name="" sourceRef="sid-EE755406-0C39-4164-9878-8232BDEE88B0"/>
   <sequenceFlow id="sid-8BB31721-B58F-4823-88C5-893F6B391FE5" name="" sourceRef="sid-C3A26B52-40A8-4CB0-A2B5-00C000957DB4" targetRef="sid-3F82907C-95AA-4522-8DCB-0845D0885271"/>
   <sequenceFlow id="sid-5B03B331-51A6-4423-9A5E-8F5EDFB682AB" name="" sourceRef="sid-CF8D0533-9542-4DCA-901D-2723F15E2FD3" targetRef="sid-C3A26B52-40A8-4CB0-A2B5-00C000957DB4"/>
</process>
<process id="sid-87A70D31-7155-4889-AA4E-662A249C6BDE" isClosed="false" isExecutable="false" name="Chef" processType="None">
   <extensionElements/>
   <laneSet id="sid-b3681c62-e4bd-45e4-842e-f6f3e25ad7e2">
      <lane id="sid-ABB3FFB8-6C9A-4106-B8F6-CB3D3F9DDC83">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
         </extensionElements>
         <flowNodeRef>sid-08B49F57-2632-4510-8E28-340A45045E7B</flowNodeRef>
         <flowNodeRef>sid-52DDFB66-E027-4BD5-BF5B-F9D99887E67D</flowNodeRef>
         <flowNodeRef>sid-1FC08439-9ECA-4B95-8742-BF4BD4C5FE6D</flowNodeRef>
         <flowNodeRef>sid-EF20A86D-B71A-4929-A745-EB3311A6FD99</flowNodeRef>
         <flowNodeRef>sid-9E2D2E0E-5CD9-4446-B911-152C0F703D6E</flowNodeRef>
      </lane>
   </laneSet>
   <startEvent id="sid-08B49F57-2632-4510-8E28-340A45045E7B" isInterrupting="true" name="Order new meal">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
      </extensionElements>
      <outgoing>sid-43DFB743-A83A-4101-9707-785D6EAE7FC9</outgoing>
      <messageEventDefinition id="sid-0a74767b-d8aa-4a47-885e-676872ce4134"/>
   </startEvent>
   <task completionQuantity="1" id="sid-52DDFB66-E027-4BD5-BF5B-F9D99887E67D" isForCompensation="false" name="Prepare the meal" startQuantity="1">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
         <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
      </extensionElements>
      <incoming>sid-43DFB743-A83A-4101-9707-785D6EAE7FC9</incoming>
      <outgoing>sid-CE002FC3-BD83-40CE-8752-948F4A3EAAEF</outgoing>
   </task>
   <task completionQuantity="1" id="sid-1FC08439-9ECA-4B95-8742-BF4BD4C5FE6D" isForCompensation="false" name="serve in service hatch" startQuantity="1">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
         <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
      </extensionElements>
      <incoming>sid-CE002FC3-BD83-40CE-8752-948F4A3EAAEF</incoming>
      <outgoing>sid-F8CF3F38-416B-419D-99D0-D65C6DE75D3F</outgoing>
   </task>
   <endEvent id="sid-EF20A86D-B71A-4929-A745-EB3311A6FD99" name="">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
      </extensionElements>
      <incoming>sid-10B8C8C9-0EE2-45A8-9647-B0545F684C5A</incoming>
   </endEvent>
   <task completionQuantity="1" id="sid-9E2D2E0E-5CD9-4446-B911-152C0F703D6E" isForCompensation="false" name="inform that meal is ready" startQuantity="1">
      <extensionElements>
         <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffcc"/>
         <signavio:signavioMetaData metaKey="userstory" metaValue=""/>
      </extensionElements>
      <incoming>sid-F8CF3F38-416B-419D-99D0-D65C6DE75D3F</incoming>
      <outgoing>sid-10B8C8C9-0EE2-45A8-9647-B0545F684C5A</outgoing>
   </task>
   <sequenceFlow id="sid-43DFB743-A83A-4101-9707-785D6EAE7FC9" name="" sourceRef="sid-08B49F57-2632-4510-8E28-340A45045E7B" targetRef="sid-52DDFB66-E027-4BD5-BF5B-F9D99887E67D"/>
   <sequenceFlow id="sid-CE002FC3-BD83-40CE-8752-948F4A3EAAEF" name="" sourceRef="sid-52DDFB66-E027-4BD5-BF5B-F9D99887E67D" targetRef="sid-1FC08439-9ECA-4B95-8742-BF4BD4C5FE6D"/>
   <sequenceFlow id="sid-F8CF3F38-416B-419D-99D0-D65C6DE75D3F" name="" sourceRef="sid-1FC08439-9ECA-4B95-8742-BF4BD4C5FE6D" targetRef="sid-9E2D2E0E-5CD9-4446-B911-152C0F703D6E"/>
   <sequenceFlow id="sid-10B8C8C9-0EE2-45A8-9647-B0545F684C5A" name="" sourceRef="sid-9E2D2E0E-5CD9-4446-B911-152C0F703D6E" targetRef="sid-EF20A86D-B71A-4929-A745-EB3311A6FD99"/>
</process>
<bpmndi:BPMNDiagram id="sid-116bcede-7e67-4a7f-83e6-94f1a6e05438">
   <bpmndi:BPMNPlane bpmnElement="sid-268a71f2-da43-44f5-99d8-12e8f795a6f8" id="sid-338a73a7-c5b2-4d9e-8e26-007a599d960a">
      <bpmndi:BPMNShape bpmnElement="sid-93110863-E0AC-4DC6-93E5-A96803DD7DE2" id="sid-93110863-E0AC-4DC6-93E5-A96803DD7DE2_gui" isHorizontal="true">
         <omgdc:Bounds height="227.0" width="1515.1143650374331" x="15.0" y="45.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="32.400001525878906" width="12.000000000000004" x="19.999999999999996" y="142.29999923706055"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-BCF5DA03-A0F3-4221-B97B-98169020E2C5" id="sid-BCF5DA03-A0F3-4221-B97B-98169020E2C5_gui" isHorizontal="true">
         <omgdc:Bounds height="277.3786704099159" width="1515.1143650374331" x="15.0" y="285.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="51.68571472167969" width="12.000000000000007" x="19.99966015637016" y="397.8464778441181"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-3844381E-5011-44AC-A61D-53BD66E350F5" id="sid-3844381E-5011-44AC-A61D-53BD66E350F5_gui" isHorizontal="true">
         <omgdc:Bounds height="250.0" width="640.0267830148647" x="18.149999697089243" y="582.6499906097652"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="24.685714721679688" width="12.000000000000007" x="23.149999697089243" y="695.3071332489253"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-E33C8496-0918-46E7-B18D-9BA01EB6E7D2" id="sid-E33C8496-0918-46E7-B18D-9BA01EB6E7D2_gui" isHorizontal="true">
         <omgdc:Bounds height="227.0" width="1485.1143650374331" x="45.0" y="45.0"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-35D27D47-22D7-4124-B6C6-5801A7B3BD9B" id="sid-35D27D47-22D7-4124-B6C6-5801A7B3BD9B_gui">
         <omgdc:Bounds height="30.0" width="30.0" x="72.59999878835681" y="144.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-503a16cd-f4f3-4f4d-be3f-05bb43e4370a">
            <omgdc:Bounds height="22.0" width="36.06428527832031" x="69.56785614919666" y="176.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-5C9626C0-472D-4682-9787-0244D90B308B" id="sid-5C9626C0-472D-4682-9787-0244D90B308B_gui">
         <omgdc:Bounds height="80.0" width="100.0" x="147.5999987883568" y="119.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="24.0" width="66.34285736083984" x="164.42857010793688" y="145.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-18D14437-0433-4C5C-902D-486FD74D314A" id="sid-18D14437-0433-4C5C-902D-486FD74D314A_gui">
         <omgdc:Bounds height="80.0" width="100.0" x="292.5999987883568" y="119.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="12.0" width="67.11428833007812" x="309.04285462331774" y="151.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-A0F2EC91-4799-4CF3-8ABB-862995400A2E" id="sid-A0F2EC91-4799-4CF3-8ABB-862995400A2E_gui">
         <omgdc:Bounds height="80.0" width="100.0" x="528.7499924272299" y="119.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="12.0" width="60.17143249511719" x="548.6642761796713" y="151.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-76C54FBC-60B0-42DA-93F1-02B6EC62A0DA" id="sid-76C54FBC-60B0-42DA-93F1-02B6EC62A0DA_gui">
         <omgdc:Bounds height="80.0" width="100.0" x="673.7499924272299" y="119.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="12.0" width="74.05714416503906" x="686.7214203447104" y="151.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-42B866D8-A43F-45C1-9DD1-B857F3DDED6B" id="sid-42B866D8-A43F-45C1-9DD1-B857F3DDED6B_gui">
         <omgdc:Bounds height="40.0" width="40.0" x="856.0" y="139.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-503a16cd-f4f3-4f4d-be3f-05bb43e4370a">
            <omgdc:Bounds height="12.0" width="114.17141723632812" x="826.9142913818359" y="193.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-CFDE8060-D466-4899-9CC8-57C985FE578B" id="sid-CFDE8060-D466-4899-9CC8-57C985FE578B_gui">
         <omgdc:Bounds height="40.0" width="40.0" x="455.5999927301408" y="139.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-503a16cd-f4f3-4f4d-be3f-05bb43e4370a">
            <omgdc:Bounds height="12.0" width="75.5999984741211" x="445.79999349308025" y="195.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-B0C977C2-971B-44AB-B220-689A0FBCE8CB" id="sid-B0C977C2-971B-44AB-B220-689A0FBCE8CB_gui">
         <omgdc:Bounds height="28.0" width="28.0" x="1364.9499778875115" y="145.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-503a16cd-f4f3-4f4d-be3f-05bb43e4370a">
            <omgdc:Bounds height="11.0" width="74.95714569091797" x="1341.4714050420525" y="175.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-DCFD1E71-40AD-4A07-AB36-9A53AF5D5E4D" id="sid-DCFD1E71-40AD-4A07-AB36-9A53AF5D5E4D_gui">
         <omgdc:Bounds height="80.0" width="100.0" x="1043.0499857631926" y="119.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="12.0" width="87.94285583496094" x="1049.078557845712" y="151.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-E657744D-632B-48E2-AF49-3B12A7AB1CA3" id="sid-E657744D-632B-48E2-AF49-3B12A7AB1CA3_gui">
         <omgdc:Bounds height="80.0" width="100.0" x="1203.4499809166196" y="119.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="12.0" width="67.11428833007812" x="1219.8928367515805" y="151.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-EEE9A912-4716-405E-A460-C83538AC55F0" id="sid-EEE9A912-4716-405E-A460-C83538AC55F0_gui">
         <omgdc:Bounds height="30.0" width="30.0" x="942.1483641059308" y="144.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-503a16cd-f4f3-4f4d-be3f-05bb43e4370a">
            <omgdc:Bounds height="11.0" width="56.57142639160156" x="928.86265091013" y="176.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-16B91973-2FA8-43CE-9E31-A817E0CB87A3" id="sid-16B91973-2FA8-43CE-9E31-A817E0CB87A3_gui" isHorizontal="true">
         <omgdc:Bounds height="277.3786704099159" width="1485.1143650374331" x="45.0" y="285.0"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-D47039A9-7A3C-4D9C-A60B-587DDCF54E5B" id="sid-D47039A9-7A3C-4D9C-A60B-587DDCF54E5B_gui">
         <omgdc:Bounds height="30.0" width="30.0" x="72.5999987883568" y="395.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-503a16cd-f4f3-4f4d-be3f-05bb43e4370a">
            <omgdc:Bounds height="11.0" width="67.17857360839844" x="54.01071198415758" y="427.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-EC36DE52-51A0-4EB6-9524-F576F263153E" id="sid-EC36DE52-51A0-4EB6-9524-F576F263153E_gui">
         <omgdc:Bounds height="80.0" width="100.0" x="147.5999987883568" y="370.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="24.0" width="83.31428527832031" x="155.94285614919664" y="396.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-405B556B-BB7B-4F96-874C-216AA06F0C6A" id="sid-405B556B-BB7B-4F96-874C-216AA06F0C6A_gui">
         <omgdc:Bounds height="80.0" width="100.0" x="292.5999987883568" y="370.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="24.0" width="57.08570861816406" x="314.05714447927477" y="396.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-B9135A40-CAE1-47C9-9298-D8B0AD29BC5B" id="sid-B9135A40-CAE1-47C9-9298-D8B0AD29BC5B_gui">
         <omgdc:Bounds height="80.0" width="100.0" x="437.5999987883568" y="370.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="24.0" width="56.314285278320256" x="459.44285614919664" y="396.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-24C4F677-A543-4359-ABC9-CCD9F170D306" id="sid-24C4F677-A543-4359-ABC9-CCD9F170D306_gui">
         <omgdc:Bounds height="28.0" width="28.0" x="1484.9499778875115" y="396.0"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-6B90A114-FD4B-4376-91ED-7B99BD06FEA4" id="sid-6B90A114-FD4B-4376-91ED-7B99BD06FEA4_gui">
         <omgdc:Bounds height="40.0" width="40.0" x="596.0" y="390.0"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-9B3292FB-B4AC-4324-963F-8E35F1244FAE" id="sid-9B3292FB-B4AC-4324-963F-8E35F1244FAE_gui">
         <omgdc:Bounds height="80.0" width="100.0" x="681.0" y="370.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="48.0" width="68.65714263916016" x="696.6714286804199" y="384.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-2E5D283B-F8D8-40C8-A0FF-A0EA19314174" id="sid-2E5D283B-F8D8-40C8-A0FF-A0EA19314174_gui">
         <omgdc:Bounds height="80.0" width="100.0" x="826.0" y="370.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="24.0" width="57.08570861816406" x="847.457145690918" y="396.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-3F82907C-95AA-4522-8DCB-0845D0885271" id="sid-3F82907C-95AA-4522-8DCB-0845D0885271_gui">
         <omgdc:Bounds height="80.0" width="100.0" x="1356.0499797049765" y="370.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="24.0" width="76.37142944335938" x="1367.8642649832968" y="396.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-0EE52866-93EC-42DE-90FB-22BEF014BC04" id="sid-0EE52866-93EC-42DE-90FB-22BEF014BC04_gui">
         <omgdc:Bounds height="40.0" width="40.0" x="961.9499839457276" y="390.0"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-EE755406-0C39-4164-9878-8232BDEE88B0" id="sid-EE755406-0C39-4164-9878-8232BDEE88B0_gui">
         <omgdc:Bounds height="80.0" width="100.0" x="1191.9499839457276" y="370.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="12.0" width="53.22857666015625" x="1215.3356956156495" y="402.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-C3A26B52-40A8-4CB0-A2B5-00C000957DB4" id="sid-C3A26B52-40A8-4CB0-A2B5-00C000957DB4_gui">
         <omgdc:Bounds height="80.0" width="100.0" x="1055.1199823907855" y="458.5899923464538"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="24.0" width="86.39999389648438" x="1061.9199854425433" y="484.5899923464538"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-6CC40E2E-2C71-4083-AB38-A494F68B451E" id="sid-6CC40E2E-2C71-4083-AB38-A494F68B451E_gui">
         <omgdc:Bounds height="30.0" width="30.0" x="1078.0499857631926" y="395.0"/>
         <bpmndi:BPMNLabel labelStyle="sid-503a16cd-f4f3-4f4d-be3f-05bb43e4370a">
            <omgdc:Bounds height="11.0" width="147.79286193847656" x="1019.1535547939543" y="427.0"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-CF8D0533-9542-4DCA-901D-2723F15E2FD3" id="sid-CF8D0533-9542-4DCA-901D-2723F15E2FD3_gui">
         <omgdc:Bounds height="40.0" width="40.0" x="1221.9499839457276" y="478.58999234645387"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-ABB3FFB8-6C9A-4106-B8F6-CB3D3F9DDC83" id="sid-ABB3FFB8-6C9A-4106-B8F6-CB3D3F9DDC83_gui" isHorizontal="true">
         <omgdc:Bounds height="250.0" width="610.0267830148647" x="48.14999969708924" y="582.6499906097652"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-08B49F57-2632-4510-8E28-340A45045E7B" id="sid-08B49F57-2632-4510-8E28-340A45045E7B_gui">
         <omgdc:Bounds height="30.0" width="30.0" x="90.749998485446" y="692.6499906097652"/>
         <bpmndi:BPMNLabel labelStyle="sid-503a16cd-f4f3-4f4d-be3f-05bb43e4370a">
            <omgdc:Bounds height="11.0" width="77.78571319580077" x="66.85714188754561" y="724.6499906097652"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-52DDFB66-E027-4BD5-BF5B-F9D99887E67D" id="sid-52DDFB66-E027-4BD5-BF5B-F9D99887E67D_gui">
         <omgdc:Bounds height="80.0" width="100.0" x="165.74999848544599" y="667.6499906097652"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="12.0" width="91.028564453125" x="170.23571625888349" y="699.6499906097652"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-1FC08439-9ECA-4B95-8742-BF4BD4C5FE6D" id="sid-1FC08439-9ECA-4B95-8742-BF4BD4C5FE6D_gui">
         <omgdc:Bounds height="80.0" width="100.0" x="310.749998485446" y="667.6499906097652"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="24.0" width="83.31428527832031" x="319.09285584628583" y="693.6499906097652"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-EF20A86D-B71A-4929-A745-EB3311A6FD99" id="sid-EF20A86D-B71A-4929-A745-EB3311A6FD99_gui">
         <omgdc:Bounds height="28.0" width="28.0" x="602.0" y="693.6499906097652"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-9E2D2E0E-5CD9-4446-B911-152C0F703D6E" id="sid-9E2D2E0E-5CD9-4446-B911-152C0F703D6E_gui">
         <omgdc:Bounds height="80.0" width="100.0" x="437.5999987883568" y="667.6499906097652"/>
         <bpmndi:BPMNLabel labelStyle="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
            <omgdc:Bounds height="24.0" width="89.48571777343744" x="442.85713990163805" y="693.6499906097652"/>
         </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge bpmnElement="sid-670953EA-195C-428C-8C84-54341553A648" id="sid-670953EA-195C-428C-8C84-54341553A648_gui">
         <omgdi:waypoint x="102.59999878835681" y="159.0"/>
         <omgdi:waypoint x="147.5999987883568" y="159.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-63F6D77B-6586-444A-89E6-57F7C04511F4" id="sid-63F6D77B-6586-444A-89E6-57F7C04511F4_gui">
         <omgdi:waypoint x="247.5999987883568" y="159.0"/>
         <omgdi:waypoint x="292.5999987883568" y="159.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-741AFAA1-4ABF-4546-8D91-DAD982BC24DC" id="sid-741AFAA1-4ABF-4546-8D91-DAD982BC24DC_gui">
         <omgdi:waypoint x="578.7499924272299" y="199.0"/>
         <omgdi:waypoint x="578.7499924272299" y="245.6299831949471"/>
         <omgdi:waypoint x="87.5999987883568" y="245.6299831949471"/>
         <omgdi:waypoint x="87.5999987883568" y="395.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-82482E2F-A01F-415A-8C56-F66DC8A19862" id="sid-82482E2F-A01F-415A-8C56-F66DC8A19862_gui">
         <omgdi:waypoint x="102.5999987883568" y="410.0"/>
         <omgdi:waypoint x="147.5999987883568" y="410.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-54427C58-9FA8-4EBB-A29D-AA4F98B19FDD" id="sid-54427C58-9FA8-4EBB-A29D-AA4F98B19FDD_gui">
         <omgdi:waypoint x="247.5999987883568" y="410.0"/>
         <omgdi:waypoint x="292.5999987883568" y="410.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-DF4F9D16-16B2-4525-9B98-F12E40249B4C" id="sid-DF4F9D16-16B2-4525-9B98-F12E40249B4C_gui">
         <omgdi:waypoint x="628.7499924272299" y="159.0"/>
         <omgdi:waypoint x="673.7499924272299" y="159.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-A050D6BB-DA56-47EA-945C-77A088C31864" id="sid-A050D6BB-DA56-47EA-945C-77A088C31864_gui">
         <omgdi:waypoint x="392.5999987883568" y="410.0"/>
         <omgdi:waypoint x="437.5999987883568" y="410.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-C2933564-51E5-43C7-8B20-0750549A9FDE" id="sid-C2933564-51E5-43C7-8B20-0750549A9FDE_gui">
         <omgdi:waypoint x="392.5999987883568" y="159.1872659261011"/>
         <omgdi:waypoint x="455.5999927301408" y="159.42322097029856"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-7436DA35-A95E-40D4-8BDA-064932763F30" id="sid-7436DA35-A95E-40D4-8BDA-064932763F30_gui">
         <omgdi:waypoint x="495.5999927301408" y="159.40501704794184"/>
         <omgdi:waypoint x="528.7499924272299" y="159.2435460309184"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-02299AA6-6E71-42B5-A79B-68845EB700B7" id="sid-02299AA6-6E71-42B5-A79B-68845EB700B7_gui">
         <omgdi:waypoint x="773.7499924272299" y="159.16366611299898"/>
         <omgdi:waypoint x="856.0" y="159.43289689367043"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-F80DE652-F93F-4DD1-AA10-B9E9B0588AA4" id="sid-F80DE652-F93F-4DD1-AA10-B9E9B0588AA4_gui">
         <omgdi:waypoint x="1303.4499809166196" y="159.0"/>
         <omgdi:waypoint x="1364.9499778875115" y="159.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-0C6028E6-E8D3-4516-94C3-96BC430745B6" id="sid-0C6028E6-E8D3-4516-94C3-96BC430745B6_gui">
         <omgdi:waypoint x="342.5999987883568" y="370.0"/>
         <omgdi:waypoint x="342.59999878835674" y="312.17998208427434"/>
         <omgdi:waypoint x="706.9737273178428" y="312.17998208427434"/>
         <omgdi:waypoint x="706.9737273178428" y="199.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-911E49BB-3067-4B4E-BA4D-EC7D6E97EF3C" id="sid-911E49BB-3067-4B4E-BA4D-EC7D6E97EF3C_gui">
         <omgdi:waypoint x="197.5999987883568" y="450.0"/>
         <omgdi:waypoint x="197.5999987883568" y="509.4099937753201"/>
         <omgdi:waypoint x="105.749998485446" y="509.40999377532006"/>
         <omgdi:waypoint x="105.749998485446" y="692.6499906097652"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-43DFB743-A83A-4101-9707-785D6EAE7FC9" id="sid-43DFB743-A83A-4101-9707-785D6EAE7FC9_gui">
         <omgdi:waypoint x="120.749998485446" y="707.6499906097652"/>
         <omgdi:waypoint x="165.74999848544599" y="707.6499906097652"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-CE002FC3-BD83-40CE-8752-948F4A3EAAEF" id="sid-CE002FC3-BD83-40CE-8752-948F4A3EAAEF_gui">
         <omgdi:waypoint x="265.749998485446" y="707.6499906097652"/>
         <omgdi:waypoint x="310.749998485446" y="707.6499906097652"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-2C31ADE0-BF28-4279-B3C4-85A300E36054" id="sid-2C31ADE0-BF28-4279-B3C4-85A300E36054_gui">
         <omgdi:waypoint x="537.5999987883567" y="410.6816236527897"/>
         <omgdi:waypoint x="596.0" y="411.4777600957658"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-C2C0EB18-2755-4541-B794-C7265F720FC6" id="sid-C2C0EB18-2755-4541-B794-C7265F720FC6_gui">
         <omgdi:waypoint x="636.0" y="410.414847161572"/>
         <omgdi:waypoint x="681.0" y="410.2183406113537"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-EB233E5B-4F0D-4059-856C-47F3C5C94321" id="sid-EB233E5B-4F0D-4059-856C-47F3C5C94321_gui">
         <omgdi:waypoint x="781.0" y="410.0"/>
         <omgdi:waypoint x="826.0" y="410.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-F1B54903-C53A-4DBA-B0C3-6A1310D06DD5" id="sid-F1B54903-C53A-4DBA-B0C3-6A1310D06DD5_gui">
         <omgdi:waypoint x="1456.0499797049765" y="410.0"/>
         <omgdi:waypoint x="1484.9499778875115" y="410.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-ECE51826-E905-4DCE-BE8B-A096AEE4F463" id="sid-ECE51826-E905-4DCE-BE8B-A096AEE4F463_gui">
         <omgdi:waypoint x="926.0" y="410.234852078632"/>
         <omgdi:waypoint x="961.9499839457276" y="410.4037106477609"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-08690653-69BC-486F-B78F-3738D0661376" id="sid-08690653-69BC-486F-B78F-3738D0661376_gui">
         <omgdi:waypoint x="982.4499839457276" y="430.0"/>
         <omgdi:waypoint x="982.4499839457276" y="498.5899923464538"/>
         <omgdi:waypoint x="1055.1199823907855" y="498.5899923464538"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-67BEB452-F697-427D-9162-AA64C5A55B49" id="sid-67BEB452-F697-427D-9162-AA64C5A55B49_gui">
         <omgdi:waypoint x="1406.0499797049765" y="370.0"/>
         <omgdi:waypoint x="1406.0499797049765" y="320.4914986209984"/>
         <omgdi:waypoint x="1093.0499857631926" y="320.4914986209984"/>
         <omgdi:waypoint x="1093.0499857631926" y="199.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-D5F1263E-610F-4641-85F1-66545EE0A5B3" id="sid-D5F1263E-610F-4641-85F1-66545EE0A5B3_gui">
         <omgdi:waypoint x="1143.0499857631926" y="163.0249989398122"/>
         <omgdi:waypoint x="1203.4499809166196" y="163.0249989398122"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-360235C2-720E-437B-8DAD-47BDBABB2557" id="sid-360235C2-720E-437B-8DAD-47BDBABB2557_gui">
         <omgdi:waypoint x="494.42233048680026" y="667.6499906097652"/>
         <omgdi:waypoint x="494.4223304868002" y="624.877862907505"/>
         <omgdi:waypoint x="731.0" y="624.877862907505"/>
         <omgdi:waypoint x="731.0" y="450.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-8C01ABEA-1FEA-4B66-B75B-B99F28D91746" id="sid-8C01ABEA-1FEA-4B66-B75B-B99F28D91746_gui">
         <omgdi:waypoint x="896.0" y="159.0"/>
         <omgdi:waypoint x="943.758872443577" y="159.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-F8CF3F38-416B-419D-99D0-D65C6DE75D3F" id="sid-F8CF3F38-416B-419D-99D0-D65C6DE75D3F_gui">
         <omgdi:waypoint x="410.749998485446" y="707.6499906097652"/>
         <omgdi:waypoint x="437.5999987883568" y="707.6499906097652"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-10B8C8C9-0EE2-45A8-9647-B0545F684C5A" id="sid-10B8C8C9-0EE2-45A8-9647-B0545F684C5A_gui">
         <omgdi:waypoint x="537.5999987883567" y="709.7660139251385"/>
         <omgdi:waypoint x="602.0" y="708.0278519102421"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-6BBDB156-92C5-44E4-BB62-CC1836F695CE" id="sid-6BBDB156-92C5-44E4-BB62-CC1836F695CE_gui">
         <omgdi:waypoint x="1001.9499839457276" y="410.4356981512311"/>
         <omgdi:waypoint x="1087.09423828125" y="412.2905578613281"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-64911385-B55A-48A1-9F40-5F2157233D1E" id="sid-64911385-B55A-48A1-9F40-5F2157233D1E_gui">
         <omgdi:waypoint x="1108.0499857631926" y="410.0"/>
         <omgdi:waypoint x="1191.9499839457276" y="410.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-8A3392BB-BB0A-4AA9-80C3-511EED717C85" id="sid-8A3392BB-BB0A-4AA9-80C3-511EED717C85_gui">
         <omgdi:waypoint x="972.1483641059308" y="159.0"/>
         <omgdi:waypoint x="1043.0499857631926" y="159.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-A1E993E7-5DF0-4094-820C-F4B286D738E2" id="sid-A1E993E7-5DF0-4094-820C-F4B286D738E2_gui">
         <omgdi:waypoint x="876.0" y="370.0"/>
         <omgdi:waypoint x="876.0" y="315.659969697628"/>
         <omgdi:waypoint x="957.1483641059308" y="315.659969697628"/>
         <omgdi:waypoint x="957.1483641059308" y="174.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-C415142C-50D8-4AD2-8ADD-07416D17CCEE" id="sid-C415142C-50D8-4AD2-8ADD-07416D17CCEE_gui">
         <omgdi:waypoint x="1242.5723567302805" y="450.0"/>
         <omgdi:waypoint x="1243.313720703125" y="497.6475830078125"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-8BB31721-B58F-4823-88C5-893F6B391FE5" id="sid-8BB31721-B58F-4823-88C5-893F6B391FE5_gui">
         <omgdi:waypoint x="1155.1199823907855" y="537.5899923464538"/>
         <omgdi:waypoint x="1406.0499797049765" y="537.5899923464538"/>
         <omgdi:waypoint x="1406.0499797049765" y="450.0"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-5B03B331-51A6-4423-9A5E-8F5EDFB682AB" id="sid-5B03B331-51A6-4423-9A5E-8F5EDFB682AB_gui">
         <omgdi:waypoint x="1221.9499839457276" y="499.0153546133734"/>
         <omgdi:waypoint x="1155.1199823907855" y="498.77203559786966"/>
      </bpmndi:BPMNEdge>
   </bpmndi:BPMNPlane>
   <bpmndi:BPMNLabelStyle id="sid-503a16cd-f4f3-4f4d-be3f-05bb43e4370a">
      <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="11.0"/>
   </bpmndi:BPMNLabelStyle>
   <bpmndi:BPMNLabelStyle id="sid-8f3350cf-ced8-46b1-8b07-81e85de900b3">
      <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="12.0"/>
   </bpmndi:BPMNLabelStyle>
</bpmndi:BPMNDiagram>
</definitions>`
};

var sampleFileMapping = {
    dispatch: 'Dispatch_of_Goods.bpmn',
    recourse: 'Insurance_Recourse.bpmn',
    credit: 'Credit_Scoring.bpmn',
    restaurant: 'Self-service_Restaurant.bpmn'
};