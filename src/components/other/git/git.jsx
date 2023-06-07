import React from 'react';

function GitAndGitHub() {

  return (
    <section className="conspect">
      <h1>Работа с git и GitHub (hub - узел или центр)</h1>
      <p>Система контроля версий, или VCS (SCM), — программа, позволяющая контролировать изменения в проекте.</p>
      <p>Git — один из примеров системы контроля версий: он позволяет хранить, изменять и анализировать историю проекта.</p>
      <p>Git — незаменимый в команде инструмент, ведь он помогает объединять результаты работы нескольких человек.</p>

      <h2>Console (терминал)</h2>
      <p>Консоль (информатика) — интерфейс пользователя, окно для вывода системных сообщений и приёма команд; программное обеспечение для управления компьютером; программное обеспечение, реализующее текстовый интерфейс пользователя.</p>
      <h3>Команды</h3>
      <ul>
        <li>Справка по командам — help</li>
        <li>Очистить консоль — cls</li>
        <li>Информация о системе — systeminfo</li>
        <li>Информация о сетевых настройках — ipconfig</li>
        <li>Список запущенных процессов — tasklist</li>
        <li>Содержимое текущей папки — dir</li>
        <li>mkdir или md - создаёт папку.</li>
        <li>Удалить папку — rmdir или rd</li>
        <li>Удаление файла — del или erase</li>
        <li>Переименование файла — ren или rename</li>
        <li>pwd(print working directory) - полный путь до папки, в кот. мы находимся.</li>
        <li>cd (от англ. change directory — «сменить директорию») - путешествие по папкам.</li>
        <li>Tab - дополняет назавание</li>
        <li>cd - - вернуться в предыдущую папку</li>
        <li>cd ~ - вернуться в домашнюю папку</li>
        <li>cd ../ - подняться на уровень выше. cd ../../ - подняться на 2 уровня выше</li>
        <li>ls (от англ. list directory contents — «отобразить содержимое директории») - список, посмотреть в папке. ls -1 - посмотреть что в папке списком. </li>
        <li>ls -1 -a - в том числе скрытые</li>
        <li>start . - открыть текущую папку/файл в проводнике/программе по умолчанию. Точка - это текущая папка</li>
        <li>Показать дерево папок — tree</li>
      </ul>
      <p>Есть ещё одна команда с точкой - "cd .". Чтобы обратиться к текущей директории, можно использовать .. Но это нужно довольно редко — например, для запуска скриптов и программ, которые принимают папку в качестве параметра.</p>
      <p>У многих команд консоли есть дополнительные опции. Например, если вы вызовете ls, то увидите список обычных файлов в директории. Но можно вызвать ls с флагом -a и вывести расширенный список. В нём отобразятся все скрытые файлы, которые начинаются с символа . (например, файлы конфигурации). В том числе два особых файла . и .., которые обозначают текущую и родительскую директории.</p>
      <p>А ещё, как и другие команды, ls может работать с символом домашней директории (~) и предыдущей директории (..). Например, ls ~ выведет содержимое домашней директории вне зависимости от того, что показывает pwd. А ls .. покажет содержимое родительской директории.</p>

      <h3>Операции с папками и файлами: создание, копирование, перемещение</h3>
      <p>Чтобы создать файл, нужно ввести в консоль команду touch (англ. «коснуться») с именем файла в качестве параметра: touch %ИМЯ_ФАЙЛА%.</p>
      <p>Для создания директорий через терминал используют другую команду — mkdir (от англ. make directory — «создать директорию»).</p>
      <p>Можно создать целую структуру директорий одной командой с помощью флага -p.</p>
      <pre> mkdir -p dir1/dir-inside/dir-deeper-inside
        # создали папку dir-deeper-inside в папке dir-inside, которая находится в папке dir1 </pre>
      <p>Также можно использовать обе команды вместе с символом домашней директории (~) или родительской директории (..). Например, команда mkdir ~/my-git-projects создаст папку my-git-projects внутри домашней директории.</p>
      <p>А команда touch ../../file.txt создаст файл file.txt на две папки выше по иерархии. Допустим, если вы находитесь в директории projects/git/hello, команда touch ../../file.txt создаст файл по такому пути: projects/file.txt.</p>
      <p>Для копирования файлов через терминал существует команда cp (от англ. copy — «копировать»). В простом виде cp принимает два параметра: что копируем и куда копируем.</p>
      <pre>cp что_копируем куда_копируем

$ cp index.html /src
        # скопировали index.html в папку src

        Но можно указать сразу несколько файлов.
$ cp что_копируем что_копируем что_копируем куда_копируем

$ cp index.html style.css script.js /src
        # скопировали три файла (index.html, style.css и script.js) в папку src</pre>

      <p>Команда mv (от англ. move — «переместить») - перемещение файлов и папок.</p>
      <p>Чтобы прочитать текстовый файл, в консоль нужно ввести cat (от англ. concatenate and print — «объединить и распечатать») вместе с именем файла. Команда распечатает то, что содержится в нём.</p>
      <p>Чтобы удалить файл, нужно напечатать команду rm (от англ. remove — «удалить») и передать ей имя файла.</p>
      <p>Удалить папку можно командой rmdir (от англ. remove directory — «удалить директорию»). Не забудьте указать имя папки.</p>
      <p>Если в папке, которую вы пытаетесь стереть, есть какие-то файлы, то командная строка не удалит её и выведет сообщение о том, что папка не пуста (англ. Directory not empty).</p>
      <p>Это защита от случайного удаления нужных файлов. Если папку всё-таки нужно удалить вместе со всем её содержимым, можно использовать команду rm так.</p>
      <pre>$ rm -r images # удалили папку images со всем её содержимым из текущей директории </pre>
      <p>В этом случае команда rm -r (-r — от англ. recursive, «рекурсивный») рекурсивно удаляет файлы и папки. Это значит, что удаление будет последовательно применяться к каждому из элементов в этой папке — пока не сотрёт их все. Затем команда удалит пустую директорию.</p>
      <p className="hl-4">Будьте осторожны: удаление объектов командами rm и rmdir необратимо — в этом случае файлы и папки не попадают в корзину и исчезают навсегда.</p>
      <p>Команды в терминале необязательно вбивать и выполнять по очереди. Их можно указывать не по одной, а сразу списком. Для этого их нужно разделить двумя амперсандами (&&).</p>
      <p>Необязательно заучивать все команды наизусть. Если нужно найти какую-нибудь из них, достаточно вспомнить, с каких букв она начинается. Можно набрать их в командной строке и дважды нажать клавишу Tab. Терминал покажет список всех команд, которые начинаются с этих символов.</p>

      <h3>Файл настройки .gitconfig</h3>
      <p>Чтобы участникам проекта было понятно, кто и какие изменения вносил, нужно представиться и указать имя пользователя и адрес электронной почты. git config (от англ. configuration — «конфигурация», «настройка») с ключом --global (англ. «глобальный»). При этом не имеет значения, в какой директории вы находитесь прямо сейчас: вызов git config --global сработает везде.</p>
      <p>Все глобальные настройки Git хранит в файле .gitconfig в домашней директории. Команда запишет в этот файл указанные имя и почту. Чтобы убедиться в этом, можно вызвать команду для чтения файлов - cat ~/.gitconfig или git config --list.</p>
      <p></p>
      <p></p>

      <h2>Графический интерфейс vs командная строка</h2>
      <p>У программ есть привычный графический интерфейс (англ. Graphical User Interface, или GUI). Это окна, значки, кнопки, выпадающее меню с настройками и прочие элементы.</p>
      <p>Командная строка (англ. Command-line Interface, или CLI) — тоже интерфейс, только текстовый.</p>
      <p>Консоль: атавизм или необходимость? Сначала все операционные системы были консольными, поэтому с компьютерами могли работать только программисты. Графический интерфейс — с окошками и кнопками — появился гораздо позже и изменил мир. Теперь компьютерами могут пользоваться все. Но и сегодня многие программы изначально пишут в виде консольных приложений — и лишь затем у них появляется графический интерфейс. Это удобно, ведь у некоторых компьютеров, например у серверов в центрах обработки данных, нет GUI. Консоль помогает взаимодействовать с ними.</p>
      <p></p>
      <p></p>

      <h2>Глоссарий терминов для Git и GitHub</h2>
      <dl>
        <dt>git (&quot;мерзавец&quot; с англ., назвал Линус Торвальдс в честь себя):</dt>
        <dd>распределённая и децентрализованная система контроля и управления версиями файлов.</dd>
        <dt>GitHub(Bitbucket, GitLab то же самое):</dt>
        <dd>веб-сервис для размещения репозиториев и совместной разработки проектов.</dd>
        <dt>Репозиторий Git</dt>
        <dd>Проект, в котором была инициализирована система Git. При инициализации в проект добавляется скрытая папка .git(в этой папке хранятся все версии рабочей области и служебная информация). Репозиторий хранит все рабочие файлы и историю их изменений. Это каталог файловой системы, в котором находятся: файлы конфигурации, файлы журналов операций, выполняемых над репозиторием, индекс расположения файлов и хранилище, содержащее сами контролируемые файлы.</dd>
        <dt>Локальный репозиторий (local)</dt>
        <dd>репозиторий, расположенный на локальном компьютере разработчика в каталоге. Именно в нём происходит разработка и фиксация изменений, которые отправляются на удалённый репозиторий.</dd>
        <dt>Удалённый репозиторий (remote)</dt>
        <dd>репозиторий, находящийся на удалённом сервере.  Это общий репозиторий, в который приходят все изменения и из которого забираются все обновления.</dd>
        <dt>Форк (fork - вилка)</dt>
        <dd>копия репозитория. Его также можно рассматривать как внешнюю ветку для текущего репозитория. Копия вашего открытого репозитория на Гитхабе может быть сделана любым пользователем, после чего он может прислать изменения в ваш репозиторий через пулреквест.</dd>
        <dt>Обновиться из апстрима</dt>
        <dd>обновить свою локальную версию форка до последней версии основного репозитория, от которого сделан форк.</dd>
        <dt>Обновиться из ориджина</dt>
        <dd>обновить свою локальную версию репозитория до последней удалённой версии этого репозитория.</dd>
        <dt>Клонирование (clone)</dt>
        <dd>скачивание репозитория с удалённого сервера на локальный компьютер в определённый каталог для дальнейшей работы с этим каталогом как с репозиторием.</dd>
        <dt>Ветка (branch)</dt>
        <dd>это параллельная версия репозитория. Она включена в этот репозиторий, но не влияет на главную версию, тем самым позволяя свободно работать в параллельной. Когда вы внесли нужные изменения, то вы можете объединить их с главной версией.</dd>
        <dt>Мастер (master)</dt>
        <dd>главная или основная ветка репозитория.</dd>
        <dt>Коммит (commit)</dt>
        <dd>фиксация изменений или запись изменений в репозиторий. Коммит происходит на локальной машине.</dd>
        <dt>Пул (pull)</dt>
        <dd>получение последних изменений с удалённого репозитория. !Может стереть все изменения</dd>
        <dt>Пуш (push)</dt>
        <dd>отправка всех неотправленных коммитов на удалённый сервер репозитория.</dd>
        <dt>Пулреквест (pull request)</dt>
        <dd>запрос на слияние форка репозитория с основным репозиторием. Пулреквест может быть принят или отклонён вами, как владельцем репозитория.</dd>
        <dt>Мёрдж (merge)</dt>
        <dd>слияние изменений из какой-либо ветки репозитория с любой веткой этого же репозитория. Чаще всего слияние изменений из ветки репозитория с основной веткой репозитория.</dd>
        <dt>Кодревью</dt>
        <dd>процесс проверки кода на соответствие определённым требованиям, задачам и внешнему виду.</dd>
      </dl>
      <p>Ссылка на Git Book, раздел команд для консоли:
        <a className="text-link hl-7" href="https://git-scm.com/docs/git#_git_commands" target="blank"><b>Git Commands</b></a>
      </p>
      <p>Новая система (начиная с версии 1.7.2) определяет все настройки для окончаний строк в файле .gitattributes вашего репозитория, инкапсулируя их внутри и делая независимыми от глобальных настроек. Это позволит вам управлять такими настройками, как autocrlf для каждого типа файлов.</p>
      <a className="text-link" href="http://schacon.github.io/git/gitattributes.html" target="blank">gitattributes(5) Manual Page</a>
      <p>Рекомендуется, особенно тем, кто использует Windows для разработки, явно создавать файл gitattributes.</p>
      <a className="text-link" href="https://github.com/alexkaratarakis/gitattributes/blob/master/Common.gitattributes" target="blank">Пример файла .gitattributes с общими настройками, который можно использовать для своего проекта.</a>
      <p><a href="https://githooks.com/" target="_blank" rel="noopener noreferrer">Git Hooks</a></p>
      <ol>
        <li>Создание мастера-репозитория(ссылка в htmlacademy)</li>
        <li>Fork - форкаем проект из мастера-репозитория к себе в GitHub</li>
        <li>Clone - закачиваем проект к себе на комп</li>
        <li>Вносим необходимые изменения в код через свой редактор</li>
        <li>Commit - пишем заголовок, описание, сохраняем изменения</li>
        <li>Push - перекидываем редактированный проект к себе в Git</li>
        <li>Pull-request - перекидываем проект со своего Git в мастер-репозиторий</li>
        <li>В htmlacademy жмём &quot;Задание выполнено&quot;</li>
        <li>Merge - по итоговой проверке наставник мёрджит проект</li>
      </ol>

      <h2>Настройка git</h2>
      <p>git reset --hard HEAD - откатить изменеия до последнего комита</p>
      <p>git --version - покажет установленную версию git</p>
      <p>git config --global user.name &quot;User Name&quot; - добавить своё имя.</p>
      <p>git config --global user.email mail@gmail.com -  добавления почтового адреса.</p>
      <p>--global - такие данные будут сохранены для всех ваших действий в Git и вводить их больше не надо.</p>
      <p>git config --global core.editor editor - Установка текстового редактора, в котором будут открываться файлы для решения конфликтов.</p>
      <p>Если вы хотите менять эту информацию для разных проектов, то в директории проекта вводите эти же команды, только без опции --global.</p>
      <p>git config --list - посмотреть список всех установленных настроек.</p>
      <h4>Чем SSH отличается от HTTPS при клонировании? При HTTPS нужно будет каждый раз вводить имя и пароль от GitHub при каждом изменении репозитория</h4>
      <h2>Генерация ssh-ключа</h2>
      <p>cd ~/.ssh -  перейти в нужный каталог.</p>
      <p>Ищем пару файлов с названиями вида имя и имя.pub. Обычно имя — id_rsa, id_dsa, id_ecdsa или id_ed25519.</p>
      <p>Файл с расширением .pub — ваш публичный ключ, а второй — ваш приватный, секретный ключ.</p>
      <p>Если таких файлов или даже каталога .ssh у вас нет, вы можете их сгенерировать. Для этого делаем следующее.</p>
      <ul>
        <li>Открываем консоль и вводим команду: <code>ssh-keygen -t rsa -b 4096 -C &quot;your_mail@example.com&quot;</code></li>
        <li>Указываем тот адрес электронной почты, который вводили при регистрации на GitHub.</li>
        <li>Далее нужно указать расположение файла для сохранения ключа. Если вы не введёте путь до файла и просто нажмёте Enter, ключ сохранится в файле, указанном в скобках.</li>
        <li>Теперь нужно установить пароль к вашему ключу и дважды ввести его. Если вы не хотите вводить пароль каждый раз, когда используете ключ, пропустите этот шаг, нажав «Enter», и ничего не вводите.</li>
        <li>Добавляем ключ в ssh-agent (сгенерированный или уже существующий): <br /> Проверяем доступность ключа командой <code>eval &quot;$(ssh-agent -s)&quot;</code> и добавляем с помощью <code>ssh-add ~/.ssh/your_key_name</code>,  где указываем верный путь до файла с ключом и его имя.</li>
      </ul>
      <p>Если вы захотите переименовать ключ, могут возникнуть проблемы. Их можно решить, добавив в ~/.ssh/config связь ключа с доменом.</p>
      <p>Если у вас Windows и вы пользуетесь программой Cmder, возможны проблемы с командой eval &quot;$(ssh-agent -s)&quot;. Может появиться такое сообщение об ошибке: «eval не является внутренней или внешней командой, исполняемой программой или пакетным файлом». В Сmder для запуска ssh-agent можно использовать команду start-ssh-agent.</p>
      <p>Если проблема осталась, рекомендуем работать в Git Bash. После того как создан ключ, его нужно добавить на GitHub. Для этого копируем его содержимое с помощью одной из следующих команд: Если вы на Windows clip . Можно пойти другим путём, открыть файл id_rsa.pub прямо в папке и просто скопировать содержимое оттуда.</p>
      <p>Переходим на страницу для работы с ключами в вашем профиле на GitHub Нажимаем кнопку New SSH key (новый SSH-ключ). Вводим имя ключа (можно придумать абсолютно любое) в поле Title (название), а в Key (ключ) вставляем сам ключ из буфера обмена. Теперь нажимаем Add SSH key (добавить SSH-ключ). Если всё сделано верно, в списке появится новый ключ.</p>

      <h3>Создание репозитория</h3>
      <p>git clone git@github.com:your-nickname/your-project.git - Git начнёт процесс копирования репозитория на ваш компьютер</p>
      <h3>Как сделать репозиторий из любого проекта</h3>
      <ul>
        <li>git config --global user.name &quot;Алиса&quot; - устанавливаем имя</li>
        <li>git config --global user.email &quot;...&quot; - утанавливаем email</li>
        <li>git config --list - посмотреть список всех установленных настроек.</li>
        <li>cat - выводит содержимое файла. cat tilda/.gitconfig - выведет содержимое конфигураций в гите</li>
        <li>git init - отслеживание изменений, инициализировать репозиторий (делается после клона)</li>
        <li>git status - сообщает в каком состоянии репозиторий</li>
        <li>git add - добавить изменеие (делается перед коммитом)</li>
        <li>git add . - проиндекирует текущую папку</li>
        <li>git commit -m &quot;Начали вести историю&quot;. -m значит message.</li>
        <li>git commit --amend -m &quot;...&quot; - исправить комит message</li>
        <li>git diff - показывает различия, что изменилось с последнего коммита.</li>
        <li>git diff -staged - показывает зафиксированные изменения(готовые к коммиту)</li>
        <li>git log - показывает историю коммитов. У каждого коммита есть хэш(длинный такой), по этому номеру можно просмотреть состояние проекта в этом коммите или откатить версию проекта до этого коммита.</li>
        <li>git log -1 - показывает только последний комит. -2, соответственно 2 последних комита. Закрыть log можно клавишей q</li>
        <li>git fetch origin - забрать изменения из удалённого репозитория(master). </li>
        <li />
      </ul>
      <p>При работе на 2 компах, сначала делать git pull(чтобы актуализировать комиты в master), а потом git fetch(чтобы актуализировать комиты в других ветках, если они были созданы)</p>
      <h3>Работа с комитами</h3>
      <p>git show хэш_коммита - покажет какие изменения были в этом коммите</p>
      <p>git checkout хэш_коммита - откатит состояние на указанный коммит</p>
      <p>git checkout css/main.css - вернуть состояние до комита (если нужно убрать последние внесённые изменения). Или вернуть удалённый файл</p>
      <p>git checkout хэш_комита css/main.css - отменяет изменения, которые были в указанном комите</p>
      <p>git reset HEAD index.html - убирает указываемый файл из комита(если нужно сделать разные комиты из разных файлов)</p>
      <p>git rm css/test.css - удаляет файл из комита полностью</p>
      <p>git rm --cashed css/test.css - удаляет файл из комита, но оставляет его физически</p>
      <p>git help commit - справка</p>
      <p>git commit --amend --no-edit - изменить прошлый комит</p>
      <p>git commit --amend -m &quot;...&quot; - изменить message прошлого комита</p>
      <p className="hl-3">Комментарии для комита. простое правило, которому легко следовать: «я только что поменял код. Что и зачем я сделал?», например:</p>
      <ul>
        <li><code>$: git commit -m &quot;Update homepage for launch&quot;</code></li>
        <li><code>$: git commit -m &quot;Fix typo in screen.scss&quot;</code></li>
        <li><code>$: git commit -m &quot;Fix misspelled name on about page&quot;</code></li>
        <li><code>$: git commit -m &quot;добавляет имя наставника в Readme&quot;</code></li>
        <li><code>$: git commit -m &quot;вводит функцию сортировки изображений&quot;</code></li>
        <li><code>$: git commit -m &quot;правит ошибку в поиске городов на карте&quot;</code></li>
      </ul>

      <h3>Работа с ветками</h3>
      <h4>Создадим новую ветку.</h4>
      <p>Открываем терминал, вводим команду <code>git branch</code>. Может создавать, перименовывать и удалять ветки. Она показывает список веток, с которыми мы работаем в проекте, и выделяет текущую.</p>
      <p><code>git checkout -b branch-name</code> создаст ветку с указанным именем и автоматически переключится на неё. После создания ветку можно отправить на сервер с помощью команды <code>git push origin branch-name</code>. Аналогично можно забрать себе на компьютер ветку с удалённого репозитория командой git checkout origin/branch-name -b branch-name.</p>
      <p>Чтобы не хранить названия веток в памяти или не искать названия веток, существуют две специальные команды, которые позволяют посмотреть все существующие ветки локального репозитория git branch или все существующие ветки удалённого репозитория <code>git branch -r</code>.</p>
      <p>Переключиться на любую локальную ветку можно с помощью команды <code>git checkout branch-name</code>.</p>
      <p>После работы в репозитории могут оставаться различные ненужные, неотслеживаемые файлы и прочий мусор. Чтобы удалить всё лишнее, воспользуйтесь командой git clean -f -d.</p>
      <p>Если мы находимся в master создаём новую ветку: git checkout -b имя-новой-ветки. Если текущая ветка не master, сначала переключимся в основную ветку: git checkout master. Мы делаем это, чтобы новая ветка содержала свежую, на момент создания, рабочую версию проекта.</p>
      <p>Если вы ошиблись в названии, например, допустили опечатку, вы можете изменить название ветки с помощью команды: git branch -m старое-имя-ветки новое-имя-ветки.</p>
      <p><code>git status</code> - покажет текущее состояние в вашей ветке, а именно список с названиями изменённых файлов, если они есть, и укажет на те, которые ожидают записи и сохранения (обычно они выделены красным цветом).</p>
      <p>Перед тем, как зафиксировать изменения отдельных файлов, нужно добавить файлы в набор этих изменений. Воспользуйтесь командой git add имя-файла. Если название очень длинное, вы можете начать его писать, затем нажать Tab и консоль сама предложит вам продолжение пути к файлу.</p>
      <p>Если вы хотите сохранить все изменения разом, вводите git add -A. git add ., которая добавляет отслеживание для всех новых файлов из текущей директории. А команда git add -A добавляет ещё и удалённые файлы, не только из текущей директории, но и из всего локального репозитория.</p>
      <p><code>git commit -m &quot;message&quot;</code> - зафиксировать все сохранённые изменения и дать им название. Те изменения, которые мы внесли и сохранили, пока локальны. Их нужно послать на GitHub.</p>
      <p>Чтобы отправить свои изменения (коммиты) в репозиторий на GitHub, введите команду git push origin название-текущей-ветки, где origin означает репозиторий, который был склонирован на компьютер, то есть ваш форк.</p>
      <p>Получить последнюю версию можно с помощью команды git pull. Будьте внимательны, вызов этой команды сотрёт все незафиксированные изменения.</p>
      <p>Если вы внесли изменения и хотите быстро их отменить, то воспользуйтесь командой git reset, которая отменяет все незафиксированные изменения. По умолчанию, эта команда удаляет только из индекса. А команда git reset --hard безвозвратно удаляет незафиксированные текущие изменения из локального репозитория и из индекса.
      </p>
      <p>Поскольку все вышеописанные действия производятся в локальной копии репозитория, эту копию необходимо отправить на сервер, чтобы другие участники процесса смогли получить актуальную версию. Для этого есть команда git push, которая отправляет все зафиксированные изменения на удалённый репозиторий. Работая с Git, приходится постоянно создавать и перемещаться по веткам.</p>
      <p>Если консоль выдаёт ошибку и говорит, что не знает директории с таким именем, нужно добавить ссылку на этот репозиторий: git remote add academy git@github.com:your-repo.git</p>
      <p>Вместо academy указывайте своё название и оно закрепится за этим репозиторием. Теперь отправьте изменения уже из своей ветки master в ваш форк на GitHub с помощью команды git push origin master. Готово, теперь форк и оригинальный репозиторий находятся в актуальном состоянии.</p>
      <p>git log --oneline - выводит комиты  в одну строку, а не в 5 как обычно</p>
      <p>git log --oneline --all - показать все комиты из всех веток</p>
      <p>git log --oneline --all --graph - показать графически</p>
      <p>git cat-file -p имя_комита(6 знаков) - -p - выводит данные в человекочитаемом виде. Показать данные комита</p>
      <p>git merge yellow-design -m &ldquo;...&rdquo; - объединяем ветки. yellow-design - имя ветки которую надо влить в ту, где мы находимся</p>
      <p>git add css/message.css - оставить файл,если merge выдаёт ошибку что в какой-то из веток файл удалённый</p>
      <p>git add  - добавить отслеживание новых файлов, необходимо использовать команду git add для добавления нескольких файлов по имени.</p>
      <p>git rm css/message.css - удалить файл,если merge выдаёт ошибку что в какой-то из веток файл удалённый</p>
      <p>merge - это слияние веток, в результате появляется новый комит(у него 2 родителя). У этого комита будет название ветки, в которой мы находились. При слиянии git называет нашу ветку us, а ветку, кот. мы вливаем - they</p>
      <p>git branch --set-upstream-to=origin/comments - указание, что мы всегда будем делать pull/push этой ветки в эту же ветку(не надо больше писать название веток при пуше и пулле)</p>

      <h3>Обработка ошибок</h3>
      <h4>pull reject, fetch first</h4>
      <p><span className="hl-10">git push -f -u origin &lt;name of branch&gt;</span> - можно делать только если я одна работаю над проектом.</p>

      <h3>Как выложить код на Github</h3>
      <p>git remote add origin [имя репозитория с Github] - добавляет удалённый репозиторий под именем origin и с адресом с гита. Этот код копируется с Github.</p>
      <p>origin - основной удалённый репозиторий</p>
      <p>git remote -v - посмотреть подробно о добавленном репозитории. -v значит &quot;подробно&quot;, а -vv - очень подробно.</p>
      <p>fetch - забрать изменения</p>
      <p>push - отправить изменения</p>
      <p>git push -u origin master - код копируется с Github. </p>
      <p className="hl-9">Чтобы удалить пакеты в node_modules/ массово, вы также можете удалить их из package.json, сохранить их и затем запустить npm prune на терминале. Это приведет к удалению тех пакетов, которые существуют в файловой системе, но не используются/объявлены package.json. P.S &gt; Это особенно полезно в Windows, так как часто возникают проблемы с невозможностью удалить некоторые файлы из-за &ldquo;превышенного ограничения длины пути&rdquo;.</p>

      <h2>Залить код в новый репозиторий</h2>
      <p>В GitHub во вкладке <span className="hl-10">Repositoties</span>жмём кнопку <span className="hl-9">New</span>. Далее читаем варианты, выбираем подходящий.</p>
    </section>
  );
}

export default GitAndGitHub;
