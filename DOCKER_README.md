# 루미에르 필라테스 스튜디오 - Docker 배포 가이드

## 사전 요구사항
- Docker 및 Docker Compose 설치

## 실행 방법

### 1. GitHub에서 프로젝트 클론
```bash
git clone https://github.com/jdtsolution/lumiere-pilates-studio.git
cd lumiere-pilates-studio
```

### 2. Docker 컨테이너 실행
```bash
docker-compose up --build -d
```

### 3. 데이터베이스 테이블 생성
```bash
docker-compose exec app npm run db:push
```

### 4. 브라우저에서 확인
```
http://localhost:5000
```

## 데이터베이스 정보
- 호스트: postgres (Docker 내부) / localhost:5432 (외부)
- 데이터베이스명: pilates_studio
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

### PostgreSQL 접속
```bash
docker-compose exec postgres psql -U pilates -d pilates_studio
```

### 데이터 볼륨 포함 완전 삭제
```bash
docker-compose down -v
```

## 시드 데이터 추가 (선택)

PostgreSQL에 접속 후:
```sql
INSERT INTO instructors (name, role, bio, image_url) VALUES
('김서연', '수석 강사', '재활 전문 10년 이상 경력의 공인 필라테스 강사입니다.', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800'),
('이준호', '스트렝스 코치', '다이나믹한 리포머 운동을 통해 운동 능력과 코어 안정성에 집중합니다.', 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800'),
('박지현', '마음챙김 무브먼트', '요가와 필라테스의 원리를 결합하여 전인적인 웰니스 접근법을 제공합니다.', 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800');

INSERT INTO programs (title, description, duration, difficulty) VALUES
('기초 리포머', '초보자에게 완벽한 클래스입니다. 리포머 기구에서 필라테스의 핵심 원리를 배워보세요.', '50분', '초급'),
('파워 스컬프트', '근력, 지구력, 토닝에 집중하는 고강도 클래스입니다.', '50분', '상급'),
('리스토러티브 플로우', '유연성, 호흡법, 부드러운 움직임에 집중하여 균형을 회복하는 클래스입니다.', '60분', '전 레벨');
```
