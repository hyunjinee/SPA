export const pageTemplate = {
  loginPage: `
    <section class="user-information-form-section">
      <form id="login-form" >
          <label>
              이메일<br>
              <input type="email" name="email" placeholder="이메일 주소를 입력해주세요">
          </label>
          <label>비밀번호<br>
              <input type="password" name="password" placeholder="비밀번호를 입력해주세요">
          </label>
          <button class="button accent">확인</button>
      </form>
      <label>아직 회원이 아니신가요?<button class="text-button" data-page="signUp">회원가입</button></label>
    </section>
  `,
  signUpPage: `
    <section class="user-information-form-section">
        <form id="signup-form" >
            <label>
                이메일<br>
                <input type="email" name="email" placeholder="이메일 주소를 입력해주세요">
            </label>
            <label>
                이름<br>
                <input type="text" name="name" placeholder="이름을 입력해주세요">
            </label>
            <label>
                비밀번호<br>
                <p class="input-guide">대문자 알파벳, 소문자 알파벳, 숫자를 각각 1자 이상 포함하는 전체 8자 이상의 비밀번호를 입력하세요.</p>
                <input type="password" name="password" placeholder="비밀번호를 입력해주세요">
            </label>
            <label>
                비밀번호 확인<br>
                <input type="password" name="passwordConfirm" placeholder="비밀번호를 입력해주세요">
            </label>
            <button class="button accent">확인</button>
        </form>
    </section>
`,
};

export const template = {
  userAreaContentForMember: (name: string) => `
    <button type="button" id="user-thumbnail-button" name="thumbnail-button" class="thumbnail-button">${name[0]}</button>
    <ul id="member-menu" class="hidden">
      <li data-page="updateMyInfo">회원 정보 수정</li>
      <li id="logout-button">로그아웃</li>
    </ul>
  `,
  userAreaContentForNonMember:
    '<button id="login-button" class="button" data-page="login">로그인</button>',
};
