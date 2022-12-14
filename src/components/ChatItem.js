import style from './style.module.css'

function ChatItem({ item }) {
  return (
    <div className={`${style.chatItem} ${item.fromMe ? style.right : ''}`}>{item.message}</div>
  )
}

export default ChatItem