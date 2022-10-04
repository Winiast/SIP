import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import Mapview, {
  AnimatedRegion,
  MarkerAnimated,
  Marker,
} from "react-native-maps";
import { useState } from "react";
import * as geolib from "geolib";
import MapView from "react-native-maps";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator {...{ screenOptions }}>
          <Tab.Screen
            name="InitialScreen"
            component={InitialScreen}
            options={{ title: "" }}
          />
          <Tab.Screen
            name="Details"
            component={DetailsPlantao}
            options={{
              title: "Agenda",
              headerStyle: {
                backgroundColor: "#00BFFF",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />

          <Tab.Screen
            name="location"
            component={Location}
            options={{
              title: "Local",
              headerStyle: {
                backgroundColor: "#00BFFF",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Tab.Screen name="Oportunidades" component={Oportunidades} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#00BFFF",
    height: 60,
  },
  tabBarItemStyle: {
    backgroundColor: "#00BFFF",
    color: "white",
    margin: 5,
    borderRadius: 10,
  },
  tabBarOptions: {
    activeTintColor: "#9C27B0",
    inactiveTintColor: "#777",
  },
};

// Home Screen page
function InitialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logoSipCompleto.png")}
        style={{ height: 150, width: 150, borderRadius: 10 }}
      />
    </View>
  );
}

// Page Details Plantao
function DetailsPlantao({ navigation }) {
  return (
    <>
      <View style={styles.containerDetails}>
        <ScrollView style={styles.scrollView}>
          <CalendarioDetails />
          <InputsComponentsDetail name="location" />
        </ScrollView>
      </View>
    </>
  );
}

// Page Location

function InputsComponentsDetail() {
  return (
    <>
      <View class="informacoes" style={styles.containerInputs}>
        <View class="unidade" style={styles.containerInputCampos}>
          <Text style={styles.textPrincipais}>Unidade</Text>
          <View style={styles.containerUnidade}>
            <Text style={{ color: "gray", marginLeft: 20 }}>
              Hospital Florianopolis
            </Text>
            <Image source={require("./assets/Location.png")} />
          </View>
        </View>

        <View class="profissional" style={styles.containerInputCampos}>
          <Text style={styles.textPrincipais}>Profissional</Text>
          <View style={styles.containerUnidade}>
            <Image source={require("./assets/fotoDoutora.png")} />
            <Text>Leticia A - 107073/AC</Text>
            <Image source={require("./assets/Profile.png")} />
          </View>
        </View>

        <View class="entradaSaida" style={styles.containerInputCampos}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "space-between",
              justifyContent: "center",
              marginLeft: 15,
              width: 300,
              height: 80,
            }}
          >
            <View
              class="entrada"
              style={{
                width: 150,
                height: 80,
              }}
            >
              <Text>Entrada</Text>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  borderColor: "gray",
                  width: 120,
                  height: 50,
                  borderRadius: 10,
                  borderWidth: 0.3,
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "gray" }}>
                  14:00h
                </Text>
                <Image source={require("./assets/Login.png")} />
              </View>
            </View>

            <View
              class="saida"
              style={{
                width: 150,
                height: 80,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>Duração</Text>

              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  borderColor: "gray",
                  width: 120,
                  height: 50,
                  marginLeft: 30,
                  borderRadius: 10,
                  borderWidth: 0.3,
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "gray" }}>12:00</Text>
                <Image source={require("./assets/timer.png")} />
              </View>
            </View>
          </View>
        </View>

        <View class="remuneracao" style={styles.containerInputCampos}>
          <Text style={styles.textPrincipais}>Remuneração</Text>
          <View style={styles.containerUnidade}>
            <Text style={{ marginLeft: 20, color: "gray" }}>R$ 1200,00</Text>
            <Image source={require("./assets/remuneracaoIcon.png")} />
          </View>
        </View>

        <View class="detalhes" style={styles.containerInputCampos}>
          <Text style={styles.textPrincipais}>Detalhes</Text>
          <View style={styles.containerUnidade}>
            <Text style={{ marginLeft: 20, color: "gray" }}>Sem detalhes</Text>
            <Image source={require("./assets/Paper.png")} />
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            marginLeft: 25,
          }}
        >
          <ButtonInFinal />
        </View>
      </View>
    </>
  );
}

