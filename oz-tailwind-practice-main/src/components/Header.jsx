export default function Header() {
  return (
    <header className="flex justify-between items-center py-2.5 px-5 bg-black">
      <h2>OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-5">
        <li className={listStyle}>로그인</li>
        <li className={listStyle}>회원가입</li>
        <li className={listStyle}>내클래스</li>
      </ul>
    </header>
  );
}

const listStyle = "list-none font-normal font-[13px]";
