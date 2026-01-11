# 루미에르 필라테스 스튜디오 - Docker 배포 가이드

## 사전 요구사항
- Docker 및 Docker Compose 설치

## 실행 방법

### 1. GitHub에서 프로젝트 클론
```bash
git clone https://github.com/jdtsolution/lumiere-pilates-studio.git
cd lumiere-pilates-studio
```

### 2. drizzle.config.ts 수정 (필수)
```typescript
// dialect: "postgresql" 을 아래로 변경
dialect: "mysql"
```

### 3. Docker 컨테이너 실행
```bash
docker-compose up --build -d
```

### 4. 데이터베이스 테이블 생성
```bash
docker-compose exec app npm run db:push
```

### 5. 브라우저에서 확인
```
http://localhost:5000
```

## 데이터베이스 정보
- 호스트: mysql (Docker 내부) / localhost:3306 (외부)
- 데이터베이스명: pilates_studio
- Root 비밀번호: Rlawjdtjr13@4
- 사용자: pilates
- 비밀번호: Pilates0987!!

## 유용한 명령어

### 컨테이너 중지
```bash
docker-compose down
```

### 로그 확인
```bash
docker-compose logs -f
```

### MySQL 접속
```bash
docker-compose exec mysql mysql -u pilates -p pilates_studio
```

### 데이터 볼륨 포함 완전 삭제
```bash
docker-compose down -v
```
