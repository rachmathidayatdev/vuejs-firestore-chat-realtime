<template>
    <div class="chat container">
        <h2 class="center teal-text">Chat {{ name }}</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        <span class="green-text darken-4">{{ message.name}}</span>
                        <span class="grey-text text-darken-3">{{ message.content }}</span>
                        <span class="grey-text time">{{ message.created_at }}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name="name" />
            </div>
        </div>
    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
    name: 'Chat',
    props: [
        'name'
    ],
    components: {
        NewMessage
    },
    data() {
        return {
            messages: []
        }
    },

    created() {
        let ref = db.collection('messages').orderBy('created_at')
        
        ref.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
            if (change.type == 'added') {
                let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        created_at: moment(doc.data().created_at).format('lll')
                    })
                }
            })
        })
    }
}
</script>

<style>
.chat {
    max-width: 500px;
}

.chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
  }

.chat span {
    font-size: 1.4em;
}

.chat .time {
    display: block;
    font-size: 0.8em;
}

.messages {
    max-height: 300px;
    overflow: auto;
}

.messages::-webkit-scrollbar {
    width: 3px;
}

.messages::-webkit-scrollbar-track {
    background: #ddd;
}

.messages::-webkit-scrollbar-thumb {
    background: #aaa;
}
</style>