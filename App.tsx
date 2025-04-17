import {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  View,
  Image,
  ScrollView,
} from 'react-native';

interface ChatItemProps {
  name: string;
  message: string;
  time: string;
  image: any; 
}

const ChatItem = ({name, message, time, image}: ChatItemProps) => (
  <View style={{flexDirection: 'row'}}>
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <View>
        <Image
          source={image} 
          style={{width: 60, height: 60, borderRadius: 30, margin: 10}}
        />
      </View>
      <View>
        <Text style={{fontSize: 19, fontWeight: 'bold', paddingLeft: 10}}>
          {name}
        </Text>
        <Text style={{fontSize: 15, padding: 10}}>{message}</Text>
      </View>
    </View>
    <View style={{position: 'absolute', right: 20, top: 20}}>
      <Text>{time}</Text>
    </View>
  </View>
);

const Whatsapp = () => {
  const [search, setSearch] = useState('');
  const chats = [
    {
      name: 'React Native class',
      message: 'sakthi:hai guys just try this',
      time: '10:00',
      image: require('./assets/r.png'),
    },
    {
      name: 'Arun',
      message: 'Arun: No plan today',
      time: '09:53',
      image: require('./assets/a.png'),
    },
    {
      name: 'kumar',
      message: 'kumar:what doing',
      time: '08:23',
      image: require('./assets/k.png'),
    },
    {
      name: 'Ramesh',
      message: 'Me:have any plan',
      time: '08:10',
      image: require('./assets/r.png'),
    },
    {
      name: 'suresh',
      message: 'me:take rest ',
      time: '08:00',
      image: require('./assets/s.png'),
    },
    {
      name: 'sankar',
      message: 'me:suresh today leave',
      time: '07:53',
      image: require('./assets/s.png'),
    },
    {
      name: 'jegan',
      message: 'sakthi:hai guys just try this',
      time: '07:50',
      image: require('./assets/j.png'),
    },
    {
      name: 'ganesh',
      message: 'Ganesh:tomorow any plan',
      time: '07:45',
      image: require('./assets/g.png'),
    },
    {
      name: 'Friend for ever',
      message: 'ram:good morning',
      time: '06:53',
      image: require('./assets/f.png'),
    },
    {
      name: 'Trip for goa',
      message: 'planer: we never gos to goa',
      time: '10:53',
      image: require('./assets/t.png'),
    },
    {
      name: 'school mates',
      message: 'Yaro:No message from your side',
      time: '10:53',
      image: require('./assets/s.png'),
    },
    {
      name: 'Ram',
      message: 'ram:hai guys ',
      time: '10:53',
      image: require('./assets/r.png'),
    },
    {
      name: 'narayanan',
      message: 'me: gn',
      time: '10:53 pm',
      image: require('./assets/n.png'),
    },
   
  ];
  const filteredChats = chats.filter(
    chat =>
      chat.name.toLowerCase().includes(search.toLowerCase()) ||
      chat.message.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <SafeAreaView>
        <Text
          style={{
            color: 'green',
            fontSize: 24,
            fontWeight: 'bold',
            paddingLeft: 10,
          }}>
          Whatsapp
        </Text>
      </SafeAreaView>

      <View>
        <TextInput
          placeholder="Ask Meta AI for or Search"
          onChangeText={text => setSearch(text)}
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 15,
            paddingHorizontal: 10,
            margin: 10,
          }}
        />
        <ScrollView style={{marginBottom: 100}}>
          {filteredChats.map((chat, index) => (
            <ChatItem
              key={index}
              name={chat.name}
              message={chat.message}
              time={chat.time}
              image={chat.image}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Whatsapp;
