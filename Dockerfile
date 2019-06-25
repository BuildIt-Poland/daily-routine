FROM cypress/base:10
RUN apt -y update
RUN apt -y install python3-pip
RUN pip3 install --upgrade pip -i https://pypi.python.org/simple
RUN pip3 install awscli
