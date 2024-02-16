'use client';

import Button from '@/app/_components/button';

export default function Page() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <fieldset>
          <label>Email</label>
          <input type="email" required />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <input type="password" required />
        </fieldset>
        <Button label="Login" onClick={() => {}} />
      </form>
    </div>
  );
}
