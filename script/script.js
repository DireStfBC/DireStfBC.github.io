var parametros = window.location.search;

window.onload= function(){
    //Desbloqueio de Usuário
    if(parametros == "?desbloqueio"){
        document.getElementById("p-tutorial").innerHTML = "1 - Logar no Terminal Services (mstsc) com seu TR<br>2 - Na barra de pesquisa do menu Iniciar (logo do windows no canto inferior esquerdo) pesquisar por &quot;Active Directory&quot; e abrir o software &quot;Active Directory Users and Computers<br>3 - Pesquisar pelo DE do usuário no campo &quot;Name&quot;<br>4 - Clicar duas vezes no nome do usuário, que aparecerá na parte de baixo em &quot;Search Results&quot;<br>5 - Copiar o nome completo do usuário em &quot;Display name&quot;<br>6 - Voltar a barra de pesquisa no menu Iniciar e digitar &quot;\\drcbhz017&quot; e apertar Enter<br>7 - Seguir o caminho &quot;TECNOLOGIA DA INFORMAÇÃO -> STEFANINI e abrir o software &quot;ListagemFuncionarios&quot;<br>8 - Colar o nome do usuário no campo &quot;Nome&quot; e clicar em &quot;Buscar&quot;<br>9 - Solicitar ao usuário que informe seu RG e CPF (ou quaisquer outros dois dados que você preferir) para confirmação de dados (motivos de segurança) e conferir se os dados informados por ele batem com os que constam na Listagem de Funcionários;<br>10 - Caso os dados não estejam corretos, informar ao usuário que o desbloqueio só é possível se os dados solicitados estejam corretos (Não realize o desbloqueio) Caso estejam corretos, solicite o usuário que aguarde mais um momento, e clique na aba &quot;Account&quot; da janela no AD que contém as informações do usuário.<br>11 - Marque a opção &quot;Unlock account&quot; e clique no botão &quot;Ok&quot;<br>12 - Informe ao usuário que a conta foi desbloqueada e peça para que ele faça um teste"
        
        document.getElementById("p-categorização").innerHTML = "<p>Tipo: REQUISIÇÃO</p><p>Categoria 1: SUPORTE</p><p>Categoria 2: SERVIDOR WINDOWS</p><p>Categoria 3: ACTIVE DIRECTORY</p><p>Categoria 4: DESBLOQUEIO DE USUARIO</p><p>Serviço: MANUTENCAO</p><p>Para a Fila: SERVICE DESK</p><p>Acordo de Nível de Serviço: SERVICE DESK::MEDIO 60::NORMAL</p>"

        document.getElementById("p-texto").innerHTML = "DESCRIÇÃO DETALHADA DO PROBLEMA: Login de rede bloqueado.<br>DESCRIÇÃO DOS TESTES REALIZADOS: Realizada validação dos dados (RG e CPF) e verificado o bloqueio do usuário no AD.<br>RESULTADOS DOS TESTES REALIZADOS: Login Bloqueado no Active Directory."

        document.getElementById("p-fechamento").innerHTML = "DESCRIÇÃO DA ATIVIDADE SOLUCIONADORA: Realizado desbloqueio do login de rede.<br>TESTES EFETUADOS: Realizado teste de login pelo usuário.<br>VALIDAÇÃO: Validado pelo usuário."
    }

    //Reset de Senha
    else if(parametros == "?reset"){
            document.getElementById("p-tutorial").innerHTML = "1 - Logar no Terminal Services (mstsc) com seu TR<br>2 - Na barra de pesquisa do menu Iniciar (logo do windows no canto inferior esquerdo) pesquisar por &quot;Active Directory&quot; e abrir o software &quot;Active Directory Users and Computers<br>3 - Pesquisar pelo DE do usuário no campo &quot;Name&quot;<br>4 - Clicar duas vezes no nome do usuário, que aparecerá na parte de baixo em &quot;Search Results&quot;<br>5 - Copiar o nome completo do usuário em &quot;Display name&quot;<br>6 - Voltar a barra de pesquisa no menu Iniciar e digitar &quot;\\drcbhz017&quot; e apertar Enter<br>7 - Seguir o caminho &quot;TECNOLOGIA DA INFORMAÇÃO -> STEFANINI e abrir o software &quot;ListagemFuncionarios&quot;<br>8 - Colar o nome do usuário no campo &quot;Nome&quot; e clicar em &quot;Buscar&quot;<br>9 - Solicitar ao usuário que informe seu RG e CPF (ou quaisquer outros dois dados que você preferir) para confirmação de dados (motivos de segurança) e conferir se os dados informados por ele batem com os que constam na Listagem de Funcionários;<br>10 - Caso os dados não estejam corretos, informar ao usuário que o desbloqueio só é possível se os dados solicitados estejam corretos (Não realize o desbloqueio) Caso estejam corretos, solicite o usuário que aguarde mais um momento, e clique na aba &quot;Account&quot; da janela no AD que contém as informações do usuário.<br>11 - Marque a opção &quot;Unlock account&quot; e clique no botão &quot;Ok&quot;<br>12 - Informe ao usuário que a conta foi desbloqueada e peça para que ele faça um teste"
            
            document.getElementById("p-categorização").innerHTML = "<p>Tipo: REQUISIÇÃO</p><p>Categoria 1: SUPORTE</p><p>Categoria 2: SERVIDOR WINDOWS</p><p>Categoria 3: ACTIVE DIRECTORY</p><p>Categoria 4: DESBLOQUEIO DE USUARIO</p><p>Serviço: MANUTENCAO</p><p>Para a Fila: SERVICE DESK</p><p>Acordo de Nível de Serviço: SERVICE DESK::MEDIO 60::NORMAL</p>"
    
            document.getElementById("p-texto").innerHTML = "DESCRIÇÃO DETALHADA DO PROBLEMA: Login de rede bloqueado.<br>DESCRIÇÃO DOS TESTES REALIZADOS: Realizada validação dos dados (RG e CPF) e verificado o bloqueio do usuário no AD.<br>RESULTADOS DOS TESTES REALIZADOS: Login Bloqueado no Active Directory."
    
            document.getElementById("p-fechamento").innerHTML = "DESCRIÇÃO DA ATIVIDADE SOLUCIONADORA: Realizado desbloqueio do login de rede.<br>TESTES EFETUADOS: Realizado teste de login pelo usuário.<br>VALIDAÇÃO: Validado pelo usuário."
    }

    //Instalação DIMEP
    else if(parametros == "?dimep"){
        document.getElementById("p-tutorial").innerHTML = "1 - Passar toda a pasta DMREP para a pasta temp no C:<br>2 - Trocar para usuário administrador e executar o arquivo &quot;setup&quot;<br>3 - Depois de instalar o DIMEP, NÃO EXECUTAR O DIMEP, ir em propriedades da pasta &quot;Dimep&quot; criada dentro de Arquivos de Programas (Program Files) e clicar em Propriedades<br>4 - Clicar na aba Compartilhamento e depois na opção &quot;Compartilhamento Avançado...&quot; <br>5 - Marcar a opção &quot;Compartilhar pasta&quot; e depois clicar em permissões. Dê controle total à Todos.<br>6 - Criar uma pasta &quot;DIMEP&quot; no C: e dar controle total à Todos assim como na outra pasta<br>7 - NÃO EXECUTAR O DIMEP e reiniciar o computador<br>8 - Logar na máquina com login do usuário<br>9 - Pedir colaborador(a) para fazer um teste executando e configurando o DIMEP."
        
        document.getElementById("p-categorização").innerHTML = "<p>Tipo: REQUISIÇÃO</p><p>Categoria 1: SUPORTE</p><p>Categoria 2: SOFTWARE</p><p>Categoria 3: OUTROS PROGRAMAS</p><p>Categoria 4: INSTALAÇÃO</p><p>Serviço: SOLICITAÇÃO NOVO</p><p>Para a Fila: SERVICE DESK</p><p>Acordo de Nível de Serviço: SERVICE DESK::BAIXO 240::NORMAL</p>"

        document.getElementById("p-texto").innerHTML = "DESCRIÇÃO DETALHADA DO PROBLEMA: Requisição de instalação do DIMEP.<br>DESCRIÇÃO DOS TESTES REALIZADOS: Realizada validação.<br>RESULTADOS DOS TESTES REALIZADOS: Instalar DIMEP. "

        document.getElementById("p-fechamento").innerHTML = "DESCRIÇÃO DA ATIVIDADE SOLUCIONADORA: Realizada instalação do DIMEP conforme solicitado.<br>TESTES EFETUADOS: Realizado teste pelo usuário. <br>VALIDAÇÃO: Validado pelo usuário"
    }

    //Instalação SOC Plug
    else if(parametros == "?socPlug"){
        document.getElementById("p-tutorial").innerHTML = "1 - Verificar se o Java está instalado e atualizado (instale e atualize caso não esteja)<br>2 - Depois de logar no Terminal Services (mstsc) com seu TR, vá até o menu Iniciar e digite &quot;\\drcbhz017&quot; na barra de pesquisa e aperte Enter<br>3 - Siga o caminho TECNOLOGIA DA INFORMAÇÃO -> SOFTWARES -> Leitor Biométrico SOC -> Instalação NITGEN Hamster DX e copie a pasta &quot;EasyInstallation v3.12(0)&quot; para a pasta temp (ou qualquer outro local) na máquina do usuário<br>4 - Concluída a transferência, execute o arquivo &quot;Setup&quot; DENTRO da pasta<br>5 - Quando o software de instalação do driver abrir, soliciteo usuário que conecte o Leitor Biométrico na porta USB, escolha a opção &quot;USB Fingkey Hamster (HFDU01/04/06)&quot; (a primeira) e clique em &quot;Install&quot;<br>6 - Quando o driver estiver sendo instalado (janela Device Status), Desconect e conect o Leitor Biométrico novamente e cliquem em &quot;Next&quot;<br>7 - Transfira o arquivo &quot;SocPLug.jnlp&quot; para a máquina do usuáro e o execute (se necessário, clique com o botão direito nele, depois em &quot;Executar como um usuário diferente&quot; e insira as credenciais de administrdor). Clique em continuar na mensagem de Advertência de Segurança<br>8 - Quando a instalação terminar, execute o ícone de atalho para o SOC Plug criado e verifique se o software abre normalmente."
        
        document.getElementById("p-categorização").innerHTML = "<p>Tipo: REQUISIÇÃO</p><p>Categoria 1: SUPORTE</p><p>Categoria 2: SOFTWARE</p><p>Categoria 3: OUTROS PROGRAMAS</p><p>Categoria 4: INSTALAÇÃO</p><p>Serviço: SOLICITAÇÃO NOVO</p><p>Para a Fila: SERVICE DESK</p><p>Acordo de Nível de Serviço: SERVICE DESK::BAIXO 240::NORMAL</p>"

        document.getElementById("p-texto").innerHTML = "DESCRIÇÃO DETALHADA DO PROBLEMA: Requisição de instalação do SOC Plug.<br>DESCRIÇÃO DOS TESTES REALIZADOS: Realizada validação.<br>RESULTADOS DOS TESTES REALIZADOS: Instalar SOC Plug."

        document.getElementById("p-fechamento").innerHTML = "DESCRIÇÃO DA ATIVIDADE SOLUCIONADORA: Realizada instalação do SOC Plug conforme solicitado.<br>TESTES EFETUADOS: Realizado teste pelo usuário. <br>VALIDAÇÃO: Validado pelo usuário"
    }

    //Instalação RM Labore
    else if(parametros == "?rmLabore"){
        document.getElementById("p-tutorial").innerHTML = "1 - Passar toda a pasta DMREP para a pasta temp no C:<br>2 - Trocar para usuário administrador e executar o arquivo &quot;setup&quot;<br>3 - Depois de instalar o DIMEP, NÃO EXECUTAR O DIMEP, ir em propriedades da pasta &quot;Dimep&quot; criada dentro de Arquivos de Programas (Program Files) e clicar em Propriedades<br>4 - Clicar na aba Compartilhamento e depois na opção &quot;Compartilhamento Avançado...&quot; <br>5 - Marcar a opção &quot;Compartilhar pasta&quot; e depois clicar em permissões. Dê controle total à Todos.<br>6 - Criar uma pasta &quot;DIMEP&quot; no C: e dar controle total à Todos assim como na outra pasta<br>7 - NÃO EXECUTAR O DIMEP e reiniciar o computador<br>8 - Logar na máquina com login do usuário<br>9 - Pedir colaborador(a) para fazer um teste executando e configurando o DIMEP."
        
        document.getElementById("p-categorização").innerHTML = "<p>Tipo: REQUISIÇÃO</p><p>Categoria 1: SUPORTE</p><p>Categoria 2: SOFTWARE</p><p>Categoria 3: OUTROS PROGRAMAS</p><p>Categoria 4: INSTALAÇÃO</p><p>Serviço: SOLICITAÇÃO NOVO</p><p>Para a Fila: SERVICE DESK</p><p>Acordo de Nível de Serviço: SERVICE DESK::BAIXO 240::NORMAL</p>"

        document.getElementById("p-texto").innerHTML = "DESCRIÇÃO DETALHADA DO PROBLEMA: Requisição de instalação do DIMEP.<br>DESCRIÇÃO DOS TESTES REALIZADOS: Realizada validação.<br>RESULTADOS DOS TESTES REALIZADOS: Instalar DIMEP. "

        document.getElementById("p-fechamento").innerHTML = "DESCRIÇÃO DA ATIVIDADE SOLUCIONADORA: Realizada instalação do DIMEP conforme solicitado.<br>TESTES EFETUADOS: Realizado teste pelo usuário. <br>VALIDAÇÃO: Validado pelo usuário"
    }

    //Inserir Máquina no Domínio
    else if(parametros == "?inserirDominio"){
        document.getElementById("p-tutorial").innerHTML = "1 - Logue na máquina do colaborador com o usuário local .\direcional. Não digite nenhuma senha e faça login com o campo em branco<br>2 - Clique com o botão direito em Computador e depois clique com o esquerdo em Propriedades<br>3 - Clicar em &quot;Alterar Configurações&quot; ao lado do Nome do Computador<br>4 - Clique em &quot;Alterar...&quot;<br>5 - Em &quot;Membro de&quot; selecione &quot;Grupo de trabalho&quot; ao invés de &quot;Domínio&quot; e coloque um grupo qualquer (Exemplo: &quot;G&quot;). Clique em OK<br>6 - Autentique-se com o seu TR e NÃO REINICIE A MÁQUINA.<br>7 - Volte para domínio, insira no campo de texto &quot;direcionalbh.local&quot; e clique em OK<br>8 - Autentique-se com o seu TR novamente e reiniciar a máquina<br>9 - Peça ao colaborador(a) para fazer um teste de login na rede (logar na máquina com DE e senha de rede quando terminar de reiniciar)."
        
        document.getElementById("p-categorização").innerHTML = "<p>Tipo: INCIDENTE</p><p>Categoria 1: SUPORTE</p><p>Categoria 2: SOFTWARE</p><p>Categoria 3: WINDOWS</p><p>Categoria 4: INSERIR MAQUINA NO DOMINIO</p><p>Serviço: MANUTENCAO</p><p>Para a Fila: SERVICE DESK</p><p>Acordo de Nível de Serviço: SERVICE DESK::BAIXO 240::NORMAL</p>"

        document.getElementById("p-texto").innerHTML = "DESCRIÇÃO DETALHADA DO PROBLEMA: Computador apresenta o erro &quot;Falha de confiança na relação entre esta estação de trabalho e o controlador de domínio primário&quot;.<br>DESCRIÇÃO DOS TESTES REALIZADOS: Teste com outro cabo de rede.<br>RESULTADOS DOS TESTES REALIZADOS: Micro fora de domínio."

        document.getElementById("p-fechamento").innerHTML = "DESCRIÇÃO DA ATIVIDADE SOLUCIONADORA: Máquina inserida no domínio.<br>TESTES EFETUADOS: Realizado teste de login pelo usuário. <br>VALIDAÇÃO: Validado pelo usuário"
    }

    //Instalação Microsoft Office
    else if(parametros == "?msOffice"){
        document.getElementById("p-tutorial").innerHTML = "1 - Passar toda a pasta DMREP para a pasta temp no C:<br>2 - Trocar para usuário administrador e executar o arquivo &quot;setup&quot;<br>3 - Depois de instalar o DIMEP, NÃO EXECUTAR O DIMEP, ir em propriedades da pasta &quot;Dimep&quot; criada dentro de Arquivos de Programas (Program Files) e clicar em Propriedades<br>4 - Clicar na aba Compartilhamento e depois na opção &quot;Compartilhamento Avançado...&quot; <br>5 - Marcar a opção &quot;Compartilhar pasta&quot; e depois clicar em permissões. Dê controle total à Todos.<br>6 - Criar uma pasta &quot;DIMEP&quot; no C: e dar controle total à Todos assim como na outra pasta<br>7 - NÃO EXECUTAR O DIMEP e reiniciar o computador<br>8 - Logar na máquina com login do usuário<br>9 - Pedir colaborador(a) para fazer um teste executando e configurando o DIMEP."
        
        document.getElementById("p-categorização").innerHTML = "<p>Tipo: REQUISIÇÃO</p><p>Categoria 1: SUPORTE</p><p>Categoria 2: SOFTWARE</p><p>Categoria 3: OUTROS PROGRAMAS</p><p>Categoria 4: INSTALAÇÃO</p><p>Serviço: SOLICITAÇÃO NOVO</p><p>Para a Fila: SERVICE DESK</p><p>Acordo de Nível de Serviço: SERVICE DESK::BAIXO 240::NORMAL</p>"

        document.getElementById("p-texto").innerHTML = "DESCRIÇÃO DETALHADA DO PROBLEMA: Requisição de instalação do DIMEP.<br>DESCRIÇÃO DOS TESTES REALIZADOS: Realizada validação.<br>RESULTADOS DOS TESTES REALIZADOS: Instalar DIMEP. "

        document.getElementById("p-fechamento").innerHTML = "DESCRIÇÃO DA ATIVIDADE SOLUCIONADORA: Realizada instalação do DIMEP conforme solicitado.<br>TESTES EFETUADOS: Realizado teste pelo usuário. <br>VALIDAÇÃO: Validado pelo usuário"
    }
}