# 滅びのバーストストリーム
down-rm:
	docker-compose down --rmi all --volumes --remove-orphans

setup-aws-cli:
	pip3 uninstall awscli && \
	curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg" && \
	sudo installer -pkg AWSCLIV2.pkg -target /
	rm AWSCLIV2.pkg

aws-login:
	aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 298618414706.dkr.ecr.ap-northeast-1.amazonaws.com

retauch-tag:
	docker tag checkcalorie-front_front:latest 298618414706.dkr.ecr.ap-northeast-1.amazonaws.com/checkcalorie-front:latest

tag-push:
	docker push 298618414706.dkr.ecr.ap-northeast-1.amazonaws.com/checkcalorie-front:latest