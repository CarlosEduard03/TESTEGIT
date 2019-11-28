///<reference path="pessoa.ts" />
///<reference path="paciente.ts" />
///<reference path="funcionario.ts" />
///<reference path="medico.ts" />
///<reference path="enfermeiro.ts" />
///<reference path="hospital.ts" />
var medicina;
(function (medicina) {
    //Sessão Hospital
    var hospital = new Hospital();
    hospital.setNome('Santa Casa');
    //Sessão Paciente
    var paciente1 = new Paciente();
    paciente1.setCodPaciente(1);
    paciente1.setNome('Carlos Eduardo');
    paciente1.setCpf("000.000.000-00");
    paciente1.setHospital(hospital);
    var paciente2 = new Paciente();
    paciente2.setCodPaciente(2);
    paciente2.setNome('Magnus Eduardo');
    paciente2.setCpf("000.000.000-02");
    paciente2.setHospital(hospital);
    var paciente3 = new Paciente();
    paciente3.setCodPaciente(3);
    paciente3.setNome('Paulo Eduardo');
    paciente3.setCpf("000.000.000-03");
    paciente3.setHospital(hospital);
    hospital.addPaciente(paciente1);
    hospital.addPaciente(paciente2);
    hospital.addPaciente(paciente3);
    //Sessão Médico
    var medico1 = new Medico();
    medico1.setCodFuncionario(1);
    medico1.setCrm(1);
    medico1.setNome('Astolfo Henrique');
    medico1.setCpf("000.000.000-10");
    medico1.setEspecialidade(1);
    medico1.setHospital(hospital);
    var medico2 = new Medico();
    medico2.setCodFuncionario(2);
    medico2.setCrm(2);
    medico2.setNome('Dudu Henrique');
    medico2.setCpf("000.000.000-20");
    medico2.setEspecialidade(2);
    medico2.setHospital(hospital);
    var medico3 = new Medico();
    medico3.setCodFuncionario(3);
    medico3.setCrm(3);
    medico3.setNome('Kaio Henrique');
    medico3.setCpf("000.000.000-30");
    medico3.setEspecialidade(3);
    medico3.setHospital(hospital);
    hospital.addMedico(medico1);
    hospital.addMedico(medico2);
    hospital.addMedico(medico3);
    //Sessão Enfermeiro
    var enfermeiro1 = new Enfermeiro();
    enfermeiro1.setCodFuncionario(4);
    enfermeiro1.setCoren(1);
    enfermeiro1.setNome('Ronald Ramos');
    enfermeiro1.setCpf("100.000.000-00");
    enfermeiro1.setHospital(hospital);
    var enfermeiro2 = new Enfermeiro();
    enfermeiro2.setCodFuncionario(5);
    enfermeiro2.setCoren(2);
    enfermeiro2.setNome('Ronaldo Camos');
    enfermeiro2.setCpf("200.000.000-00");
    enfermeiro2.setHospital(hospital);
    var enfermeiro3 = new Enfermeiro();
    enfermeiro3.setCodFuncionario(6);
    enfermeiro3.setCoren(3);
    enfermeiro3.setNome('Thiago Ramos');
    enfermeiro3.setCpf("300.000.000-00");
    enfermeiro3.setHospital(hospital);
    hospital.addEnfermeiro(enfermeiro1);
    hospital.addEnfermeiro(enfermeiro2);
    hospital.addEnfermeiro(enfermeiro3);
    var tabelaEnfermeiro = document.getElementById("tabelaEnfermeiro");
    var conteudo1 = "";
    hospital.getEnfermeiro().forEach(function (element) {
        conteudo1 += "<tr> <td> " + element.getNome() + " </td> <td> " + element.getCpf() + " </td> <td> " + element.getCodFuncionario() + "</td> <td> " + element.getCoren() + " </td> <td> " + element.getHospital().getNome() + " </td>";
    });
    tabelaEnfermeiro.innerHTML = conteudo1;
    var tabelaMedico = document.getElementById("tabelaMedico");
    var conteudo2 = "";
    hospital.getMedico().forEach(function (element) {
        conteudo2 += "<tr> <td> " + element.getNome() + " </td> <td> " + element.getCpf() + " </td> <td> " + element.getCodFuncionario() + "</td> <td> " + element.getCrm() + " </td> <td> " + element.getEspecialidade() + "</td> <td> " + element.getHospital().getNome() + " </td>";
    });
    tabelaMedico.innerHTML = conteudo2;
    var tabelaPaciente = document.getElementById("tabelaPaciente");
    var conteudo3 = "";
    hospital.getPaciente().forEach(function (element) {
        conteudo3 += "<tr> <td> " + element.getNome() + " </td> <td> " + element.getCpf() + " </td> <td> " + element.getCodPaciente() + "</td> <td> " + element.getHospital().getNome() + " </td>";
    });
    tabelaPaciente.innerHTML = conteudo3;
})(medicina || (medicina = {}));
