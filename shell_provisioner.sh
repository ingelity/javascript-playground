#!/usr/bin/env bash

# set ownership of shared folder to vagrant user
sudo chown vagrant:vagrant /vagrant

# install nodejs using PPA so that we get the latest release, because
# official ubuntu repository (apt-get) probably doesn't have the latest one.
curl --silent --location https://deb.nodesource.com/setup_4.x | sudo bash -
sudo apt-get install --yes nodejs
sudo npm install -g npm@latest
#sudo npm install -g n
#sudo n stable

# install arangodb (arangodb is automatically started after install)
sudo wget https://www.arangodb.com/repositories/arangodb2/xUbuntu_14.04/Release.key
sudo apt-key add - < Release.key
sudo echo 'deb https://www.arangodb.com/repositories/arangodb2/xUbuntu_14.04/ /' >> /etc/apt/sources.list.d/arangodb.list
sudo apt-get update
sudo apt-get -q -y install arangodb=2.6.8
sudo cp /vagrant/arangod.conf /etc/arangodb/arangod.conf
#sudo /etc/init.d/arangodb restart