function ButtonInFinal() {
  return (
    <>
      <View
        class="button"
        style={{
          flexDirection: "row",
          height: 80,
          borderWidth: 1,
          borderColor: "gray",
          width: 300,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          backgroundColor: "#00BFFF",
          marginBottom: 30,
        }}
      >
        <Image source={require("./assets/Location.png")} />
        <Button
          title="Ir para o Plantão"
          color="white"
          fontWeight="700"
          onPress={() => navigation.navigate("location")}
        />
      </View>
    </>
  );
}

function CalendarioDetails() {
  return (
    <>
      <View style={styles.containerCalendario}>
        <View class="diaAndIcon" style={styles.informacaoCalendario}>
          <Text style={styles.textCalendario}>22 de Agosto de 2022</Text>
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

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  title: {
    color: "black",
    fontSize: 30,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  buttons: {
    backgroundColor: "black",
    padding: 15,
    color: "#2d2d",
    margin: 20,
  },

  // // Parte Navbar
  // containerNav: {
  //   backgroundColor: "#00BFFF",
  //   height: 60,
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },

  // textNav: {
  //   fontSize: 12,
  //   color: "white",
  //   fontWeight: "bold",
  // },

  // imgNav: {
  //   position: "absolute",
  //   right: 15,
  // },

  // Parte de Calendario

  containerCalendario: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
  },

  informacaoCalendario: {
    flexDirection: "row",
    width: 350,
    justifyContent: "space-between",
    alignItems: "center",
  },

  imgCalendario: {
    position: "relative",
    top: 15,
    right: -10,
  },

  textCalendario: {
    fontSize: 18,
    fontWeight: "400",
    color: "gray",
  },

  /// Parte inputs

  containerDetails: {
    backgroundColor: "white",
  },

  containerInputs: {
    flexDirection: "column",
    width: 350,
    justifyContent: "center",
    alignItems: "center",
  },

  containerInputCampos: {
    width: 320,
    marginTop: 20,
  },

  containerUnidade: {
    marginTop: 10,
    marginLeft: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 0.5,
    padding: 5,
  },

  textPrincipais: {
    fontSize: 14,
    fontWeight: "bold",
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

// Parte de localização

function Location() {
  return (
    <>
      <View>
        <View
          style={{
            backgroundColor: "#00BFFF",
            flexDirection: "column",
            paddingTop: 15,
            paddingBottom: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              marginBottom: 20,
              fontWeight: "bold",
              width: 250,
              fontSize: 16,
              height: 50,
            }}
          >
            Pronto Atendimento Unimed Unidade Infantil - Florianópolis
          </Text>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            R. Madalena Barbi 204, Centro, Florianópolis - SC
          </Text>

          <View
            style={{
              backgroundColor: "white",
              width: 360,
              borderRadius: 10,
              margin: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 5,
            }}
          >
            <Button
              title="Possui dúvidas em como chegar até o local de destino?"
              style={{
                backgroundColor: "white",
                color: "#00BFFF",
              }}
            />
            <Image source={require("./assets/Location.png")} />
          </View>
        </View>
        <MapaRender />
        {verificarDistanciaPonto(51.525, 7.4575) == "Funcionou" ? (
          <>
            <View
              style={{
                position: "absolute",
                top: 450,
                left: 120,
                heigth: 100,
                padding: 10,
                borderRadius: 15,
                width: 150,
                backgroundColor: "#00BFFF",
              }}
            >
              <Button
                title="Iniciar Plantao"
                color="white"
                // onPress={navigation.navigate("details")}
              />
            </View>
          </>
        ) : (
          <View>
            <Text>Ola</Text>
          </View>
        )}
      </View>
    </>
  );
}

function MapaRender() {
  const marker = Marker;
  const [state, setState] = useState({
    region: {
      latitude: -25.5205,
      longitude: -48.5095,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  return (
    <>
      <MapView style={styles.map} region={state.region}>
        <Marker
          key={"Gustavo"}
          coordinate={{ latitude: -25.5205, longitude: -48.5095 }}
          title={"Doutora"}
          description={marker.description}
        />
      </MapView>
    </>
  );
}

function verificarDistanciaPonto(latitudePerson, longitudePerson) {
  let str = "";
  if (
    geolib.isPointWithinRadius(
      { latitude: 51.525, longitude: 7.4575 },
      { latitude: latitudePerson, longitude: longitudePerson },
      10000
    )
  ) {
    str = "Funcionou";
  } else {
    str = "Erro";
  }

  return str;
}

function Oportunidades({ navigation }) {
  return <></>;
}
