function CalendarioDetails() {
  return (
    <>
      <View style={styles.containerCalendario}>
        <View class="diaAndIcon" style={styles.informacaoCalendario}>
          <Text style={styles.textCalendario}>22 de Agosto de 2022.</Text>
          <Image
            style={styles.imgCalendario}
            source={require("./assets/iconeCalendario.png")}
          />
        </View>

        <Image source={require("./assets/imagemCalendario.png")} />
      </View>
    </>
  );
}

function InputsComponentsDetail() {
  return (
    <>
      <View class="informacoes" style={styles.containerInputs}>
        <View class="unidade" style={styles.containerInputCampos}>
          <Text>Unidade</Text>
          <View style={styles.containerUnidade}>
            <Text>Hospital Florianopolis</Text>
            <Text>Icone</Text>
          </View>
        </View>

        <View class="profissional" style={styles.containerInputCampos}>
          <Text>Profissional</Text>
          <View>
            <Text>Foto</Text>
            <Text>Leticia A - 107073/AC</Text>
            <Text>Icone</Text>
          </View>
        </View>

        <View class="entradaSaida" style={styles.containerInputCampos}>
          <View class="entrada">
            <Text>Horario</Text>
            <Text>Icone</Text>
          </View>

          <View class="saida" style={styles.containerInputCampos}>
            <Text>Horario</Text>
            <Text>Icone</Text>
          </View>
        </View>

        <View class="remuneracao" style={styles.containerInputCampos}>
          <Text>Remuneração</Text>
          <View>
            <Text>1200</Text>
            <Text>Icone</Text>
          </View>
        </View>

        <View class="detalhes" style={styles.containerInputCampos}>
          <Text>Detalhes</Text>
          <View>
            <Text>Sem detalhes</Text>
            <Text>Icone</Text>
          </View>
        </View>
      </View>
    </>
  );
}
