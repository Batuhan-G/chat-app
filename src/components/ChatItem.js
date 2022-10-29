import style from './style.module.css'

function ChatItem({ item }) {
  return (
    <div className={style.chatItem}>{item.messages}</div>
  )
}

export default ChatItem