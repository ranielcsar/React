import React from 'react';
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Detail() {
   const navigation = useNavigation();  

   const route = useRoute();
   const incident = route.params.incident;

   const message =
      `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
         .format(incident.value)}`;

   function navigateBack() {
      navigation.goBack();
   }

   function sendEmail() {

   }

   function sendWhatsapp() {
      Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`);
   }

   return (
      <View style={styles.container}>      

         <View style={styles.header}>
            <Image source={logoImg}/>
            <TouchableOpacity onPress={navigateBack}>
               <Text style={{ fontSize: 20, color: '#E02041'}}>←</Text>
            </TouchableOpacity>            
         </View>

         <View style={styles.incident}>
            <Text style={[styles.incidentProperty, { marginTop: 0}]}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name} | {incident.city} - {incident.uf}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
               {
                  Intl.NumberFormat(
                     'pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                     }).format(incident.value)
               }
            </Text>
         </View>

         <View style={styles.contactBox}>
            <Text style={styles.heroTitle}>Salve o dia!</Text>
            <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

            <Text style={styles.heroDescription}>Entre em contato:</Text>

            <View style={styles.actions}>
               <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                  <Text style={styles.actionText}>WhatsApp</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.action} onPress={() => {}}>
                  <Text style={styles.actionText}>E-mail</Text>
               </TouchableOpacity>
            </View>
         </View>

      </View>
   );
}