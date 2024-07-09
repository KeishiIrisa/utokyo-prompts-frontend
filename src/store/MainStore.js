import {defineStore} from 'pinia';

export const useMainStore = defineStore('main', {
    state: () => ({
        users: [],
        lessons: [],
        user: "",
    }),
    getters: {

    },
    actions: {
        setUsers(users) {
            this.users = users
        },
        setLessons(lessons) {
            this.lessons = lessons
        },
        setUser(user) {
            this.user = user
        }
    }
})