export default function Register() {
    return(
        <div className="flex justify-center items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-3">
                <h2>sign up</h2>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="name">name</label>
                        <input type="text" placeholder="enter name" name="name" className="form-control rounded-0"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name">email</label>
                        <input type="email" placeholder="enter email" name="email" className="form-control rounded-0"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name">username</label>
                        <input type="text" placeholder="enter username" name="username" className="form-control rounded-0"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name">password</label>
                        <input type="password" placeholder="enter password" name="password" className="form-control rounded-0"/>
                    </div>
                    <button type="submit" className="btn btn-succes w-100 rounded-0">sign up</button>
                    <p>zdfghjhgfds7trdugfghljhgfdzue6rd</p>
                    <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"></button>
                </form>
            </div>
        </div>
    )
}