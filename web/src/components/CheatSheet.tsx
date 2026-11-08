export function CheatSheet() {
  return (
    <>
      <p className="muted">Это схема чтения и порядка слов. Целый алфавит для речи не нужен: буквы разбираются в том слове, которое вы говорите.</p>
      <h2>Как читать запись</h2>
      <p>Значок тона стоит на гласной, как в пиньине. Цвет значит то же самое.</p>
      <table className="ref">
        <tbody>
          <tr>
            <th>Знак</th>
            <th>Тон</th>
            <th>Голос</th>
            <th>Пример из курса</th>
          </tr>
          <tr>
            <td>нет</td>
            <td>средний</td>
            <td>ровно</td>
            <td className="thai">กิน <span className="rom mid">gin</span></td>
          </tr>
          <tr>
            <td>à</td>
            <td className="low">низкий</td>
            <td>ниже обычного</td>
            <td className="thai">จะ <span className="rom low">jà</span></td>
          </tr>
          <tr>
            <td>â</td>
            <td className="falling">падающий</td>
            <td>сверху вниз</td>
            <td className="thai">ไม่ <span className="rom falling">mâi</span></td>
          </tr>
          <tr>
            <td>á</td>
            <td className="high">высокий</td>
            <td>высоко</td>
            <td className="thai">รัก <span className="rom high">rák</span></td>
          </tr>
          <tr>
            <td>ǎ</td>
            <td className="rising">восходящий</td>
            <td>снизу вверх</td>
            <td className="thai">ไหม <span className="rom rising">mǎi</span></td>
          </tr>
        </tbody>
      </table>
      <p>Две одинаковые буквы — долгий гласный: <b>a</b> коротко, <b>aa</b> долго. Конечные <b>p t k</b> не взрывайте.</p>
      <table className="ref">
        <tbody>
          <tr>
            <th>Запись</th>
            <th>Как звучит</th>
          </tr>
          <tr>
            <td>g</td>
            <td>к без выдоха, буква ก</td>
          </tr>
          <tr>
            <td>kh</td>
            <td>к с выдохом, ข или ค</td>
          </tr>
          <tr>
            <td>bp</td>
            <td>п без выдоха, ป. Это один звук</td>
          </tr>
          <tr>
            <td>ph</td>
            <td>п с выдохом, ผ или พ</td>
          </tr>
          <tr>
            <td>dt</td>
            <td>т без выдоха, ต. Один звук</td>
          </tr>
          <tr>
            <td>th</td>
            <td>т с выдохом, ถ или ท. Не английское think</td>
          </tr>
          <tr>
            <td>ng</td>
            <td>нг, бывает и в начале слова</td>
          </tr>
          <tr>
            <td>ɛ ɔ ə ʉ</td>
            <td>открытое э, открытое о, краткое ы, «у» с улыбкой</td>
          </tr>
        </tbody>
      </table>
      <h2>Куда ставить слова</h2>
      <p>кто → действие → кого/что.</p>
      <p>Время ставится в начале. <b>ไม่</b> ставится прямо перед действием. <b>ไหม</b> ставится после всей фразы и перед ครับ / ค่ะ. Частица вежливости закрывает фразу.</p>
      <p className="thai">พรุ่งนี้ · คุณ · จะ · รัก · ผม · ไหม · ครับ</p>
      <p className="rom"><span className="sy falling">phrûng</span>-<span className="sy high">níi</span> <span className="sy mid">khun</span> <span className="sy low">jà</span> <span className="sy high">rák</span> <span className="sy rising">phǒm</span> <span className="sy rising">mǎi</span> <span className="sy high">khráp</span></p>
      <p>Не путайте два слова на «этот». นี้ níi, высокий, стоит после вещи: อันนี้ «вот это». ที่นี่ thîi-nîi «здесь»: оба слога падают.</p>
      <h2>Местоимения и конец фразы</h2>
      <table className="ref">
        <tbody>
          <tr>
            <td className="thai">ผม phǒm</td>
            <td>я, говорит мужчина. В конце всегда ครับ khráp, и в вопросе тоже</td>
          </tr>
          <tr>
            <td className="thai">ฉัน chǎn</td>
            <td>я, говорит женщина. Утверждение заканчивается ค่ะ khâ, вопрос — คะ khá</td>
          </tr>
          <tr>
            <td className="thai">คุณ khun</td>
            <td>вы</td>
          </tr>
          <tr>
            <td className="thai">เขา khǎo</td>
            <td>он, она, они</td>
          </tr>
          <tr>
            <td className="thai">เรา rao</td>
            <td>мы</td>
          </tr>
        </tbody>
      </table>
      <h2>Вопрос и отрицание</h2>
      <p>Да или нет: та же фраза плюс ไหม в конце. Кто, что, куда, когда стоят на месте ответа: คุณกินอะไร «вы едите что».</p>
      <p>ไม่ перед глаголом — «не делаю». ไม่ได้ перед глаголом — «не сделал». Глагол + ไม่ได้ — «не могу сделать».</p>
      <h2>Как сказать «быть»</h2>
      <table className="ref">
        <tbody>
          <tr>
            <td className="thai">เป็น bpen</td>
            <td>роль: ผมเป็นครู я учитель</td>
          </tr>
          <tr>
            <td className="thai">อยู่ yùu</td>
            <td>место: ผมอยู่บ้าน я дома</td>
          </tr>
          <tr>
            <td className="thai">มี mii</td>
            <td>имеется: ที่นี่มีน้ำ здесь есть вода</td>
          </tr>
          <tr>
            <td>без связки</td>
            <td>признак: ผมหิว я голоден</td>
          </tr>
          <tr>
            <td className="thai">ไม่ใช่</td>
            <td>это не так: ผมไม่ใช่หมอ я не врач</td>
          </tr>
        </tbody>
      </table>
      <h2>Чьё и сколько</h2>
      <p>Вещь, потом чья: บ้านผม мой дом. Счёт: вещь + число + классификатор: น้ำสองแก้ว два стакана воды.</p>
      <h2>Голос на iPhone</h2>
      <p>Настройки → Универсальный доступ → Проговаривание содержимого → Голоса → Тайский. После загрузки кнопки «слушать» работают без интернета. Голос робота только сверяет звук. Говорите вы.</p>
    </>
  )
}
