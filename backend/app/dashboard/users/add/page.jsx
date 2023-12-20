import styles from '../../../ui/dashboard/users/addUser/addUser.module.css'

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder='username' name='username' required />
        <input type="text" placeholder='email' name='email' required />
        <input type="password" placeholder='password' name='password' required />
        <input type="text" placeholder='phone' name='phone' required />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage